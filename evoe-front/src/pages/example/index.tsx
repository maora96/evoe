import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import Header from "../../components/header/index";
import styles from "./styles.module.scss";

export default function Example() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles["left-container"]}>
          <img src="https://ui-avatars.com/api/?background=000&color=FFF&name=Marina" />
          <h3>@maora</h3>
        </div>
        <div className={styles["right-container"]}>
          <h2>Marina Oliveira</h2>

          <div className={styles.bio}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              at fermentum magna. Morbi ac nisl vel risus maximus volutpat.
              Fusce eu pulvinar mauris. Suspendisse varius erat et sodales
              dictum. Nulla et gravida est, eget sollicitudin tellus. Donec
              pulvinar lorem nec lectus rutrum, nec imperdiet lacus cursus. Sed
              ullamcorper sem quam, quis elementum justo elementum in.{" "}
            </p>

            <p>
              Mauris vel lacus aliquet, porttitor massa vitae, facilisis orci.
              Pellentesque quis sem a libero laoreet pharetra ut ut ante. Nulla
              dictum mauris a hendrerit sollicitudin. Donec ornare fermentum
              ipsum, nec placerat tortor condimentum sed. Sed eu finibus arcu,
              eu gravida enim. Morbi vitae nibh eu risus ultricies sollicitudin.
              Praesent pellentesque commodo scelerisque. Praesent rutrum
              imperdiet interdum. Etiam vulputate augue in finibus aliquet.
            </p>

            <span>
              <a href="">Instagram</a> | <a href="">Twitter</a> |{" "}
              <a href="">Tiktok</a> | <a href="">Website</a> |{" "}
              <a href="">Facebook</a>
            </span>

            <Button
              type="primary"
              text="Editar"
              buttonType="button"
              onClick={() => navigate("/exemplo/editar")}
            />
          </div>
        </div>
      </div>
    </>
  );
}
