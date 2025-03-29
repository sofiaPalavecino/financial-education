import { IExpense } from "./IRecentExpenses";

export interface IGroup {
    title: string;
    members: string;
    expenses: IExpense[];
}
