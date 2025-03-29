import { IExpense } from "./IExpense";

export interface IRecentExpenses {
    onClick: () => void;
    expenses: IExpense[];
};