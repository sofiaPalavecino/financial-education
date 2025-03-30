import { Card, ListGroup, Button } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import ExpensesTableItem from "../ExpensesTableItem/ExpensesTableItem";
import './ExpensesTable.scss'
import { IRecentExpenses } from "../../interfaces/IRecentExpenses";
import { IExpense } from "../../interfaces/IExpense";
import { useEffect, useState } from "react";
import { ICategory } from "../../interfaces/ICategory";
import { getCategories } from "../../services/api";
import { fetchGroupExpensesAndIncomes } from "../../services/api";

export default function RecentExpenses({ onClick }: IRecentExpenses) {
  
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [expenses, setExpenses] = useState<IExpense[]>([])

  useEffect(() => {
    getCategories().then((data) => {
        if (data) setCategories(data);
    });
    getExpensesAndIncomes();
  }, []);

  const getExpensesAndIncomes = async () => {
      try {
          const response = await fetchGroupExpensesAndIncomes(2);
          setExpenses(response);
      } catch (error) {
          console.error("Error fetching expenses:", error);
      }
  };

  return (
    <>
      <div className="container d-flex justify-content-between">
        <div>
          <h4>Tablero de movimientos</h4>
          <p className="text-muted subtitle">Últimos movimientos</p>
        </div>
        <Button
          variant="primary"
          className="p-1"
          onClick={onClick}
          style={{ height: "2.6em", width: "2.6em" }}
        >
          <BsPlusLg size={24} />
        </Button>
      </div>
      <ListGroup variant="flush">
        {expenses.map((expense, index) => (
          <ExpensesTableItem categories={categories} key={index} {...expense} priority={expense.priority as "Low" | "Medium" | "High"} />
        ))}
      </ListGroup>
    </>
 
  );
}
