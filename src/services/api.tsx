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

export const fetchUserGroups = async (userId: number): Promise<any> => {
    try {
        const { data, error } = await supabase
            .from('usersXgroups')
            .select('groups(*)')
            .eq('user_id', userId)
            .eq('is_personal_space', false)

        if (error) {
            console.error('Error fetching groups:', error)
            return null
        }

        return data;
export async function login(email: string, password: string) {
    try {
        const { data } = await supabase
        .from('users')
        .select('*')
        .eq('email', email)
        .eq('password', password)

        if (!data || data.length === 0) {
            return null; // No se encontró usuario con esas credenciales
        }

        return data[0]; // Retornamos el usuario encontrado
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
<<<<<<< HEAD
};

export const fetchUserGroupPersonal = async (userId: number): Promise<any> => {
    try {
        const { data, error } = await supabase
            .from('usersXgroups')
            .select('groups(*)')
            .eq('user_id', userId)
            .eq('is_personal_space', true)

        if (error) {
            console.error('Error fetching group personal:', error)
            return null
        }

        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};

export const addExpense = async (expense): Promise<any> => {
    try {
        const { data, error } = await supabase
        .from('expenses')
        .insert([
            { user_id: expense.user_id, group_id: expense.group_id, amount: expense.amount,
              description: expense.description, category_id: expense.category_id,
              title: expense.title, priority: expense.priority
            }
        ])

        if (error) {
            console.error('Error fetching group personal:', error)
            return null
        }

        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};

export const addIncomes = async (income): Promise<any> => {
    try {
        const { data, error } = await supabase
        .from('incomes')
        .insert([
            { user_id: income.user_id, group_id: income.group_id, amount: income.amount,
              description: income.description, title: income.title
            }
        ])

        if (error) {
            console.error('Error fetching group personal:', error)
            return null
        }

        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};
=======
}
>>>>>>> acf2562 (Add function login in Api.tsx, auth login user)




