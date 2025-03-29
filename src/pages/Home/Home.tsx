import { useState, useEffect } from "react"
import MoneyFlowCard from "../../components/MoneyFlowCard/MoneyFlowCard"
import FloatingButton from "../../components/FloatingButton/FloatingButton"
import Modal from 'react-bootstrap/Modal'
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import CardDetailTrasactions from "../../components/CardDetailTransactions/CardDetailTransactions";
import { IExpense } from "../../interfaces/IRecentExpenses";
import mockExpenses from "../../components/__mocks__/mockExpenses";
import mockGroups from "../../components/__mocks__/mockGroups"
import { GetGroupsExpensesAndIncomes } from "@/services/Services"

export default function Home () {
    const [show, setShow] = useState(false);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const groupTitle = searchParams.get("group");

    const selectedGroup = mockGroups.find(group => group.title === groupTitle);
    const isGroup = !!selectedGroup;
    const expenses: IExpense[] = isGroup ? selectedGroup!.expenses : mockExpenses;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        console.log("Componente Groups montado");
        GetGroupsExpensesAndIncomes(2);
        return () => {
            console.log("Componente Groups desmontado");
        };
    }, []);

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