import { useEffect, useState } from 'react';
import { getReport } from '../../services/apiIA';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';

const TipCard = ({ title, description }: { title: string, description: string }) => (
  <Col md={6} lg={4} className="mb-4">
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  </Col>
);

export const ExpenseTips = ({ groupId }: { groupId: number | undefined }) => {
  const [tips, setTips] = useState<{ title: string; description: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTips = async () => {
      try {
        setLoading(true);
        const aiResponse = await getReport(groupId);
        
        if (Array.isArray(aiResponse)) {
          setTips(aiResponse);
        } else {
          console.error('La respuesta de la IA no es un array válido:', aiResponse);
        }
      } catch (error) {
        console.error('Error al obtener los consejos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTips();
  }, [groupId]);

  return (
    <Container>
      <h2 className=" mt-4">Consejos de Ahorro 💡</h2>
      <p className="text-muted subtitle">Nubi te dejará unos consejos en esta sección</p>
      {loading ? (
        <div className="text-center my-4">
          <Spinner animation="border" />
        </div>
      ) : (
        <Row>
          {tips.length > 0 ? (
            tips.map((tip, index) => <TipCard key={index} {...tip} />)
          ) : (
            <p className="text-center">No hay recomendaciones disponibles.</p>
          )}
        </Row>
      )}
    </Container>
  );
};
