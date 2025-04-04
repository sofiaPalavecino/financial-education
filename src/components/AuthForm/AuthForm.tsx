import { login } from "../../services/api";
import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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
  /* const [isValid, setIsValid] = useState(false);
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({}); */
  const navigate = useNavigate();

  useEffect(() => {
    if (formData.email && formData.password) {
      handleLogin();
    }
  }, [formData]);

  const handleLogin = async () => {
    try {
      const user = await login(formData.email, formData.password);
  
      if (!user) {
        setErrors({ ...errors, general: "Credenciales incorrectas" });
        return;
      }
  
      localStorage.setItem("userId", user.id);
      navigate("/home");
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      setErrors({ ...errors, general: "Ocurrió un error. Inténtelo más tarde." });
    }
  };

  /* const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (touched[name]) validateField(name, value);
  }; */

  /* const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    validateField(name, value);
  }; */

  /* const validateField = (name: string, value: string) => {
    const newErrors = { ...errors };

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
  }; */

  // Validar todos los campos cuando formData cambie
  /* useEffect(() => {
    const newErrors: { [key: string]: string } = {};

    if (isSignup && !formData.name) newErrors.name = "El nombre es obligatorio";
    if (!formData.email) newErrors.email = "El email es obligatorio";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Ingrese un email válido";
    if (!formData.password) newErrors.password = "La contraseña es obligatoria";
    else if (formData.password.length < 6) newErrors.password = "Mínimo 6 caracteres";
    if (isSignup && formData.confirmPassword !== formData.password)
      newErrors.confirmPassword = "Las contraseñas no coinciden";

    setErrors(newErrors);

    // Si no hay errores, el formulario es válido
    setIsValid(Object.keys(newErrors).length === 0);
  }, [formData, isSignup]); */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // if (!isValid) return;

    const demoUser = {
      ...formData, 
      email: "juan@gmail.com",
      password: "123456"
    }

    await setFormData(prev => ({ ...prev, email: demoUser.email, password: demoUser.password }));

    console.log(formData)

    /* try {
      console.log(formData)
      const user = await login(formData.email, formData.password);

      console.log("Usuario:", user.id);

      if (!user) {
        setErrors({ ...errors, general: "Credenciales incorrectas" });
        return;
      }

      localStorage.setItem("userId", user.id);
      navigate("/home");
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      setErrors({ ...errors, general: "Ocurrió un error. Inténtelo más tarde." });
    } */
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-50">
      <h2 className="text-center title">{isSignup ? "Crear una cuenta" : "Bienvenido de nuevo"}</h2>

      <Button className="buttonPrimary mt-5" onClick={handleSubmit}>
        <a href="/home">Ingreso a la DEMO</a>
      </Button>
      { /* <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <p className="text-center subtitle">
            {isSignup
              ? "Ingresa tus datos para comenzar a ahorrar"
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
            <Button type="submit" className="w-100 buttonPrimary" disabled={!isValid}>
              {isSignup ? "Crear cuenta" : "Iniciar sesión"}
            </Button>
          </Form>
          <p className="text-center mt-3">
            {isSignup ? (
              <>¿Ya tienes una cuenta? <a href="/login">Ingresá</a></>
            ) : (
              <>¿No tienes una cuenta? <a href="/register">Regístrate</a></>
            )}
          </p>
        </Col>
      </Row>
    </Container> */}
    </div>
    
  );
};

export default AuthForm;