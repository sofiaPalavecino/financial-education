import { Nav, Tab } from 'react-bootstrap';
import NewExpenseForm from "../../components/NewExpenseForm/NewExpenseForm"
import NewIncomeForm from '../NewIncomeForm/NewIncomeForm';

type MoneyFlowCardProps = {
    categories: { id: string, name: string }[];
};

export default function MoneyFlowCard ({ categories }:MoneyFlowCardProps ) {
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
                                <NewExpenseForm categories={categories}></NewExpenseForm>
                            </Tab.Pane>
                            <Tab.Pane eventKey="incomes">
                                <NewIncomeForm></NewIncomeForm>
                            </Tab.Pane>
                        </Tab.Content>
            </Tab.Container>
    )
}