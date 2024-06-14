type Props = {
  children: string;
};

export const DocsDescription = ({ children }: Props) => {
  return (
    <>
      <p>{children}</p>
      <hr className="dark:border-[#35305090]" />
    </>
  );
};

export default DocsDescription;
