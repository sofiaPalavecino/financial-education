import { Button, Container,  Row, Col } from "react-bootstrap";
import KeyFeaturesCard from "../../components/KeyFeaturesCard/KeyFeaturesCard";


const Landing = () => {
  const features = [
    {
      title: "Mis gastos 💰",
      icon: "",
      description: "Realiza un seguimiento y clasificá sus gastos",
      features: [
        "Registro de gastos simple con categorías",
        "Niveles de prioridad para una mejor organización",
        "Informes visuales y análisis de gastos",
        "Autocategorización de gastos",
      ],
    },
    {
      title: "Grupos 👥",
      icon: "",
      description: "Crea un presupuesto(?) con familia y amigos",
      features: [
        "Crear grupos para gastos compartidos",
        "Seguimiento del historial de transacciones compartidas",
        "Establecer y realizar un seguimiento de los objetivos de ahorro compartidos",
      ],
    },
    {
      title: "Educación 📚",
      icon: "",
      description: "Conoce como podes ahorrar y recibi tips personalizados",
      features: [
        "Lecciones financieras del tamaño de un bocado",
        "Consejos de ahorro personalizados impulsados por IA",
        "Seguimiento del progreso con niveles desbloqueables",
        "Consejos prácticos adaptados a tus gastos",
      ],
    },
  ];


  return (
    <>
      <Container className="text-center my-5">
        <h1>Simplifica tu vida financiera</h1>
        <p>
        Controla los gastos, ya sea de manera individual o grupal y aprende habilidades financieras todo en un solo lugar. Toma el control de tu dinero con nuestra intuitiva aplicación de seguimiento de gastos.
        </p>
        <Button variant="primary" className="buttonPrimary mx-2">
          Iniciar sesion
        </Button>
        <Button variant="secondary" className="mx-2 buttonSecondary">
          Registrate
        </Button>
      </Container>
  
      <section id="features" className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold">¿Que te ofrecemos?</h2>
            <p className="text-muted">
              Todo lo que necesitas para gestionar tu ahorro en un solo lugar.
            </p>
          </div>
          <Row className="g-4">
            {features.map((feature, index) => (
              <Col key={index} md={4}>
                <KeyFeaturesCard {...feature} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
 };

export default Landing;
