import { Button, Form, Modal } from "react-bootstrap";

export default function ModalCreateGroup({show, handleClose}: any) {
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Crear un nuevo grupo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex mb-4">Crea un grupo para compartir gastos con amigos, familiares o colegas.</div>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre del grupo</Form.Label>
                        <Form.Label>Objetivo del grupo</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="e.g.,Casa, Viaje a París"
                            autoFocus
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Crear grupo
                </Button>
            </Modal.Footer>
        </Modal>
    )
}