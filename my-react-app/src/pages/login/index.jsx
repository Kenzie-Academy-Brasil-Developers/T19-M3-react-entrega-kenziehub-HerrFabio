import LoginForm from "../../components/Forms/LoginForm";
import Styles from "../login/style.module.scss"


export const Login = ({ setUser }) => {
    return (
        <main className={Styles.pageBox}>
            
            <div>

                <h1 className="title one ">Login</h1>
                <LoginForm setUser={setUser} />
            </div>
        </main>
    );
};