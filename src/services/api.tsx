import { IExpense } from "../interfaces/IExpense";
import { supabase } from "../clients/SupabaseClients";

export const fetchGroupExpensesAndIncomes = async (groupId: number): Promise<IExpense[]> => {
    try {
        const [{ data: expenses, error: expenseError }, { data: incomes, error: incomeError }] = await Promise.all([
            supabase.from("expenses").select("*").eq("group_id", groupId),
            supabase.from("incomes").select("*").eq("group_id", groupId),
        ]);

        if (expenseError || incomeError) {
            throw new Error(expenseError?.message || incomeError?.message);
        }

        const expensesWithType = expenses?.map((expense) => ({
            ...expense,
            type: "expense",
        })) || [];

        const incomesWithType = incomes?.map((income) => ({
            ...income,
            type: "income",
        })) || [];

        const combinedData = [...expensesWithType, ...incomesWithType].sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );

        return combinedData;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};

export const getCategories = async () => {
    try {
        const { data, error } = await supabase
            .from('categories')
            .select('id, name')

        if (error) {
            console.error('Error fetching categories:', error)
            return null
        }

        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};




