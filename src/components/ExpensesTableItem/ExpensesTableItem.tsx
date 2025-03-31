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
    description
  }: Props) {
  const categoryName = categories.find(cat => cat.id === category_id)?.name;
  const isExpense = type === "expense"; 
  return (
    <div>
      <ListGroup.Item className="c-expenses-table-item --mobile">
        <div className="c-expenses-table-item__title">
          <strong>{title}</strong>
          <span className="text-muted">{date}</span>
        </div>
        <div className="c-expenses-table-item__content gap-2">
          <div className="c-expenses-table-item__content-badges">
            <Badge bg={priorityColors[priority]}>{priority}</Badge>
            {isExpense && <Badge bg="secondary">{categoryName }</Badge>}
            <Badge bg={priorityColors[priority]}>{type}</Badge>
          </div>
          {
              description !== "" 
              ? 
              <div className="c-expenses-table-item__content-amount">
                <span className="text-muted">{description}</span>
                <span>${amount}</span>
              </div>
              :
              <div className="c-expenses-table-item__content-amount">
                <span>${amount}</span>
              </div>
            }
          
        </div>
      </ListGroup.Item>
      <ListGroup.Item className="c-expenses-table-item --desktop">
        <div className="c-expenses-table-item__title">
          <strong>{title}</strong>
          <span className="text-muted">{date}</span>
        </div>
        <div className="c-expenses-table-item__content gap-2">
          <div className="c-expenses-table-item__content-badges">
            <Badge bg={priorityColors[priority]}>{priority}</Badge>
            {isExpense && <Badge bg="secondary">{categoryName }</Badge>}
            <Badge bg={priorityColors[priority]}>{type}</Badge>
          </div>
          {
              description !== "" 
              ? 
              <div className="c-expenses-table-item__content-amount">
                <span className="text-muted">{description}</span>
                <span>${amount}</span>
              </div>
              :
              <div className="c-expenses-table-item__content-amount">
                <span>${amount}</span>
              </div>
            }
          
        </div>
      </ListGroup.Item>
    </div>
  );
}
