import { VideoEntry, ParagraphEntry, UrlEntry, DocumentEntry } from "./";

const childrens = [
  <VideoEntry />,
  <ParagraphEntry />,
  <UrlEntry />,
  <DocumentEntry />,
  <DocumentEntry />,
  <DocumentEntry />,
  <DocumentEntry />,
];
export const PostPreview = () => {
  return (
    <>
      <h2 className="font-bold text-2xl text-center mb-5 ">Post Preview</h2>
      {childrens.map((child, index) => {
        return child;
      })}
    </>
  );
};
