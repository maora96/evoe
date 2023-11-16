import styles from "./styles.module.scss";
import Logo from "../../assets/evoe-logo.svg";
import Button from "../button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../modal";

export default function Header() {
  const [modalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      {modalVisible && <Modal setVisible={setIsModalVisible} />}
      <img src={Logo} className={styles.logo} />
      <div className={styles.buttons}>
        <Button
          type="primary"
          text="Adicionar usuário"
          buttonType="button"
          onClick={() => setIsModalVisible(true)}
        />
        <Button
          type="secondary"
          text="Página de Exemplo"
          buttonType="button"
          onClick={() => navigate("/exemplo")}
        />
      </div>
    </header>
  );
}
