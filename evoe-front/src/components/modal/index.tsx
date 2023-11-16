import { useState } from "react";
import Button from "../button";
import styles from "./styles.module.scss";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { createProfileClient } from "../../api/evoe/client";
import { toast } from "react-toastify";

interface IModal {
  setVisible: (visible: boolean) => void;
  refetch: (() => void) | undefined;
}

export default function Modal({ setVisible, refetch }: IModal) {
  const [passwordError, setPasswordError] = useState(false);

  const { register, handleSubmit } = useForm();

  const notify = () => toast("Usuário criado com sucesso!");

  const createProfileMutation = useMutation(
    async (data: any) => createProfileClient(data),
    {
      onSuccess: () => {
        notify();
        if (refetch) {
          refetch();
        }
        setVisible(false);
      },
    }
  );

  const onSubmit = (data: any) => {
    if (data.password === data.confirmPassword) {
      setPasswordError(false);
      createProfileMutation.mutate(data);
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
            placeholder="Insira seu username..."
            {...register("username", { required: true })}
          />
          <input
            type="password"
            placeholder="Insira sua senha..."
            {...register("password", { required: true })}
          />
          <input
            type="password"
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
