import { useState } from "react";
import Button from "../button";
import styles from "./styles.module.scss";
import { useForm } from "react-hook-form";

interface IModal {
  setVisible: (visible: boolean) => void;
}

export default function Modal({ setVisible }: IModal) {
  const [passwordError, setPasswordError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    if (data.password === data.confirmPassword) {
      setPasswordError(false);
      console.log(data);
    } else {
      setPasswordError(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span onClick={() => setVisible(false)}>x</span>

        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Preencha os campos</h3>
          <input placeholder="Insira seu nome..." {...register("name")} />
          <input
            placeholder="Insira seu email..."
            {...register("email", { required: true })}
          />
          <input
            placeholder="Insira sua senha..."
            {...register("password", { required: true })}
          />
          <input
            placeholder="Repita sua senha..."
            {...register("confirmPassword", { required: true })}
          />
          {passwordError && <span>Senhas não conferem.</span>}

          <Button
            type="primary"
            text="Cadastrar!"
            buttonType="submit"
            onClick={onSubmit}
          />
        </form>
      </div>
    </div>
  );
}
