import Image from "next/image";
import notFound from "../img/not_found.svg";

const NotFound = ({ uin }: NotFoundProps) => {
  return (
    <div className="not_found">
      <Image src={notFound} alt="Not Found Icon" width="100px"/>
      <h3 className="not_found_text">Штраф {uin} не найден</h3>
    </div>
  );
};

export default NotFound;

interface NotFoundProps {
  uin: any[]
}