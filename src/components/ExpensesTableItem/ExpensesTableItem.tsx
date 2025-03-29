import { IExpense } from "../../interfaces/IExpense";
import { ListGroup, Badge } from "react-bootstrap";

const priorityColors: Record<IExpense["priority"], string> = {
  Low: "success",
  Medium: "warning",
  High: "danger",
};

export default function ExpensesTableItem({
  title,
  date,
  amount,
  type,
  // category_id,
  priority,
}: IExpense) {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <div>
        <strong>{title}</strong>
        <br />
        <small className="text-muted">{date}</small>
      </div>
      <div className="d-flex align-items-center gap-2">
        <Badge bg={priorityColors[priority]}>{priority}</Badge>
        <Badge bg="secondary">//TODO Agregar categoria cuando obtengamos el dato</Badge>
        <Badge bg={priorityColors[priority]}>{type}</Badge>
        <strong>${amount}</strong>
      </div>
    </ListGroup.Item>
  );
}