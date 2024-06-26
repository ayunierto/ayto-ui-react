type Props = {
  children?: React.ReactNode;
  docTitle: string;
  className?: string;
};

export const DocsTemplate = ({ docTitle, children, className = "" }: Props) => {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <h1 className="text-3xl">{docTitle}</h1>
      {children}
    </div>
  );
};

export default DocsTemplate;
