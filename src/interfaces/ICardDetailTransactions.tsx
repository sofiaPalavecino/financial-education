import { IExpense } from "./IRecentExpenses";

export interface ICardDetailTransactions {
    onClick: () => void;
    expenses: IExpense[];
    isGroup: boolean;
};