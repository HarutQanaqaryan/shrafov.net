const HintAndWrong = ({ message }: HintComponentProps) => {
  return <span className="hint_wrong_message">{message}</span>;
};

export default HintAndWrong;
 interface HintComponentProps {
   message: string[]
 }