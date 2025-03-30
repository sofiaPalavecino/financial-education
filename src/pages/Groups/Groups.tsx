import { fetchUserGroups } from "../../services/api";
import CardGroup from "../../components/CardGroup/CardGroup";
import ModalCreateGroup from "../../components/ModalCreateGroup/ModalCreateGroup";
import './Groups.scss'
import { useEffect, useState } from "react";
export default function Groups () {
    const [show, setShow] = useState(false);
    const [groups, setGroups] = useState<any[]>([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        
        if (userId) {
            const fetchGroups = async () => {
                const userGroups = await fetchUserGroups(Number(userId));
                
                if (userGroups) {
                    setGroups(userGroups);
                    localStorage.setItem("userGroups", JSON.stringify(userGroups));
                }
            };

            fetchGroups();
        }
    }, []);

    return (
        <section className="c-group">
            <div className="wrap">
                <div className="d-flex align-items-center gap-2">
                    <h1 className="title">Grupos</h1>
                    <i className="bi bi-people-fill fs-1"></i>
                </div>
                <div className="subtitle">Comparta los gastos y realice un seguimiento de los gastos del grupo</div>
                <CardGroup groups={groups} onAddGroup={handleShow}/>
                <ModalCreateGroup show={show} handleClose={handleClose}/>
            </div>
        </section>
    )
}