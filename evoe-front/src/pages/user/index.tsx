import Header from "../../components/header";
import styles from "./styles.module.scss";
import { useGetUser } from "../../hooks/user";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button";

export default function User() {
  let { id } = useParams();
  const { data } = useGetUser(id ?? "");

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles["left-container"]}>
          <img
            src={`https://ui-avatars.com/api/?background=000&color=FFF&name=${data?.data.name}`}
          />
          <h3>@{data?.data.username}</h3>
        </div>
        <div className={styles["right-container"]}>
          <h2>{data?.data.name}</h2>

          <div className={styles.bio}>
            <p>{data?.data.bio}</p>

            <span>
              {data?.data.instagram && (
                <>
                  | <a href={data.data.instagram}>Instagram</a>
                </>
              )}
              {data?.data.twitter && (
                <>
                  | <a href={data.data.twitter}>Twitter</a>
                </>
              )}
              {data?.data.tiktok && (
                <>
                  | <a href={data.data.tiktok}>Tiktok</a>
                </>
              )}{" "}
              {data?.data.website && (
                <>
                  | <a href={data.data.website}>Website</a>
                </>
              )}
              {data?.data.facebook && (
                <>
                  | <a href={data.data.facebook}>Facebook</a>
                </>
              )}
            </span>

            <Button
              type="primary"
              text="Editar"
              buttonType="button"
              onClick={() => navigate(`/editar/${id}`)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
