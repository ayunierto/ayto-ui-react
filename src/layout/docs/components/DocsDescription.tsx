type Props = {
  children: string;
};

export const DocsDescription = ({ children }: Props) => {
  return (
    <>
      <p className="text-base">{children}</p>
      <hr className="opacity-20" />
    </>
  );
};

export default DocsDescription;
