import { useUser } from "../../components/userContext"; 
import { moduleLabels } from "../../components/Forms/RegisterForm/moduleLabels"; 
import Header from "../../components/Header";
import Styles from "../dashboard/style.module.scss";

export const Dashboard = () => {
    const { user } = useUser();

    if (!user) {
        // Trate o caso em que o usuário é nulo ou indefinido
        return <div>Carregando...</div>;
    }

    return (
        <div className={Styles.divBox}>
            <Header/>

            <h1>Olá, {user.name}!</h1>
            <p>Módulo: {moduleLabels[user.course_module]}</p>
            
            <h1 className="title one">Que pena! Estamos em desenvolvimento :( </h1>

            <p className="headline two">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
        </div>
    );
};
