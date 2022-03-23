type Props = {
  type: string;
};

const Container: React.FC<Props> = ({ children, type }) => {
  return (
    <div className={`h-screen bg-${type}-desktop bg-cover bg-center`}>
      {children}
    </div>
  );
};
export default Container;
