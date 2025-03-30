import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { addIncomes } from "../../services/api";

export default function NewIncomeForm () {

    const [validated, setValidated] = useState(false);

    const [formData, setFormData] = useState({
        user_id: 1,
        group_id: 2,
        amount: "",
        title: "",
        description: "",
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (event: React.FormEvent) => {
            const form = event.currentTarget;
            console.log(formData)
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                addIncomes(formData)
            }
            setValidated(true);
        };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="p-3">
            <Form.Group controlId="amount" className="mb-3">
                <Form.Label>Título</Form.Label>
                <Form.Control
                    required
                    type="text"
                    name="title"
                    placeholder="Título"
                    value={formData.title}
                    onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                    Por favor, ingresar un título
                </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group controlId="amount" className="mb-3">
                <Form.Label>Importe</Form.Label>
                <Form.Control
                    required
                    type="number"
                    name="amount"
                    placeholder="0.00"
                    value={formData.amount}
                    onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                    Por favor, ingresar un importe
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="description" className="mb-3">
                <Form.Label>Nota (Opcional)</Form.Label>
                <Form.Control
                as="textarea"
                name="description"
                placeholder="Nota"
                value={formData.description}
                onChange={handleChange}
                />
            </Form.Group>

            <Button type="submit" variant="dark" className="w-100 d-flex align-items-center justify-content-center gap-2 buttonPrimary">
                <BsPlus size={20} />
                Agregar ingreso
            </Button>
        </Form>
    )
}