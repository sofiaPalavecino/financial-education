import { supabase } from "../clients/SupabaseClients";
import { ai } from "../clients/IAClients";

export const getReport = async (groupId): Promise<any> => {
    // Extracción de datos (ejemplo)
    const { data: expenses, error: expenseError } = await supabase
        .from('expenses')
        .select('*')
        .eq('group_id', groupId);

    const { data: incomes, error: incomeError } = await supabase
        .from('incomes')
        .select('*')
        .eq('group_id', groupId);

    if (expenseError || incomeError) {
        console.error('Error al obtener transacciones:', expenseError || incomeError);
        return [];
    }

    // Agregamos un campo "type" para diferenciar gastos e ingresos
    const expensesWithType = expenses.map(expense => ({ ...expense, type: 'expense' }));
    const incomesWithType = incomes.map(income => ({ ...income, type: 'income' }));

    // Combinamos ambos arrays y ordenamos por fecha
    const datos = [...expensesWithType, ...incomesWithType].sort((a, b) => new Date(a.date) - new Date(b.date));
    const formattedData = datos.map(getData).join('\n')

    // Preparación del prompt
    const prompt = `
    "Actúa como un analista de gastos experto pero que habla para todo el publico. Tu tarea es analizar la información de la tabla 'groups', que contiene datos sobre gastos, ingresos, montos, categorias y fechas, a partir de esto dar recomendaciones sobre metodos y estrategias de ahorro personalizadas para tu perfil.

    Datos de la tabla 'groups':

    ${formattedData.toString()}

   Formato de respuesta deseado:

   Consejos y recomendaciones:

   * [Proponer 3 estrategias para ahorrar y reducir los gastos]
   "`;

    // Interacción con OpenAI
    const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: [prompt]
    });

    // Procesamiento de resultados
    return response;
}

function getData(datos) {
    return JSON.stringify(datos)
}

