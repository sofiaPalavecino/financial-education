import CardGroup from "../../components/Card-group/Card-group";
import ModalCreateGroup from "../../components/Modal-create-group/Modal-create-group";
import { useState } from "react";
import CardDetailGroup from '../../components/Card-detail-group/Card-details-group';
export default function Groups () {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const groups = [
        { title: "Casa", members: "Miembros..." },
        { title: "Viaje a París", members: "Miembros..." },
        { title: "Trabajo", members: "Miembros..." }
    ];

    return (
        <section className="c-group">
            <div className="wrap">
                <div className="d-flex align-items-center gap-2">
                    <h1>Grupos</h1>
                    <i className="bi bi-people-fill fs-1"></i>
                </div>
                <div>Comparta los gastos y realice un seguimiento de los gastos del grupo</div>

                <CardGroup groups={groups} onAddGroup={handleShow}/>

                <ModalCreateGroup show={show} handleClose={handleClose}/>

                <CardDetailGroup/>
            </div>
            {/* <div className="wrap">
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
                            <Nav.Link href="#disabled" >
                            Objetivos
                            </Nav.Link>
                        </Nav.Item>
                        </Nav>
                        <Button variant="primary" style={{width:'100%'}}><i className="bi bi-plus"></i>Agregar movimiento</Button>
                    </Card.Body>
                </Card>
            </div> */}
        </section>
    )
}