import React from "react";
import { Card } from "react-bootstrap";

interface KeyFeaturesCardProps {
  title: string;
  icon: string;
  description: string;

  features: string[];
}

const KeyFeaturesCard: React.FC<KeyFeaturesCardProps> = ({ title, icon, description, features }) => {

  return (
    <Card className="shadow-sm border-0 rounded-lg p-3">
      <div className="d-flex align-items-center justify-content-center bg-light rounded-circle p-3 mb-3" style={{ width: "50px", height: "50px" }}>
        {icon}
      </div>
      <Card.Body>
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Text className="text-muted">{description}</Card.Text>
        <ul className="list-unstyled mt-2">
          {features.map((feature, index) => (
            <li key={index} className="d-flex align-items-start">
              <span className="me-2 text-primary">●</span> {feature}
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default KeyFeaturesCard;
