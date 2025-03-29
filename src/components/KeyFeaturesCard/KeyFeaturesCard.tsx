import React from "react";
import { Card } from "react-bootstrap";

interface KeyFeaturesCardProps {
  title: string;
  description: string;

  features: string[];
}

const KeyFeaturesCard: React.FC<KeyFeaturesCardProps> = ({ title, description, features }) => {

  return (
    <Card className="shadow-sm border-0 rounded-lg p-3">
      <Card.Body>
        <Card.Title className=" h2title">{title}</Card.Title>
        <Card.Text className="text-muted">{description}</Card.Text>
        <ul className="list-unstyled mt-2">
          {features.map((feature, index) => (
            <li key={index} className="d-flex align-items-start listStyleLi">
              <span className="me-2 text-primary " >●</span> {feature}
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default KeyFeaturesCard;
