import { ListGroup, Badge } from "react-bootstrap";

interface ExpenseItemProps {
  title: string;
  date: string;
  amount: string;
  category: string;
  priority: "Low" | "Medium" | "High";
}

const priorityColors: Record<ExpenseItemProps["priority"], string> = {
  Low: "success",
  Medium: "warning",
  High: "danger",
};

export default function ExpensesTableItem({
  title,
  date,
  amount,
  category,
  priority,
}: ExpenseItemProps) {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <div>
        <strong>{title}</strong>
        <br />
        <small className="text-muted">{date}</small>
      </div>
      <div className="d-flex align-items-center gap-2">
        <Badge bg={priorityColors[priority]}>{priority}</Badge>
        <Badge bg="secondary">{category}</Badge>
        <strong>${amount}</strong>
      </div>
    </ListGroup.Item>
  );
}