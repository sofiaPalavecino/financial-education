import mockGroups from "../../components/__mocks__/mockGroups";
import CardGroup from "../../components/Card-group/Card-group";
import ModalCreateGroup from "../../components/ModalCreateGroup/ModalCreateGroup";
import { useState } from "react";
export default function Groups () {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <section className="c-group">
            <div className="wrap">
                <div className="d-flex align-items-center gap-2">
                    <h1>Grupos</h1>
                    <i className="bi bi-people-fill fs-1"></i>
                </div>
                <div>Comparta los gastos y realice un seguimiento de los gastos del grupo</div>
                <CardGroup groups={mockGroups} onAddGroup={handleShow}/>
                <ModalCreateGroup show={show} handleClose={handleClose}/>
            </div>
        </section>
    )
}