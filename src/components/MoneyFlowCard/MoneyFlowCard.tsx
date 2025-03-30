import { Card, Nav, Tab } from 'react-bootstrap';
import { useState } from 'react';
import NewExpenseForm from "../../components/NewExpenseForm/NewExpenseForm"
import NewIncomeForm from '../NewIncomeForm/NewIncomeForm';

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
                            <Nav.Item className='w-50 text-center'>
                                <Nav.Link eventKey="expenses" className='subtitle'>Gasto</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='w-50 text-center'>
                                <Nav.Link eventKey="incomes"  className='subtitle'>Ingreso</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <Tab.Content>
                            <Tab.Pane eventKey="expenses">
                                <NewExpenseForm></NewExpenseForm>
                            </Tab.Pane>
                            <Tab.Pane eventKey="incomes">
                                <NewIncomeForm></NewIncomeForm>
                            </Tab.Pane>
                        </Tab.Content>
                    </Card.Body>
                </Card>
            </Tab.Container>
        </div>
    )
}