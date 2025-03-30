import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Strategies from '../../components/Strategies/Strategies';
import InvestmentTools from '../../components/InvestmentTools/InvestmentTools';

export default function Education () {
    return (
        <section>
            <div className="wrap">
                <h1 className='title'>Educación 📚</h1>
                <p className="subtitle">Aprendé técnicas de ahorro y conocé más sobre herramientas de inversión</p>

                <Tab.Container defaultActiveKey="strategies">
                    <Nav variant="tabs">
                        <Nav.Item>
                            <Nav.Link eventKey="strategies" className='subtitle'>Estrategias de ahorro</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="tools" className='subtitle'>Herramientas de inversión</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="strategies">
                            <Strategies></Strategies>
                        </Tab.Pane>
                        <Tab.Pane eventKey="tools">
                            <InvestmentTools></InvestmentTools>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </div>
        </section>
    )
}