interface BookCaseProps {
  children: JSX.Element[];
}

const Bookcase = ({ children }: BookCaseProps) => {
  return <main>{children}</main>;
};

export default Bookcase;
