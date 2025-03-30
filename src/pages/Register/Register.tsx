import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";
import './Register.scss';

export default function Register() {
    const navigate = useNavigate();

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        if (userId) {
            navigate("/home");
        }
    }, [navigate]);

    return (
        <div className="bc-1">
            <section className="authImg"></section>
            <AuthForm isSignup={true} />
        </div>
    );
}