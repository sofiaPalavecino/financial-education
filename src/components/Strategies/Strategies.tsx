import LearningLayout from "../LearningLayout/LearningLayout"
import mockStrategiesCourses from "../__mocks__/mockStrategiesCourses"

export default function Strategies() {
    return (
        <div className="py-4">
            <h2>Estrategias de ahorro🌱</h2>
            <p>Aprendé sobre las distintas maneras de ahorrar y encontrá la que más se ajusta a tu manera de usar tu plata</p>
            <LearningLayout coursesList={mockStrategiesCourses}></LearningLayout>
        </div>
    )
}