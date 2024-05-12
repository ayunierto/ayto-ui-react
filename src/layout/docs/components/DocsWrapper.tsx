type Props = {
  /**
   * Children to be rendered inside
   */
  children?: React.ReactNode;
};

export const DocsWrapper = ({ children }: Props) => {
  return <div className="flex flex-col gap-6">{children}</div>;
};

export default DocsWrapper;
