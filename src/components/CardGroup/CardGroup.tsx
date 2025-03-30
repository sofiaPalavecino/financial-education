import { Button } from "react-bootstrap";
import './CardGroup.scss';
import { useNavigate } from "react-router-dom";
import { IGroupData } from "../../interfaces/IGroups";

interface CardGroupProps {
    groups: IGroupData[];
    onAddGroup: () => void;
}
export default function CardGroup({ groups, onAddGroup }: CardGroupProps) {
    console.log(groups);

    const navigate = useNavigate();
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

            {groups.map(({ groups: group }) => (
                group ? (
                    <div key={group.id} className="col-md-4 mb-4">
                        <div className="card text-center">
                            <div className="card-body card-body-center">
                                <h5 className="card-title">{group.name}</h5>
                                <p className="card-text">
                                    {group.usersXgroups.length} miembro(s)
                                </p>
                                <Button
                                    onClick={() => navigate(`/home?group=${encodeURIComponent(group.id)}`)}
                                    variant="outline-primary"
                                >
                                    Ver detalles <i className="bi bi-arrow-right-short"></i>
                                </Button>
                            </div>
                        </div>
                    </div>
                ) : null
            ))}
        </div>
    );
}