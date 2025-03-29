export interface IExpense {
    title: string;
    date: string;
    amount: string;
    category: string;
    priority: "Low" | "Medium" | "High";
};

export interface IRecentExpenses {
    onClick: () => void;
    expenses: IExpense[];
};