import Goal from "../Goal/Goal"

export default function Achievements() {
    return (
        <div className="container">
            <h2>Logros 🎯</h2>
            <p className="text-muted">Hacé un seguiminto de tus objetivos</p>
            <Goal name={"Viaje"} goal={350} progress={75.8}></Goal>
        </div>
    )
}