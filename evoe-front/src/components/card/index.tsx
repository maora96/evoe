import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

interface ISmallCard {
  avatar: string;
  name: string;
  username: string;
  id: string;
}

export default function SmallCard({ avatar, name, username, id }: ISmallCard) {
  const navigate = useNavigate();
  return (
    <div className={styles.container} onClick={() => navigate(`/user/${id}`)}>
      <img src={avatar} className={styles.avatar} />
      <div className={styles.content}>
        <h2>{name}</h2>
        <h3>{username}</h3>
      </div>
    </div>
  );
}
