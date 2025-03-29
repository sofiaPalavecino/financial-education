import { Button } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";

type FloatingButtonProps = {
    onClick: () => void;
};

export default function FloatingButton({ onClick }: FloatingButtonProps) {
  return (
    <Button
      variant="primary"
      className="position-fixed bottom-3 end-3 rounded-circle p-3 shadow"
      style={{ zIndex: 1050, width: "56px", height: "56px", bottom: "2.5em", right: "3em" }}
      onClick={onClick}
    >
      <BsPlusLg size={24} />
    </Button>
  );
}
