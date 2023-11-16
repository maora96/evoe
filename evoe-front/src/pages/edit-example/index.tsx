import Button from "../../components/button";
import Header from "../../components/header/index";
import styles from "./styles.module.scss";
import { useForm } from "react-hook-form";

export default function EditExample() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <img src="https://ui-avatars.com/api/?background=000&color=FFF&name=Marina" />
          <h3>Marina Oliveira</h3>
        </div>
        <div className={styles.edit}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h4>Dados pessoais</h4>
            <span>Nome</span>
            <input {...register("name")} defaultValue={"Marina"} />
            <div className={styles.box}>
              <div>
                <span>CPF</span>
                <input {...register("cpf")} />
              </div>
              <div>
                <span>Data de aniversário</span>
                <input {...register("birthdate")} />
              </div>
            </div>

            <span>Bio</span>
            <textarea
              {...register("bio")}
              defaultValue={
                " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at fermentum magna. Morbi ac nisl vel risus maximus volutpat.Fusce eu pulvinar mauris. Suspendisse varius erat et sodales dictum. Nulla et gravida est, eget sollicitudin tellus. Donec pulvinar lorem nec lectus rutrum, nec imperdiet lacus cursus. Sed ullamcorper sem quam, quis elementum justo elementum in."
              }
            />

            <h4>Redes sociais</h4>
            <div className={styles.box}>
              <div>
                <span>Twitter</span>
                <input {...register("twitter")} defaultValue={"Twitter"} />
              </div>
              <div>
                <span>Tiktok</span>
                <input {...register("tiktok")} defaultValue={"Tiktok"} />
              </div>
            </div>
            <div className={styles.box}>
              <div>
                <span>Instagram</span>
                <input {...register("instagram")} defaultValue={"Instagram"} />
              </div>
              <div>
                <span>Facebook</span>
                <input {...register("facebook")} defaultValue={"Facebook"} />
              </div>
            </div>
            <span>Website</span>
            <input {...register("website")} defaultValue={"Website"} />
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
