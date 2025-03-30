import { Card, Nav, Tab } from 'react-bootstrap';
import { useState } from 'react';
import NewExpenseForm from "../../components/NewExpenseForm/NewExpenseForm"
import NewIncomeForm from '../NewIncomeForm/NewIncomeForm';

export default function MoneyFlowCard () {

    return (
            <Tab.Container defaultActiveKey="expenses"> 
                        <Nav variant="tabs">
                            <Nav.Item >
                                <Nav.Link eventKey="expenses" className='subtitle'>Gasto</Nav.Link>
                            </Nav.Item>
                            <Nav.Item >
                                <Nav.Link eventKey="incomes"  className='subtitle'>Ingreso</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="expenses">
                                <NewExpenseForm></NewExpenseForm>
                            </Tab.Pane>
                            <Tab.Pane eventKey="incomes">
                                <NewIncomeForm></NewIncomeForm>
                            </Tab.Pane>
                        </Tab.Content>
            </Tab.Container>
    )
}