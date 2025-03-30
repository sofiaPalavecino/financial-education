import { ICategory } from "../../interfaces/ICategory";
import { IExpense } from "../../interfaces/IExpense";
import { ListGroup, Badge } from "react-bootstrap";
import './ExpensesTableItem.scss'

interface Props extends IExpense {
  categories: ICategory[];
}

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
  category_id,
  priority,
  categories,
}: Props) {
  const categoryName = categories.find(cat => cat.id === category_id)?.name;
  const isExpense = type === "expense"; 
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <div>
        <strong>{title}</strong>
        <br />
        <small className="text-muted">{date}</small>
      </div>
      <div className="d-flex align-items-center gap-2">
        <Badge bg={priorityColors[priority]}>{priority}</Badge>
        {isExpense && <Badge bg="secondary">{categoryName }</Badge>}
        <Badge bg={priorityColors[priority]}>{type}</Badge>
        <strong>${amount}</strong>
      </div>
    </ListGroup.Item>
  );
}
