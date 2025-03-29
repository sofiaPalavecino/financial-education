import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { BsPlus } from "react-icons/bs";

export default function NewExpenseForm () {

    const [formData, setFormData] = useState({
        amount: "",
        category: "",
        priority: "Medium",
        description: "",
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Expense Submitted:", formData);
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

            <Form.Group controlId="category" className="mb-3">
                <Form.Label>Categoria</Form.Label>
                <Form.Select name="category" value={formData.category} onChange={handleChange}>
                <option value="" selected disabled>Seleccionar categoria</option>
                <option value="food">Comida</option>
                <option value="transport">Transporte</option>
                <option value="entertainment">Cultura</option>
                </Form.Select>
            </Form.Group>

            <Form.Group controlId="priority" className="mb-3">
                <Form.Label>Prioridad</Form.Label>
                <Form.Select name="priority" value={formData.priority} onChange={handleChange}>
                <option value="Low">Baja</option>
                <option value="Medium">Media</option>
                <option value="High">Alta</option>
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

            <Button type="submit" variant="dark" className="w-100 d-flex align-items-center justify-content-center gap-2">
                <BsPlus size={20} />
                Agregar gasto
            </Button>
        </Form>
    )
}