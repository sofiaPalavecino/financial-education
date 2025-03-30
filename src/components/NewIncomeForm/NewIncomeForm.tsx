import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { BsPlus } from "react-icons/bs";

export default function NewIncomeForm () {

    const [formData, setFormData] = useState({
        amount: "",
        origin: "",
        priority: "Medium",
        description: "",
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Income Submitted:", formData);
      };

    return (
        <Form onSubmit={handleSubmit} className="p-3">
            <Form.Group controlId="amount" className="mb-3">
                <Form.Label>Importe</Form.Label>
                <Form.Control
                type="number"
                name="amount"
                placeholder="0.00"
                value={formData.amount}
                onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="origin" className="mb-3">
                <Form.Label>Origen</Form.Label>
                <Form.Select name="origin" value={formData.origin} onChange={handleChange}>
                    <option value="" selected disabled>Seleccionar origen</option>
                    <option value="montly-money">Dinero mensual</option>
                    <option value="salary">Salario</option>
                    <option value="extra">Dinero Extra</option>
                    <option value="plus">Plus</option>
                    <option value="other">Otro</option>
                </Form.Select>
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