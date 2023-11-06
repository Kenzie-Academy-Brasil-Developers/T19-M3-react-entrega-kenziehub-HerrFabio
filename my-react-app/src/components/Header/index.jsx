import React from "react";
import { useUser } from "../../components/userContext";
import { useNavigate } from "react-router-dom";
import Styles from "../Header/style.module.scss";

export default () => {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Limpar o estado de usuário
    setUser(null);

    // Remover a token do localStorage
    localStorage.removeItem("@TOKEN");

    // Redirecionar o usuário para a página inicial
    navigate("/");
  };

  return (
    <header className={Styles.headerBox}>
      <h1 className="title one">Kenzie Hub</h1>
      <button onClick={handleLogout}>
        Sair
      </button>
    </header>
  );
};
