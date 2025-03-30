import LearningLayout from "../LearningLayout/LearningLayout"
import mockInvestmentToolsCourses from "../__mocks__/mockInvestmentToolsCourses"

export default function InvestmentTools() {
    return (
        <div className="py-4">
            <h2 className="mb-4">Herramientas de inversión</h2>
            <p></p>
            <LearningLayout coursesList={mockInvestmentToolsCourses}></LearningLayout>
        </div>
    )
}