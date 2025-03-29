import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

interface AuthFormProps {
  isSignup: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ isSignup }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isValid, setIsValid] = useState(false);
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (touched[name]) validateField(name, value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    let newErrors = { ...errors };

    switch (name) {
      case "name":
        if (isSignup && !value) newErrors[name] = "El nombre es obligatorio";
        else delete newErrors[name];
        break;
      case "email":
        if (!value) newErrors[name] = "El email es obligatorio";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          newErrors[name] = "Ingrese un email válido";
        else delete newErrors[name];
        break;
      case "password":
        if (!value) newErrors[name] = "La contraseña es obligatoria";
        else if (value.length < 6) newErrors[name] = "Mínimo 6 caracteres";
        else delete newErrors[name];
        break;
      case "confirmPassword":
        if (isSignup) {
          if (!value) newErrors[name] = "Debe confirmar su contraseña";
          else if (value !== formData.password)
            newErrors[name] = "Las contraseñas no coinciden";
          else delete newErrors[name];
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      console.log("Datos enviados:", formData);
    }
  };

  // Validación adicional para los campos vacíos
  const isValidForm = Object.keys(errors).length === 0 && Object.values(formData).every((value) => value.trim() !== "");

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center title">{isSignup ? "Crear una cuenta" : "Bienvenido de nuevo"}</h2>
          <p className="text-center subtitle">
            {isSignup
              ? "Ingresa tus detalles para crear una cuenta"
              : "Ingresa tus credenciales para acceder a tu cuenta"}
          </p>
          <Form onSubmit={handleSubmit}>
            {isSignup && (
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="John Doe"
                  isInvalid={!!errors.name}
                  required
                />
                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
              </Form.Group>
            )}
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="name@example.com"
                isInvalid={!!errors.email}
                required
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.password}
                required
              />
              <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
            </Form.Group>
            {isSignup && (
              <Form.Group controlId="formConfirmPassword" className="mb-3">
                <Form.Label>Confirmar Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={!!errors.confirmPassword}
                  required
                />
                <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
              </Form.Group>
            )}
            <Button  type="submit" className="w-100 buttonPrimary" disabled={!isValidForm}>
              {isSignup ? "Crear cuenta" : "Iniciar sesión"}
            </Button>
          </Form>
          <p className="text-center mt-3">
            {isSignup ? (
              <>¿Ya tienes una cuenta? <a href="/login">Iniciar sesión</a></>
            ) : (
              <>¿No tienes una cuenta? <a href="/register">Regístrate</a></>
            )}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthForm;

