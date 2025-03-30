import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { ICourse } from "../../interfaces/ICourse"
import ModalInfo from "../ModalInfo/ModalInfo";
import './LearningItem.scss'

export default function LearningItem(course: ICourse){
    const [showModal, setShowModal] = useState(false);

    return (
        <><Card className="c-learning-item h-100">
            <Card.Header className="pb-3">
                <div className="flex justify-between items-center">
                    {/* <span className="text-xs text-muted-foreground">{course.duration}</span> */}
                </div>
                <Card.Title className="mt-2">{course.title}</Card.Title>
                <Card.Text className="text-muted">{course.description}</Card.Text>
            </Card.Header>
            <Card.Footer>
                <Button className="w-full buttonPrimary" disabled={!course.isDisabled} onClick={() => setShowModal(true)}>
                    {course.isDisabled ? "Comenzar lectura" : "Proximamente"}
                </Button>
            </Card.Footer>
        </Card><ModalInfo show={showModal} handleClose={() => setShowModal(false)} title={course.title} /></>
    )
}