import { ListGroup } from "react-bootstrap";

export default function MembersList({ members }: { members: { name: string, avatar: any }[] }) {
    return (
        <ListGroup>
            {members.map((member, index) => (
                <ListGroup.Item key={index} className="d-flex align-items-center gap-2">
                    <i className="bi bi-person"></i>
                    {member.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}