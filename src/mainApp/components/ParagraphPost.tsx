type Props = {
    textContent: string;
}

export const ParagraphPost = ({textContent}:Props) => {
  return (
    <p className="text-justify">{textContent}</p>
  )
}
