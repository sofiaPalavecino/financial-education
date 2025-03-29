import { Button, Card, Nav } from "react-bootstrap";

export default function CardDetailGroup() {
    return (
        <Card>
            <Card.Header>
                <Card.Title>Nombre del grupo seleccionado</Card.Title>
                <Card.Text>Detalles del grupo y sus movimientos.</Card.Text>

            </Card.Header>
            <Card.Body>
                <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href="#first">Movimientos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#link">Miembros</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#disabled" >Objetivos</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Button variant="primary" style={{ width: '100%' }}><i className="bi bi-plus"></i>Agregar movimiento</Button>
            </Card.Body>
        </Card>
    )
}