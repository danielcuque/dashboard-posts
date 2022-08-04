type Props = {
  textContent: string;
}

export const ParagraphPost = ({ textContent }: Props) => {
  return (
    <p className="text-justify text-xl mt-4">{textContent}</p>
  )
}
