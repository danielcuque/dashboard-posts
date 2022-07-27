import { InformationByUser } from "./InformationByUser";
import { BodyPost } from "./BodyPost";
import { TitlePost } from "./TitlePost";
import { useContext } from "react";
import { InformeContext } from "../context/";
import { formatDateToWords } from "../../utils/dateFunctions";
import { PreloadData } from "./PreloadData";

export const PracticeReport = () => {
  const { informeActivo, usuarioActivo } = useContext(InformeContext);

  if (informeActivo && usuarioActivo) {
    return (
      <>
        <section className="ml-40 mr-[544px] flex-1">
          <h1 className="mt-8 text-4xl font-bold">Prácticas Iniciales</h1>

          <InformationByUser
            userName={usuarioActivo.nombre}
            datePosted={formatDateToWords(
              informeActivo.fecha.toDate().getTime()
            )}
            idUser={usuarioActivo.carnet}
          />

          <TitlePost
            titlePost={informeActivo.titulo}
            // Mejorar como se muestran categorias
            subtitlePost={informeActivo.categorias.toString()}
          />

          <BodyPost secciones={informeActivo.secciones} />
        </section>
      </>
    );
  } else {
    return (<PreloadData />);
  }
};
