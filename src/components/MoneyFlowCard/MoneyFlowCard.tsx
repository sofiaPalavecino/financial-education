import { Card, Nav, Tab } from 'react-bootstrap';
import { useState } from 'react';
import NewExpenseForm from "../../components/NewExpenseForm/NewExpenseForm"

export default function MoneyFlowCard () {

    const [activeKey, setActiveKey] = useState<string>("expenses");

    const handleTabSelect = (key: string | null) => {
        if (key) {
        setActiveKey(key);
        }
    };

    return (
        <div className="c-money-flow">
            <Tab.Container activeKey={activeKey} onSelect={handleTabSelect}>
                <Card className="shadow-sm">
                    <Card.Header>
                        <Nav variant="tabs">
                            <Nav.Item>
                                <Nav.Link eventKey="expenses">Gasto</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="incomes">Ingreso</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <Tab.Content>
                            <Tab.Pane eventKey="expenses">
                                <NewExpenseForm></NewExpenseForm>
                            </Tab.Pane>
                            <Tab.Pane eventKey="incomes">
                                <p>This is the profile tab content. You can put any components or information here.</p>
                                <p>User details, avatar, bio, and other profile-related information would go here.</p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Card.Body>
                </Card>
            </Tab.Container>
        </div>
    )
}