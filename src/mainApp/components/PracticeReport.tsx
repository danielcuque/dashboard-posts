import { Avatar } from "./Avatar";
import { BodyPost } from "./BodyPost";
import { TitlePost } from "./TitlePost";

const provisionalText =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";

export const PracticeReport = () => {
  return (
    <>
      <section className="mx-52 flex-1">
        {/* El titulo por defecto pienso que van a ser Practicas iniciales(?) */}
        <h1 className="mt-8 text-4xl font-bold">Prácticas Iniciales</h1>
        {/* Avatar
      Nombre
      Fecha
      Carné
      */}
        <Avatar
          userName="Daniel Cuque"
          datePosted="Jul 15"
          idUser="202112145"
        />
        {/*
      Practica No. X
      Subtema
      */}

        <TitlePost
          titlePost={"Práctica 1"}
          subtitlePost={"Mantenimiento de una computadora"}
        />

        <BodyPost textPost={provisionalText} />
      </section>
    </>
  );
};
