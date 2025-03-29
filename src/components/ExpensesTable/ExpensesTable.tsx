import { Card, ListGroup } from "react-bootstrap";
import ExpensesTableItem from "../ExpensesTableItem/ExpensesTableItem";

const expenses = [
    {
        title: "Supermercado",
        date: "2023-03-15",
        amount: "25.99",
        category: "Comida",
        priority: "Medium", // ✅ Now TypeScript recognizes this as valid
    },
    {
        title: "Carga de sube",
        date: "2023-03-14",
        amount: "12.50",
        category: "Transporte",
        priority: "Low",
    },
    {
        title: "Salida al cine",
        date: "2023-03-12",
        amount: "45.00",
        category: "Cultura",
        priority: "Low",
    },
    {
        title: "Cena en restaurante",
        date: "2023-03-10",
        amount: "32.75",
        category: "Comida",
        priority: "High",
    },
    {
        title: "Remera",
        date: "2023-03-08",
        amount: "18.99",
        category: "Ropa",
        priority: "Medium",
    },
];

export default function RecentExpenses() {
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <h4>Tablero de movimientos</h4>
        <p className="text-muted">Tus últimos movimientos</p>
        <ListGroup variant="flush">
          {expenses.map((expense, index) => (
            <ExpensesTableItem key={index} {...expense} priority={expense.priority as "Low" | "Medium" | "High"} />
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
