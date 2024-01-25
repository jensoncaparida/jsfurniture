interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 md:px-10">{children}</div>
    </>
  );
};
