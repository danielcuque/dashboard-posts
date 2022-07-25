type Props = {
  titlePost: string;
  subtitlePost: string;
};

export const TitlePost = ({ titlePost, subtitlePost }: Props) => {
  return (
    <div className="mb-8">
      <h1 className="mt-10 text-3xl font-bold"> {titlePost} </h1>
      <h2 className="text-subtitle tracking-wider"> {subtitlePost} </h2>
    </div>
  );
};
