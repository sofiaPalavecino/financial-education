import { useState, useEffect } from "react"
import MoneyFlowCard from "../../components/MoneyFlowCard/MoneyFlowCard"
import FloatingButton from "../../components/FloatingButton/FloatingButton"
import Modal from 'react-bootstrap/Modal'
import { useLocation } from "react-router-dom";
import CardDetailTrasactions from "../../components/CardDetailTransactions/CardDetailTransactions";
import mockExpenses from "../../components/__mocks__/mockExpenses";
import { fetchGroupExpensesAndIncomes, fetchUserGroupPersonal } from "../../services/api";
import { IExpense } from "../../interfaces/IExpense";
import { getCategories } from '../../services/api';

export default function Home () {

    const [show, setShow] = useState(false);
    const [expenses, setExpenses] = useState<IExpense[]>([]);
    const [groupTitle, setGroupTitle] = useState<string | null>(null);
    const [, setLoading] = useState(false);
    const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const groupIdFromURL  = searchParams.get("group");
    const userId = localStorage.getItem("userId");
    const isGroup = Boolean(groupIdFromURL);

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

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            let groupId = groupIdFromURL ? Number(groupIdFromURL) : null;

            if (!groupId) {
                console.log("entro en el if");
                
                const personalGroup = await fetchUserGroupPersonal(Number(userId));
                
                if (personalGroup && personalGroup.length > 0) {
                    groupId = personalGroup[0].groups.id;
                    // setGroupTitle(personalGroup[0].groups.name);
                }
            }

            if (groupId) {
                const transactions = await fetchGroupExpensesAndIncomes(groupId);
                
                setExpenses(transactions);
            } else {
                setExpenses(mockExpenses);
            }

            setLoading(false);
        };

        fetchData();
    }, [groupIdFromURL, userId]);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <main>
            <section>
                <div className="wrap">
                    {isGroup &&
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