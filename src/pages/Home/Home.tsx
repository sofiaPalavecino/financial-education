import { useState } from "react"
import MoneyFlowCard from "../../components/MoneyFlowCard/MoneyFlowCard"
import FloatingButton from "../../components/FloatingButton/FloatingButton"
import Goal from "../../components/Goal/Goal"
import Modal from 'react-bootstrap/Modal'
import { Button } from "react-bootstrap";
import CardDetailGroup from '../../components/CardDetailTransactions/CardDetailTransactions';

export default function Home () {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <main>
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
                    <CardDetailGroup onClick={handleShow}/>
                </div>
            </section>
            <section>
                <div className="wrap">
                    <h2 className="mb-4">Objetivos</h2>
                    <Goal name={"Viaje"} goal={350} progress={75.8}></Goal>
                    <FloatingButton onClick={handleShow} />
                </div>
            </section>
        </main>
    )
}