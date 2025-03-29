import { Card, Nav, Tab } from "react-bootstrap";
import RecentExpenses from '../ExpensesTable/ExpensesTable';
import MembersList from "../MembersList/MembersList";
import Achievements from "../Achievements/Achievements";
import { useState } from "react";

type RecentExpensesProps = {
    onClick: () => void;
};

export default function CardDetailGroup({ onClick }: RecentExpensesProps) {
    const [activeKey, setActiveKey] = useState<string>("transactions");

    const handleTabSelect = (key: string | null) => {
        if (key) {
        setActiveKey(key);
        }
    };
    return (
        <Tab.Container activeKey={activeKey} onSelect={handleTabSelect}>
        <Card className="shadow-sm">
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="transactions">
                    <Nav.Item>
                        <Nav.Link eventKey="transactions">Movimientos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="members">Miembros</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="objetives">Objetivos</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                <Tab.Content>
                    <Tab.Pane eventKey="transactions">
                        <RecentExpenses onClick={onClick}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="members">
                    <MembersList members={[
                            { name: "Juan Pérez", avatar: "https://via.placeholder.com/40" },
                            { name: "María López", avatar: "https://via.placeholder.com/40" },
                            { name: "Carlos Sánchez", avatar: "https://via.placeholder.com/40" }
                        ]} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="objetives">
                        <Achievements></Achievements>
                    </Tab.Pane>
                </Tab.Content>
                {/* <Button variant="primary" style={{ width: '100%' }}><i className="bi bi-plus"></i>Agregar movimiento</Button> */}
            </Card.Body>
        </Card>
        </Tab.Container>
    )
}