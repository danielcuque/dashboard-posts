type Props = {
  titleVideo: string;
  urlVideo: string;
};
export const VideoEmbeded = ({ titleVideo, urlVideo }: Props) => {
  return (
    <iframe
      className="h-4/5 w-4/5 aspect-video my-5"
      width="1424"
      height="624"
      src={urlVideo}
      title={titleVideo}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};
