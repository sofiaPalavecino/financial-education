import { Card, Nav, Tab } from "react-bootstrap";
import RecentExpenses from '../ExpensesTable/ExpensesTable';
import MembersList from "../MembersList/MembersList";
import Achievements from "../Achievements/Achievements";
import { useState } from "react";
import { ICardDetailTransactions } from "@/interfaces/ICardDetailTransactions";

export default function CardDetailTrasactions({ onClick, expenses, isGroup }: ICardDetailTransactions) {
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
                            <Nav.Link eventKey="transactions" className="subtitle">Movimientos</Nav.Link>
                        </Nav.Item>
                        {isGroup && 
                        <Nav.Item>
                            <Nav.Link eventKey="members" className="subtitle">Miembros</Nav.Link>
                        </Nav.Item>}
                        <Nav.Item>
                            <Nav.Link eventKey="objetives" className="subtitle">Objetivos</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Tab.Content>
                        <Tab.Pane eventKey="transactions">
                            <RecentExpenses onClick={onClick} expenses={expenses} />
                        </Tab.Pane>
                        {isGroup &&
                            <Tab.Pane eventKey="members">
                                <MembersList members={[
                                    { name: "Juan Pérez", avatar: "https://via.placeholder.com/40" },
                                    { name: "María López", avatar: "https://via.placeholder.com/40" },
                                    { name: "Carlos Sánchez", avatar: "https://via.placeholder.com/40" }
                                ]} />
                            </Tab.Pane>
                        }
                        <Tab.Pane eventKey="objetives">
                            <Achievements></Achievements>
                        </Tab.Pane>
                    </Tab.Content>
                </Card.Body>
            </Card>
        </Tab.Container>
    )
}