import { DocumentEmbeded, UrlEmbeded, VideoEmbeded } from "./embededComponents";
import { ParagraphPost } from "./ParagraphPost";

type Props = {
  textPost: string;
};

export const BodyPost = ({ textPost }: Props) => {
  return (
    <>
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
    </>
  );
};
