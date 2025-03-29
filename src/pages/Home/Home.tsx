import { useState, useEffect } from "react"
import MoneyFlowCard from "../../components/MoneyFlowCard/MoneyFlowCard"
import FloatingButton from "../../components/FloatingButton/FloatingButton"
import Modal from 'react-bootstrap/Modal'
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import CardDetailTrasactions from "../../components/CardDetailTransactions/CardDetailTransactions";
import mockExpenses from "../../components/__mocks__/mockExpenses";
import { fetchGroupExpensesAndIncomes } from "../../services/api";
import { IExpense } from "../../interfaces/IExpense";

export default function Home () {
    const [show, setShow] = useState(false);
    const [groupExpenses, setGroupExpenses] = useState<IExpense[]>([]);
    const [, setLoading] = useState(false);

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
                            <div className="mb-4">Detalles del grupo y transacciones</div>
                        </div>
                    }
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Nuevo Movimiento</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <MoneyFlowCard></MoneyFlowCard>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
                        </Modal.Footer>
                    </Modal>
                    <CardDetailTrasactions onClick={handleShow} expenses={expenses} isGroup={isGroup} />
                    <FloatingButton onClick={handleShow} />
                </div>

            </section>
        </main>
    )
}