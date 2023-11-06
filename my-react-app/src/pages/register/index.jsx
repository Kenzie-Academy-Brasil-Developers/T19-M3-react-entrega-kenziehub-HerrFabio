import RegisterForm from "../../components/Forms/RegisterForm";
import Style from "../register/style.module.scss";

export const Register = () => {
    return (
    <main className={Style.mainBox}>
        <RegisterForm/>
    </main>);
};