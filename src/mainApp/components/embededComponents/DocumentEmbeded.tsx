type Props = {
  nameDocument: string;
  urlDocument: string;
};
export const DocumentEmbeded = ({ nameDocument, urlDocument }: Props) => {
  return (
    <div className="my-2">
      <a href={urlDocument} target="_blank">
        {" "}
        {nameDocument}{" "}
      </a>
    </div>
  );
};
