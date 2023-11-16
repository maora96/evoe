import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

interface ISmallCard {
  name: string;
  username: string;
  id: string;
}

export default function SmallCard({ name, username, id }: ISmallCard) {
  const navigate = useNavigate();
  return (
    <div className={styles.container} onClick={() => navigate(`/perfil/${id}`)}>
      <img
        src={`https://ui-avatars.com/api/?background=000&color=FFF&name=${name}`}
        className={styles.avatar}
      />
      <div className={styles.content}>
        <h2>{name}</h2>
        <h3>{username}</h3>
      </div>
    </div>
  );
}
