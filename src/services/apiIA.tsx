import { supabase } from "../clients/SupabaseClients";
import { ai } from "../clients/IAClients";

export const getReport = async (groupId): Promise<any> => {
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

  const expensesWithType = expenses.map(expense => ({ ...expense, type: 'expense' }));
  const incomesWithType = incomes.map(income => ({ ...income, type: 'income' }));
  const datos = [...expensesWithType, ...incomesWithType].sort((a, b) => new Date(a.date) - new Date(b.date));
  const formattedData = datos.map(getData).join('\n');

  const prompt = `
  "Actúa como Nubi, un guía experto en finanzas personales que habla como un amigo profesional para nuestros usuarios (una aplicación para aprender a ahorrar). Tu tarea es analizar la información de la tabla 'groups', que contiene datos sobre gastos, ingresos, montos, categorias y fechas, a partir de esto dar tips o recomendaciones cortos sobre metodos y estrategias de ahorro personalizadas para el perfil del usuario.
  Devuelve exactamente un JSON con consejos financieros personalizados sin formato adicional e inserta algunos emogis para que sea visualmente más atractivo.

  Datos:

  ${formattedData.toString()}

  Responde en este formato:

  [ 
    { "title": "Saluda", "description": "Breve explicación de qué haces aquí hoy" },
    { "title": "Consejo 1", "description": "Descripción del consejo 1" },
    { "title": "Consejo 2", "description": "Descripción del consejo 2" },
    { "title": "Consejo 3", "description": "Descripción del consejo 3" }
  ]
  "`;

  const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: [prompt]
  });

  // Verificar si `response` tiene la estructura esperada
  if (!response?.candidates || response.candidates.length === 0) {
      console.error('La respuesta de la IA no tiene candidatos válidos:', response);
      return [];
  }

  const firstCandidate = response.candidates[0];

  if (!firstCandidate?.content?.parts || firstCandidate.content.parts.length === 0) {
      console.error('La respuesta de la IA no tiene contenido válido:', firstCandidate);
      return [];
  }

  const rawText = firstCandidate.content.parts[0]?.text;
  if (!rawText) {
      console.error('No se encontró texto en la respuesta de la IA:', firstCandidate.content.parts);
      return [];
  }

  try {
    const cleanJsonText = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
    return JSON.parse(cleanJsonText);
  } catch (error) {
      console.error('Error al procesar la respuesta de la IA:', error);
      return [];
  }
}

function getData(datos) {
  return JSON.stringify(datos)
}

export const getInfoModal = async (title): Promise<any> => {
  // Preparación del prompt
  const prompt = `
   * Presentate como Nubi, un guia en este camino de aprendizaje, actúa como un amigo que te ayudara a aprender sobre herramientas de ahorro e inversion que habla de una manera para que todo el publico lo entienda. Tu tarea es contar informacion sobre ${title}
   * Quiero que me des toda la info ordenada, debes aplicar codigo html y css para lograr una mejor visualizacion, asegurandote que no tenga fallos
   * Tienes que seguir el formato que dejo abajo
   * No tienes que explicar el codigo

   - Introduccion
     Texto
   - Conceptos basicos
     Texto
   - Ejemplos
     Texto
   - Como puedo empezar a aplicar esto
     Texto
   "`;

  // Interacción con OpenAI
  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash',
    contents: [prompt]
  });

  // Procesamiento de resultados
  return response.text;
}

