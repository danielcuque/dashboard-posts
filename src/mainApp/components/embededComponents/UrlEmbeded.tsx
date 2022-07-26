type Props = {
  url: string;
  nameUrl: string;
};
export const UrlEmbeded = ({ url, nameUrl }: Props) => {
  return (
    <div className="my-2">
      <a href={url} target="_blank">
        {" "}
        {nameUrl}{" "}
      </a>
    </div>
  );
};
