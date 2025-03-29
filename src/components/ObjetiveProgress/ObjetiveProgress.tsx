import { ProgressBar } from "react-bootstrap";

export default function ObjectivesProgress({ progress }: { progress: number }) {
    return (
        <div className="mt-3">
            <p>Progreso del objetivo</p>
            <ProgressBar now={progress} label={`${progress}%`} />
        </div>
    );
}