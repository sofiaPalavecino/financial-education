export interface IExpense {
    id: number;
    user_id: number;
    group_id: number;
    amount: number;
    description: string;
    created_at: string;
    updated_at?: string | null;
    deleted_at?: string | null;
    category_id: number;
    date: string;
    title: string;
    type?: "expense" | "income";
    priority: "Low" | "Medium" | "High";
}