import AuthForm from "../../components/AuthForm/AuthForm";
import './Register.scss'
export default function Register () {
    return (
        
        <div className="bc-1">
        <section className="authImg"></section>
       <AuthForm isSignup={true} />
      
       </div>
    
    )
}


