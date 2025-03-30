import { Card, Button } from "react-bootstrap";
import { ICourse } from "../../interfaces/ICourse"

export default function LearningItem(course: ICourse){
    return (
        <Card className="h-100">
            <Card.Header className="pb-3">
                <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">{course.duration}</span>
                </div>
                <Card.Title className="mt-2">{course.title}</Card.Title>
                <Card.Text className="text-muted">{course.description}</Card.Text>
            </Card.Header>
            <Card.Footer>
                <Button className="w-full buttonPrimary">
                    Comenzar lectura
                </Button>
            </Card.Footer>
        </Card>
    )
}