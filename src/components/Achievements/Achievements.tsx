import { useState } from "react";
import { Card, ProgressBar, Button, Form } from "react-bootstrap";
import { BsPlusLg, BsPlus } from "react-icons/bs";
import Modal from 'react-bootstrap/Modal'
import Goal from "../Goal/Goal"
import GoalsOverallProgressCard from "../GoalsOverallProgressCard/GoalsOverallProgressCard";
import './Achievements.scss'

type Goal = {
    name: string;
    goal: number;
    progress: number;
    date: string;
    categories: string[];
};

type GoalsStats = {
    completedGoals: number,
    completionPercentage: number,
    totalGoals: number
}

const goals = [
    {
        name: "Viaje",
        goal: 350,
        progress: 75.8,
        date: "29/03/2025",
        categories: [
            "Casa",
            "Muebles"
        ]
    },
    {
        name: "Sillón",
        goal: 200,
        progress: 75.8,
        date: "15/03/2025",
        categories: ["Casa"]
    },
    {
        name: "Sillón",
        goal: 200,
        progress: 200,
        date: "15/02/2025",
        categories: ["Casa"]
    }
]

function analyzeGoals(goals: Goal[]) {
    const totalGoals = goals.length;
    const completedGoals = goals.filter(goal => goal.progress >= goal.goal).length;
    const completionPercentage = totalGoals > 0 ? (completedGoals / totalGoals) * 100 : 0;

    return {
        completedGoals,
        completionPercentage: Math.round(completionPercentage),
        totalGoals
    };
}

const goalsStats: GoalsStats = analyzeGoals(goals)

console.log(goalsStats)

export default function Achievements() {

    const [show, setShow] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        goal: 0,
        date: "",
        category: ""
      });
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Expense Submitted");
    };

    return (
        <div className="c-achievements container mt-3">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Nuevo Movimiento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit} className="p-3">
                        <Form.Group controlId="name" className="mb-3">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                            type="textarea"
                            name="name"
                            placeholder="Ingresa un nombre"
                            value={formData.name}
                            onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="goal" className="mb-3">
                            <Form.Label>Objetivo</Form.Label>
                            <Form.Control
                            type="number"
                            name="goal"
                            placeholder="0.00"
                            value={formData.goal}
                            onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="category" className="mb-3">
                            <Form.Label>Categoria</Form.Label>
                            <Form.Select name="category" value={formData.category} onChange={handleChange}>
                                <option value="" selected disabled>Seleccionar categoria</option>
                                <option value="food">Comida</option>
                                <option value="transport">Transporte</option>
                                <option value="entertainment">Cultura</option>
                            </Form.Select>
                        </Form.Group>

                        <Button type="submit" variant="dark" className="w-100 d-flex align-items-center justify-content-center gap-2">
                            <BsPlus size={20} />
                            Agregar gasto
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
            <h2>Objetivos </h2>
            <p className="text-muted subtitle">Hacé un seguiminto de tus objetivos</p>
            <div className="row my-4">
                <div className="col">
                    <GoalsOverallProgressCard {...goalsStats} />
                </div>
                <div className="col">
                    <Card>
                        <Card.Body className="d-flex flex-column align-items-center">
                            <Button 
                                variant="secondary"
                                className="d-flex align-items-center rounded-circle shadow mb-4 buttonPrimary"
                                style={{ width: "45px", height: "45px" }}
                                onClick={handleShow}
                            ><BsPlusLg size={30} />
                            </Button>
                            <h5 className="card-title mt-2">Creá un nuevo objetivo</h5>
                            <p className="text-muted">Creá un nuevo objetivo financiero para darle seguimiento</p>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="goals-container">
                { goals.map((goal, index) => (
                    <Goal key={index} {...goal}></Goal>
                ))}
            </div>
        </div>
    )
}