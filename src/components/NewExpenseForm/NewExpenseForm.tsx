import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { addExpense } from "../../services/api";
import { IExpense } from "../../interfaces/IExpense";

type NewExpenseFormProps = {
    categories: { id: string, name: string }[];
};

export default function NewExpenseForm ( { categories }: NewExpenseFormProps ) {

    const userId = localStorage.getItem("userId");
    const groupId = localStorage.getItem("groupIdSpacePersonal")

    const [formData, setFormData] = useState<IExpense>({
        id: 0,
        user_id: Number(userId),
        group_id: Number(groupId),
        title: "",
        amount: 0,
        category_id: 1,
        priority: "Medium",
        description: "",
        date: "",
        created_at: "",
        updated_at: "",
        deleted_at: "",
        type: "expense"
      });

      const [validated, setValidated] = useState(false);
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (event: React.FormEvent) => {
        const form = event.currentTarget as HTMLFormElement;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            await addExpense(formData)
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

            <Form.Group controlId="category" className="mb-3">
                <Form.Label>Categoria</Form.Label>
                <Form.Select name="category_id" value={formData.category_id} onChange={handleChange} required>
                    <option value="" selected disabled>Seleccionar categoria</option>
                    {
                        categories.map((category, index) => (
                            <option key={index} value={categories[index].id}>{category.name}</option>
                        ))
                    }
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                    Por favor, ingresar una categoría
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="priority" className="mb-3">
                <Form.Label>Prioridad</Form.Label>
                <Form.Select name="priority" value={formData.priority} onChange={handleChange} required>
                    <option value="Low">Baja</option>
                    <option value="Medium">Media</option>
                    <option value="High">Alta</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                    Por favor, ingresar la prioridad
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
                Agregar gasto
            </Button>
        </Form>
    )
}