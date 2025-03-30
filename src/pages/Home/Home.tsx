import { useState, useEffect } from "react";
import MoneyFlowCard from "../../components/MoneyFlowCard/MoneyFlowCard";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import Modal from 'react-bootstrap/Modal';
import { useLocation, useNavigate } from "react-router-dom";
import CardDetailTrasactions from "../../components/CardDetailTransactions/CardDetailTransactions";
import { fetchGroupExpensesAndIncomes, fetchUserGroupPersonal } from "../../services/api";
import { IExpense } from "../../interfaces/IExpense";
import { getCategories } from '../../services/api';
import { IGroupData } from "../../interfaces/IGroups";
import { ExpenseTips } from "../../components/TipsIA.tsx/TipsIA";
// import { ReportAndChart } from "../../components/ReportAndChart/ReportAndChart";

export default function Home () {
    const [show, setShow] = useState(false);
    const [expenses, setExpenses] = useState<IExpense[]>([]);
    const [groupTitle, setGroupTitle] = useState<string | null>(null);
    const [, setLoading] = useState(false);
    const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);
    const [currentGroupId, setCurrentGroupId] = useState<number>();

    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const groupIdFromURL = searchParams.get("group");
    const userId = localStorage.getItem("userId");
    const isGroup = Boolean(groupIdFromURL);

    useEffect(() => {
        if (!userId) {
            navigate("/");
        }
    }, [userId, navigate]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await getCategories();
            setCategories(response || []);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    useEffect(() => {
        const storedGroups = localStorage.getItem("userGroups");
        
        if (storedGroups && !!isGroup && expenses.length > 0) {
            const parsedGroups = JSON.parse(storedGroups);
            const group = parsedGroups.find((g: IGroupData) => g.groups.id === currentGroupId);
            setGroupTitle(group.groups.name);
        }
    }, [currentGroupId, expenses]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            let groupId = groupIdFromURL ? Number(groupIdFromURL) : null;
            if (groupId) {
                localStorage.setItem("groupIdSpacePersonal", String(groupIdFromURL));
            }

            if (!groupId) {
                const personalGroup = await fetchUserGroupPersonal(Number(userId));
                
                
                if (personalGroup && personalGroup.length > 0) {
                    groupId = personalGroup[0].groups.id;
                    
                    localStorage.setItem("groupIdSpacePersonal", String(groupId));
                }
            }

            if (groupId) {
                setCurrentGroupId(groupId);
                const transactions = await fetchGroupExpensesAndIncomes(groupId);
                setExpenses(transactions);
            } else {
                setExpenses([]);
            }

            setLoading(false);
        };

        fetchData();
    }, [groupIdFromURL, userId]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <main>
            <section>
                <div className="wrap">
                    {isGroup && (
                        <div>
                            <h1 className="mb-1">{groupTitle}</h1>
                            <div className="mb-4 subtitle">Detalles del grupo y transacciones</div>
                        </div>
                    )}
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title className="title">Nuevo Movimiento</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <MoneyFlowCard categories={categories}></MoneyFlowCard>
                        </Modal.Body>
                    </Modal>
                    <CardDetailTrasactions onClick={handleShow} expenses={expenses} isGroup={isGroup} currentGroupId={currentGroupId} />
                    <FloatingButton onClick={handleShow} />
                    <ExpenseTips groupId={currentGroupId} />
                </div>
            </section>
        </main>
    );
}