type Props = {
  textPost: string;
};

export const BodyPost = ({ textPost }: Props) => {
  return (
    <>
      <div>
        <p className="text-justify">{textPost}</p>

        <div className="flex justify-center">
          <iframe
            className="h-1/2 w-1/2 aspect-video my-8"
            width="1424"
            height="624"
            src="https://www.youtube.com/embed/OFcOY8VpZe8"
            title="067-DevTalles: Experiencia laboral en Canadá"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            // allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
};
