import Header from "../../components/header";
import styles from "./styles.module.scss";
import { useGetUser } from "../../hooks/user";

export default function User() {
  const { data } = useGetUser("");

  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
}
