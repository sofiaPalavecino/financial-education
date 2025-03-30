import { Button } from "react-bootstrap";
import './Card-group.scss';
import { useNavigate } from "react-router-dom";
export default function CardGroup({ groups, onAddGroup }: any) {
    const navigate = useNavigate();
    return (
        <div className="row mt-4 c-card-group">
            <div className="col-md-4 mb-4">
                <div className="card text-center addGroup" >
                    <div className="card-body card-body-center">
                        <Button onClick={onAddGroup} className="btn btn-primary rounded-circle">
                            <i className="bi bi-plus"></i>
                        </Button>
                        <h5 className="card-title mt-2">Crea un nuevo grupo</h5>
                        <p className="text-muted">Agregá personas para compartir gastos</p>
                    </div>
                </div>
            </div>
            {groups.map((group: any, index: any) => (
                <div key={index} className="col-md-4 mb-4">
                    <div className="card text-center">
                        <div className="card-body card-body-center">
                            <h5 className="card-title">{group.title}</h5>
                            <p className="text-muted">{group.members}</p>
                            <Button onClick={() => navigate(`/home?group=${encodeURIComponent(group.title)}`)} variant="outline-primary" className="buttonDetailGroup">
                                Ver detalles <i className="bi bi-arrow-right-short"></i>
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}