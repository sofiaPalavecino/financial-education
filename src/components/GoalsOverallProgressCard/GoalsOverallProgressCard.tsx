import { Card, ProgressBar } from "react-bootstrap";

type GoalsStats = {
    completedGoals: number,
    completionPercentage: number,
    totalGoals: number
}

export default function GoalsOverallProgressCard( { completedGoals,
    completionPercentage,
    totalGoals }: GoalsStats ) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Progreso General</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Tu camino hacia el éxito financiero</Card.Subtitle>
                <Card.Text>
                    <div className="d-flex justify-content-between">
                        <p className="">Objetivos completados</p>
                        <p className="">{completedGoals} / {totalGoals}</p>
                    </div>
                    <ProgressBar className="mb-2" variant="dark" now={completionPercentage} />
                    <p className="text-muted">{completionPercentage}% de objetivos completados</p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}