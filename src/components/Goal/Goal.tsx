import { Card, ProgressBar,  Button, Badge } from "react-bootstrap";

type GoalProps = {
    name: string;
    goal: number;
    progress: number;
    date: string;
    categories: string[];
};

export default function Goal({ name, goal, progress, date, categories }: GoalProps) {
    
    const percentage = Math.min((progress / goal) * 100, 100);
    const percentageStand = Math.min((progress / goal) * 100, 100).toFixed(2);;
    
    return (
        <Card>
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center gap-2 mb-2">
                        { categories.map((category, index) => (
                            <Badge key={index} bg="secondary">{category}</Badge>
                        )) }
                    </div>
                    <span className="mb-2 text-muted">{date}</span>
                </div>
                <Card.Title>{ name }</Card.Title>
                <Card.Text>
                    <div className="d-flex justify-content-between">
                        <p className="">${ progress }</p>
                        <p className="">${ goal }</p>
                    </div>
                    <ProgressBar variant="dark" now={percentage} />
                    <p className="text-muted">{percentageStand}% completado</p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}