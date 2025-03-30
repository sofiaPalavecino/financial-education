import LearningItem from "../LearningItem/LearningItem"
import { ICourse } from "../../interfaces/ICourse"

type LearningLayoutProps = {
    coursesList: ICourse[];
};

export default function LearningLayout({ coursesList }: LearningLayoutProps) {
    return (
        <div className="row g-4">
            {coursesList.map((course, index) => (
                <div key={index} className="col-12 col-sm-6 col-lg-4 d-flex">
                    <LearningItem {...course} />
                </div>
            ))}
        </div>
    )
}