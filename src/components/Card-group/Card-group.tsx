import { Button } from "react-bootstrap";
import './Card-group.scss';
export default function CardGroup({ groups, onAddGroup }: any) {

    return (
        <div className="row mt-4 c-card-group">
            <div className="col-md-4 mb-4">
                <div className="card text-center" style={{ height: "14rem" }}>
                    <div className="card-body card-body-center">
                        <Button onClick={onAddGroup} className="btn btn-primary rounded-circle">
                            <i className="bi bi-plus"></i>
                        </Button>
                        <h5 className="card-title mt-2">Crear nuevo grupo</h5>
                        <p className="card-text">Agregar personas para compartir gastos</p>
                    </div>
                </div>
            </div>
            {groups.map((group: any, index: any) => (
                <div key={index} className="col-md-4 mb-4">
                    <div className="card text-center">
                        <div className="card-body card-body-center">
                            <h5 className="card-title">{group.title}</h5>
                            <p className="card-text">{group.members}</p>
                            <a href="#" className="btn btn-outline-primary">
                                Ver detalles <i className="bi bi-arrow-right-short"></i>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}