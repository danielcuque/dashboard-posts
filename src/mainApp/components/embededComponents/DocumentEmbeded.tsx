type Props = {
  nameDocument: string;
  urlDocument: string;
};
export const DocumentEmbeded = ({ nameDocument, urlDocument }: Props) => {
  return (
    <div className="flex flex-col items-center my-5">
      <a className="text-xl" href={urlDocument} target="_blank">{nameDocument}</a>
      <iframe
        className="h-4/5 w-4/5 aspect-video my-5"
        src={urlDocument}
      ></iframe>
    </div>
  );
};
