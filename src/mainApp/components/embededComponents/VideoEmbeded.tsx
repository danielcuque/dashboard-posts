type Props = {
  titleVideo: string;
  urlVideo: string;
};
export const VideoEmbeded = ({ titleVideo, urlVideo }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center my-8">
      <p className="font-semibold text-center text-xl">{titleVideo}</p>
      <iframe
        className="h-4/5 w-4/5 aspect-video my-5"
        src={urlVideo}
        title={titleVideo}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
