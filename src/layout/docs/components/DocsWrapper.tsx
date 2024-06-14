type Props = {
  children?: React.ReactNode;
};

export const DocsWrapper = ({ children }: Props) => {
  return <div className="flex flex-col gap-5">{children}</div>;
};

export default DocsWrapper;
