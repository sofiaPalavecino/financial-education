import { IExpense } from "../../interfaces/IRecentExpenses";

const mockExpenses: IExpense[] = [
    {
        title: "Supermercado",
        date: "2023-03-15",
        amount: "25.99",
        category: "Comida",
        priority: "Medium",
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

export default mockExpenses;