type Props = {
  children: string;
};

const Description = ({ children }: Props) => {
  return (
    <>
      <p className="text-base">{children}</p>
      <hr className="opacity-20" />
    </>
  );
};

export default Description;
