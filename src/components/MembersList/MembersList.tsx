import { Image, ListGroup } from "react-bootstrap";

export default function MembersList({ members }: { members: { name: string, avatar: string }[] }) {
    return (
        <ListGroup>
            {members.map((member, index) => (
                <ListGroup.Item key={index} className="d-flex align-items-center">
                    <Image src={member.avatar} roundedCircle width={40} height={40} className="me-2" />
                    {member.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}