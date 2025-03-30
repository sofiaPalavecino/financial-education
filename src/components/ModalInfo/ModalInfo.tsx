import { useEffect, useState } from "react";
import { Modal, Button, Spinner } from "react-bootstrap";
import { getInfoModal } from '../../services/apiIA';

interface ModalInfoProps {
    show: boolean;
    handleClose: () => void;
    title: string;
}

export default function ModalInfo({ show, handleClose, title, }: ModalInfoProps) {
    const [data, setData] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (show) {
            setLoading(true)
            getInfoModal(title)
              .then((response) => setData(response || "No hay informacion disponible"))
              .catch((error) => {
                console.error("Error obteniendo datos: ", error);
                setData("Error al obtener la informacion");
              })
              .finally(() => setLoading(false));
        }
    }, [show, title]);
    return (
        <Modal show={show} onHide={handleClose} centered dialogClassName={'modal-xl'}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {loading ? (<Spinner animation="border" />) : (<div dangerouslySetInnerHTML={{ __html: data || ""}} />)}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}