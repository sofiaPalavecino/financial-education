import { useState } from "react"
import MoneyFlowCard from "../../components/MoneyFlowCard/MoneyFlowCard"
import RecentExpenses from "../../components/ExpensesTable/ExpensesTable"
import FloatingButton from "../../components/FloatingButton/FloatingButton"
import Modal from 'react-bootstrap/Modal'
import { Button } from "react-bootstrap";

export default function Home () {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <section>
            <div className="wrap">
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
                <RecentExpenses></RecentExpenses>
                <MoneyFlowCard></MoneyFlowCard>
                <FloatingButton onClick={handleShow} />
            </div>
        </section>
    )
}