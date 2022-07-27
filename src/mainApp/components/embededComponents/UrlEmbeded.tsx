import { AiOutlineLink } from "react-icons/ai";

type Props = {
  url: string;
  nameUrl: string;
};
export const UrlEmbeded = ({ url, nameUrl }: Props) => {
  return (
    <div className="my-2">
      <a href={url} className="flex flex-row hover:text-blue-400 hover:underline text-xl" target="_blank">
        <AiOutlineLink className="mt-[4px]" />
        {nameUrl}
      </a>
    </div>
  );
};
