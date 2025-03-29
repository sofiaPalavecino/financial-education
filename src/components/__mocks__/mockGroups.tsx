import { IGroup } from "../../interfaces/IGroups";

const mockGroups: IGroup[] = [
    { 
        title: "Casa", 
        members: "Miembros...", 
        expenses: [
            {
                title: "Supermercado",
                date: "2023-03-15",
                amount: "-25.99",
                category: "Comida",
                priority: "Low",
            },
            {
                title: "Alquiler",
                date: "2023-03-14",
                amount: "12.50",
                category: "",
                priority: "Medium",
            },
            {
                title: "Expensas",
                date: "2023-03-12",
                amount: "45.00",
                category: "Cultura",
                priority: "Low",
            }
        ] 
    },
    { 
        title: "Viaje a París", 
        members: "Miembros...", 
        expenses: [
            {
                title: "Boleto de avión",
                date: "2023-03-15",
                amount: "25.99",
                category: "Otros",
                priority: "Medium",
            }
        ] 
    }
];

export default mockGroups;
