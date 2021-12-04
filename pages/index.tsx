import NotFound from "../components/not_found";
import IconBlock from "../components/icon_block";
import Loading from "../components/loading";
import Search from "../components/search";
import Data from "../components/data";
import HintAndWrong from "../components/hint&wrong";
import { useCallback, useEffect, useState } from "react";
import checkingControlNumber, {
  longIdx,
  shortIdx,
} from "../helpers/check_control_number";

export default function ShtrafovNet() {
  const [data, setData] = useState<any[]>([]);
  const [uin, setUin] = useState<any[]>([]);
  const [hintWrongMessage, setHintWrongMessage] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isFound, setIsFound] = useState<boolean>(false);
  const [isNotFound, setIsNotFound] = useState<boolean>(false);
  const [isHint, setIsHint] = useState<boolean>(false);

  const handleInput = ({ target: { value } }) => {
    setUin([...value]);
  };

  const setControlNumber = useCallback(() => {
    if (uin.length === 19) {
      setHintWrongMessage([...uin, checkingControlNumber(uin, shortIdx)]);
      setIsHint(true);
    } else if (uin.length === 24) {
      setHintWrongMessage([...uin, checkingControlNumber(uin, longIdx)]);
      setIsHint(true);
    } else if (uin.length > 10 && uin.length !== 25 && uin.length !== 20) {
      setHintWrongMessage(["УИН Номер должен состоять из 20 или 25 чисел"]);
      setIsHint(true);
    } else {
      setIsHint(false);
    }
  }, [uin]);

  useEffect(() => {
    setControlNumber();
  }, [setControlNumber]);

  const getData = () => {
    setIsHint(false);
    setLoading(true);
    fetch(`https://test-task.shtrafovnet.com/fines/${uin.join("")}`)
      .then((r) => r.json())
      .then((data) => {
        setIsFound(true);
        setIsNotFound(false);
        setLoading(false);
        setIsHint(false);
        setData([data]);
      })
      .catch(() => {
        setIsNotFound(true);
        setLoading(false);
        setIsHint(false);
        setData([]);
      });
  };

  const renderData = () => {
    return data.map((el) => {
      return (
        <Data
          resolution={el.number}
          key={el.number}
          reg_cert={el.reg_cert || "-"}
          bill_at={el.bill_at.substring(0, 10) || "-"}
          violator_name={el.violator_name || "-"}
          payee_username={el.payee_username || "-"}
          payee_inn={el.payee_inn || "-"}
          payee_kpp={el.payee_kpp || "-"}
          payee_bank_account={el.payee_bank_account || "-"}
          payee_bank_name={el.payee_bank_name || "-"}
          payee_bank_bik={el.payee_bank_bik || "-"}
          payee_oktmo={el.payee_oktmo || "-"}
          kbk={el.kbk || "-"}
          amount={el.amount || "-"}
          discount_size={el.discount_size || "-"}
          amount_to_pay={el.amount_to_pay || "-"}
        ></Data>
      );
    });
  };
  return (
    <div className="wrapper">
      <IconBlock />
      <Search onChange={handleInput} onClick={getData} defaultValue={uin}/>
      {isHint && <HintAndWrong message={hintWrongMessage.map(String)} />}
      {loading && <Loading />}
      {isFound && renderData()}
      {isNotFound && <NotFound uin={uin} />}
    </div>
  );
}
