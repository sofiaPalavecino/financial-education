import { IExpense } from "./IExpense";

export interface IGroup {
    id: number;
    title: string;
    members: string[];
    expenses: IExpense[];
}
