import { useState, useEffect } from "react"
import MoneyFlowCard from "../../components/MoneyFlowCard/MoneyFlowCard"
import FloatingButton from "../../components/FloatingButton/FloatingButton"
import Modal from 'react-bootstrap/Modal'
import { useLocation } from "react-router-dom";
import CardDetailTrasactions from "../../components/CardDetailTransactions/CardDetailTransactions";
import mockExpenses from "../../components/__mocks__/mockExpenses";
import { fetchGroupExpensesAndIncomes } from "../../services/api";
import { IExpense } from "../../interfaces/IExpense";
import { getCategories } from '../../services/api';

export default function Home () {

    const [show, setShow] = useState(false);
    const [groupExpenses, setGroupExpenses] = useState<IExpense[]>([]);
    const [, setLoading] = useState(false);
    const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const groupTitle = searchParams.get("group");
    const isGroup = Boolean(groupTitle);

    useEffect(() => {
        if (isGroup) {
            setLoading(true);
            fetchGroupExpensesAndIncomes(2)
                .then((data) => setGroupExpenses(data))
                .finally(() => setLoading(false));
        }
    }, [isGroup]);

    
    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await getCategories();
            setCategories(response || []);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    const expenses = isGroup && groupExpenses.length > 0 ? groupExpenses : mockExpenses;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <main>
            <section>
                <div className="wrap">
                    {groupTitle &&
                        <div>
                            <h1 className="mb-1">{groupTitle}</h1>
                            <div className="mb-4 subtitle">Detalles del grupo y transacciones</div>
                        </div>
                    }
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title className="title">Nuevo Movimiento</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <MoneyFlowCard categories={categories}></MoneyFlowCard>
                        </Modal.Body>
                    </Modal>
                    <CardDetailTrasactions onClick={handleShow} expenses={expenses} isGroup={isGroup} />
                    <FloatingButton onClick={handleShow} />
                </div>

            </section>
        </main>
    )
}