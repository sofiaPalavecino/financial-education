import { supabase } from "../clients/SupabaseClients"

export const GetGroupsExpensesAndIncomes = async (groupId: number): Promise<any> => {
    try { 
        const { data: expenses, error: expensesError} = await supabase
        .from('expenses')
        .select('*')
        .eq('group_id', groupId);

        const { data: incomes, error: incomesError} = await supabase
        .from('incomes')
        .select('*')
        .eq('group_id', groupId)

        const expensesWithType = expenses?.map((expense: any) => ({ ...expense, type: 'expense'})) || [];
        const incomesWithType = incomes?.map((income: any) => ({ ...incomes, type: 'income'})) || [];

        const combinedData = [...expensesWithType, ...incomesWithType].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

        console.log('Combined Data:', combinedData);

        // return combinedData;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}