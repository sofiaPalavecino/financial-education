import { Card, ProgressBar } from "react-bootstrap";

type GoalProps = {
    id: number;
    title: string;
    target_amount: number;
    start_date: Date;
    group_id: number;
    category_id: number;
    progress: number;
};

export default function Goal({ title, target_amount, progress }: GoalProps) {
    
    const percentage = Math.min((progress / target_amount) * 100, 100);
    const percentageStand = Math.min((progress / target_amount) * 100, 100).toFixed(2);;
    
    return (
        <Card>
            <Card.Body>
                <div className="d-flex justify-content-between">
                    {/* <div className="d-flex align-items-center gap-2 mb-2">
                        { categories.map((category, index) => (
                            <Badge key={index} bg="secondary">{category}</Badge>
                        )) }
                    </div> */}
                    {/* <span className="mb-2 text-muted">{end_date.toString()}</span> */}
                    <span className="mb-2 text-muted">30/03/2025</span>
                </div>
                <Card.Title>{ title }</Card.Title>
                <Card.Text>
                    <div className="d-flex justify-content-between">
                        <p className="">${ progress }</p>
                        <p className="">${ target_amount }</p>
                    </div>
                    <ProgressBar variant="dark" now={percentage} />
                    <p className="text-muted">{percentageStand}% completado</p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}