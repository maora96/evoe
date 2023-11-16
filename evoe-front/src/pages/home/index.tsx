import SmallCard from "../../components/card";
import Header from "../../components/header/index";
import { useGetUsers } from "../../hooks/user";
import styles from "./styles.module.scss";

export default function Home() {
  const { data } = useGetUsers();

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>Usuários</h1>
        <div className={styles.users}>
          {data ? (
            data.data.users.map((user: UserSummary) => (
              <SmallCard
                avatar={user.avatar}
                name={user.name}
                username={user.username}
                id={user.id}
              />
            ))
          ) : (
            <p>Nenhum usuário encontrado.</p>
          )}
        </div>
      </div>
    </>
  );
}
