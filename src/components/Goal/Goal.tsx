import { Card, ProgressBar,  Button } from "react-bootstrap";

type GoalProps = {
    name: string;
    goal: number;
    progress: number;
};

export default function Goal({ name, goal, progress }: GoalProps) {
    
    const percentage = Math.min((progress / goal) * 100, 100);
    
    return (
        <Card>
            <Card.Body>
                <Card.Title>{ name }</Card.Title>
                <ProgressBar variant="dark" now={percentage} label={`${Math.round(percentage)}%`} />
            </Card.Body>
        </Card>
    )
}