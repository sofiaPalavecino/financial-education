import { Nav, Tab } from "react-bootstrap";
import RecentExpenses from '../ExpensesTable/ExpensesTable';
import MembersList from "../MembersList/MembersList";
import Achievements from "../Achievements/Achievements";
import { useEffect, useState } from "react";
import { IExpense } from "../../interfaces/IExpense";
import { IGroupData, IUserXGroup } from "../../interfaces/IGroups";
export interface ICardDetailTransactions {
    onClick: () => void;
    expenses: IExpense[];
    isGroup: boolean;
    currentGroupId?: number;
};

export default function CardDetailTrasactions({ onClick, expenses, isGroup, currentGroupId }: ICardDetailTransactions) {
    const [activeKey, setActiveKey] = useState<string>("transactions");
    const [members, setMembers] = useState<{ name: string; avatar: string }[]>([]);

    useEffect(() => {
        const storedGroups = localStorage.getItem("userGroups");
        if (storedGroups) {
            const parsedGroups = JSON.parse(storedGroups);

            const group = parsedGroups.find((g: IGroupData) => g.groups.id === currentGroupId);

            if (group) {
                const groupMembers = group.groups.usersXgroups.map((userXgroup: IUserXGroup) => ({
                    name: userXgroup.users.name,
                    avatar: <i className="bi bi-person"></i>
                }));

                setMembers(groupMembers);
            }
        }
    }, [currentGroupId]);

    const handleTabSelect = (key: string | null) => {
        if (key) {
            setActiveKey(key);
        }
    };

    return (
        <Tab.Container activeKey={activeKey} onSelect={handleTabSelect}>
                    <Nav variant="tabs" defaultActiveKey="transactions">
                        <Nav.Item>
                            <Nav.Link eventKey="transactions" className="subtitle">Movimientos</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="objetives" className="subtitle">Objetivos</Nav.Link>
                        </Nav.Item>
                        {isGroup && 
                        <Nav.Item>
                            <Nav.Link eventKey="members" className="subtitle">Miembros</Nav.Link>
                        </Nav.Item>}
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="transactions">
                            <RecentExpenses onClick={onClick} expenses={expenses} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="objetives" >
                            <Achievements></Achievements>
                        </Tab.Pane>
                        {isGroup &&
                            <Tab.Pane eventKey="members">
                                <MembersList members={members} />
                            </Tab.Pane>
                        }
                    </Tab.Content>
        </Tab.Container>
    )
}