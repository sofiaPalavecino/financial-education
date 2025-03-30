import { Button, Container,  Row, Col } from "react-bootstrap";
import KeyFeaturesCard from "../../components/KeyFeaturesCard/KeyFeaturesCard";
import './Landing.scss'



const Landing = () => {

  const features = [
    {
      title: "Mis gastos 💰",
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
      description: "Crea un presupuesto con familia y amigos",
      features: [
        "Crear grupos para gastos compartidos",
        "Seguimiento del historial de transacciones compartidas",
        "Establecer y realizar un seguimiento de los objetivos de ahorro compartidos",
      ],
    },
    {
      title: "Educación 📚",
      description: "Conoce como podes ahorrar y recibi tips personalizados",
      features: [
        // "Lecciones financieras del tamaño de un bocado",
        "Consejos de ahorro personalizados impulsados por IA",
        "Seguimiento del progreso",
        "Consejos prácticos adaptados a tus gastos",
      ],
    },
  ];


  return (
    <div className="bc-1">
      <Container className="text-center my-3">
        <h1 className="brand"> NUBIX </h1>
        <h2 className="title py-2 ">Transformá habitos, alcanzá metas</h2>
        <p className= "subtitle py-3 ">
        Controla los gastos, ya sea de manera individual o grupal y aprende habilidades financieras todo en un solo lugar. Toma el control de tu dinero con nuestra intuitiva aplicación de seguimiento de gastos.
        </p>
        <Button  className="buttonPrimary mx-2">
        <a href="/login">Ingresá</a>
        </Button>
        <Button  className="buttonSecondary mx-2 ">
        <a href="/register" >Registrate</a>
        </Button>
      </Container>
  
      <section className="landingImg"> </section>

      <section id="features" className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="title">¿Que te ofrecemos?</h2>
            <p className="subtitle py-2">
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
    </div>
  );
 };

export default Landing;
