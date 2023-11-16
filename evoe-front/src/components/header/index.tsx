import styles from "./styles.module.scss";
import Logo from "../../assets/evoe-logo.svg";
import Button from "../button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../modal";

interface IHeader {
  refetch?: () => void;
}

export default function Header({ refetch }: IHeader) {
  const [modalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      {modalVisible && (
        <Modal setVisible={setIsModalVisible} refetch={refetch ?? undefined} />
      )}

      <img src={Logo} className={styles.logo} onClick={() => navigate("/")} />

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
