import { componente, informe } from '../../interfaces/components';
import { DocumentEmbeded, UrlEmbeded, VideoEmbeded } from "./embededComponents";
import { ParagraphPost } from './ParagraphPost';

type Props = {
  secciones: componente[];
};

export const BodyPost = ({ secciones }: Props) => {
  return (
    <>
      {
        secciones.map((componente, index) => {

          switch (componente.tipo) {
            case 'documento':
              return (
                <DocumentEmbeded key={index} nameDocument={componente.nombre} urlDocument={componente.url} />
              )

            case 'enlace':
              return (
                <UrlEmbeded key={index} nameUrl={componente.nombre} url={componente.url} />
              )

            case 'parrafo':
              return (
                <ParagraphPost key={index} textContent={componente.texto} />
              )

            case 'video':
              console.log(componente.url)
              return (
                <VideoEmbeded key={index} titleVideo={componente.titulo} urlVideo={componente.url} />
              )
          }

        })
      }
    </>
  );
};


{/* <>
      <div className="flex flex-col">
        <ParagraphPost textContent={textPost} />
        <VideoEmbeded
          urlVideo="https://www.youtube.com/embed/OFcOY8VpZe8"
          titleVideo=""
        />

        <DocumentEmbeded
          nameDocument="Prueba"
          urlDocument="https://drive.google.com/file/d/1ePi2MwHV7FUhIbsd96WHfk9mQwViksiP/view?usp=sharing"
        />
        <UrlEmbeded nameUrl="Enlace externo" url="https://www.damianpeaf.me/" />
      </div>
    </> */}