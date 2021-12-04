import React from "react";

const Data = ({
  resolution,
  reg_cert,
  bill_at,
  violator_name,
  payee_username,
  payee_inn,
  payee_kpp,
  payee_bank_account,
  payee_bank_name,
  payee_bank_bik,
  payee_oktmo,
  kbk,
  amount,
  discount_size,
  amount_to_pay,
}: DataComponentProps) => {
  return (
    <div className="data">
      <h3 className="data_header">Постановление #{resolution}</h3>
      <table className="data_items">
        <thead>
          <tr>
            <td>Свидетельсво о регистрации: </td>
            <td>{reg_cert}</td>
          </tr>
          <tr>
            <td>Дата постановления: </td>
            <td>{bill_at}</td>
          </tr>
          <tr>
            <td>Нарушение: </td>
            <td>{violator_name}</td>
          </tr>
          <tr>
            <td>Получатель платежа: </td>
            <td>{payee_username}</td>
          </tr>
          <tr>
            <td>ИНН: </td>
            <td>{payee_inn}</td>
          </tr>
          <tr>
            <td>КПП: </td>
            <td>{payee_kpp}</td>
          </tr>
          <tr>
            <td>Расчетный счёт: </td>
            <td>{payee_bank_account}</td>
          </tr>
          <tr>
            <td>Банк получателя: </td>
            <td>{payee_bank_name}</td>
          </tr>
          <tr>
            <td>БИК: </td>
            <td>{payee_bank_bik}</td>
          </tr>
          <tr>
            <td>
              ОКТМО{"("}ОКАТО{")"}:{" "}
            </td>
            <td>{payee_oktmo}</td>
          </tr>
          <tr>
            <td>КБК: </td>
            <td>{kbk}</td>
          </tr>
          <tr>
            <td>Сумма штрафа: </td>
            <td>{amount}</td>
          </tr>
          <tr>
            <td>Скидка: </td>
            <td>{discount_size}</td>
          </tr>
          <tr>
            <td>К оплате: </td>
            <td>{amount_to_pay}</td>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Data;

interface DataComponentProps {
  resolution: string;
  reg_cert: string;
  bill_at: string;
  violator_name: string;
  payee_username: string;
  payee_inn: string;
  payee_kpp: string;
  payee_bank_account: string;
  payee_bank_name: string;
  payee_bank_bik: string;
  payee_oktmo: string;
  kbk: string;
  amount: string;
  discount_size: string;
  amount_to_pay: string;
}
