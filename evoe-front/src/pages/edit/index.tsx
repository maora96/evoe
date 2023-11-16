import { useParams } from "react-router-dom";
import Button from "../../components/button";
import Header from "../../components/header/index";
import styles from "./styles.module.scss";
import { useForm } from "react-hook-form";
import { useGetUser } from "../../hooks/user";
import { useMutation } from "react-query";
import { editProfileClient } from "../../api/evoe/client";
import { toast } from "react-toastify";

export default function Edit() {
  const { register, handleSubmit } = useForm();

  let { id } = useParams();
  const { data } = useGetUser(id ?? "");

  const onSubmit = (values: any) => {
    const formattedValues = {
      ...data,
      id,
      birthdate:
        values.birthdate !== "" ? values.birthdate : data?.data.birthdate,
      name: values.name !== "" ? values.name : data?.data.name,
      username: values.username !== "" ? values.username : data?.data.username,
      cpf: values.cpf !== "" ? values.cpf : data?.data.cpf,
      bio: values.bio !== "" ? values.bio : data?.data.bio,
      twitter: values.twitter !== "" ? values.twitter : data?.data.twitter,
      instagram:
        values.instagram !== "" ? values.instagram : data?.data.instagram,
      facebook: values.facebook !== "" ? values.facebook : data?.data.facebook,
      tiktok: values.tiktok !== "" ? values.tiktok : data?.data.tiktok,
      website: values.website !== "" ? values.website : data?.data.website,
    };

    editProfileMutation.mutate(formattedValues);
  };

  const notify = () => toast("Alterações salvas com sucesso!");

  const editProfileMutation = useMutation(
    async (data: any) => editProfileClient(data),
    {
      onSuccess: () => {
        notify();
      },
    }
  );

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <img
            src={
              data?.data.avatar ??
              `https://ui-avatars.com/api/?background=000&color=FFF&name=${data?.data.name}`
            }
          />
          <h3>Marina Oliveira</h3>
        </div>
        <div className={styles.edit}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h4>Dados pessoais</h4>
            <span>Nome</span>
            <input {...register("name")} defaultValue={data?.data.name} />
            <div className={styles.box}>
              <div>
                <span>CPF</span>
                <input {...register("cpf")} defaultValue={data?.data.cpf} />
              </div>
              <div>
                <span>Data de aniversário</span>
                <input
                  type="date"
                  {...register("birthdate")}
                  defaultValue={
                    data?.data.birthdate
                      ? data.data.birthdate.split("T")[0]
                      : null
                  }
                />
              </div>
            </div>

            <span>Bio</span>
            <textarea {...register("bio")} defaultValue={data?.data.bio} />

            <h4>Redes sociais</h4>
            <div className={styles.box}>
              <div>
                <span>Twitter</span>
                <input
                  {...register("twitter")}
                  defaultValue={data?.data.twitter}
                />
              </div>
              <div>
                <span>Tiktok</span>
                <input
                  {...register("tiktok")}
                  defaultValue={data?.data.tiktok}
                />
              </div>
            </div>
            <div className={styles.box}>
              <div>
                <span>Instagram</span>
                <input
                  {...register("instagram")}
                  defaultValue={data?.data.instagram}
                />
              </div>
              <div>
                <span>Facebook</span>
                <input
                  {...register("facebook")}
                  defaultValue={data?.data.facebook}
                />
              </div>
            </div>
            <span>Website</span>
            <input {...register("website")} defaultValue={data?.data.website} />
            <Button
              type="primary"
              text="Salvar"
              buttonType="submit"
              onClick={onSubmit}
            />
          </form>
        </div>
      </div>
    </>
  );
}
