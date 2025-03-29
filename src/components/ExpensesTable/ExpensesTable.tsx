import { Card, ListGroup, Button } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import ExpensesTableItem from "../ExpensesTableItem/ExpensesTableItem";
import './ExpensesTable.scss'
import { IRecentExpenses } from "../../interfaces/IRecentExpenses";
import { useEffect, useState } from "react";
import { ICategory } from "../../interfaces/ICategory";
import { getCategories } from "../../services/api";

export default function RecentExpenses({ onClick, expenses }: IRecentExpenses) {
  
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    getCategories().then((data) => {
        if (data) setCategories(data);
    });
  }, []);

  const expensesList = [
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
    {
        title: "Short",
        date: "2023-03-08",
        amount: "18.99",
        category: "Ropa",
        priority: "Medium",
    },
    {
        title: "Medias",
        date: "2023-03-08",
        amount: "18.99",
        category: "Ropa",
        priority: "Medium",
    },
  ];

  type RecentExpensesProps = {
      onClick: () => void;
  };

  return (
    <Card className="c-recent-expenses shadow-sm">
      <Card.Body>
        <div className="container d-flex justify-content-between">
            <div>
                <h4>Tablero de movimientos💸</h4>
                <p className="text-muted">Últimos movimientos</p>
            </div>
            <Button
                variant="primary"
                className="p-1"
                onClick={onClick}
                style={{height: "2.6em", width: "2.6em"}}
                >
                <BsPlusLg size={24} />
            </Button>
        </div>
        <ListGroup variant="flush">
          {expenses.map((expense, index) => (
            <ExpensesTableItem categories={categories} key={index} {...expense} priority={expense.priority as "Low" | "Medium" | "High"} />
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
