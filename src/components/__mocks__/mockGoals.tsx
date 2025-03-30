import { IGoals } from "@/interfaces/IGoals"

const mockGoals: IGoals[] = [
    {
        id: 1,
        title: "Objetivo ejemplo",
        target_amount: 100,
        start_date: new Date("29/03/2025"),
        end_date: new Date("29/04/2025"),
        group_id: 1,
        category_id: 1
    }
];

export default mockGoals;
