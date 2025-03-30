import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";
import './Login.scss';

export default function Login() {
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
            <AuthForm isSignup={false} />
        </div>
    );
}