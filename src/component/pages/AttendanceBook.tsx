import { ChangeEvent, memo, useState, VFC } from "react";
import styled from "styled-components";

const SButton = styled.button`
  color: white;
  background-color: #2e8b57;
`;

const lstYm: Array[] = [
  { value: 202112, name: "2021年12月" },
  { value: 202201, name: "2022年01月" },
  { value: 202202, name: "2022年02月" }
];

export const AttendanceBook: VFC = memo(() => {
  const [ym, setYm] = useState<string>("");
  const onChangeYm = (e: ChangeEvent<HTMLInputElement>) => {
    setYm(e.target.value);
  };

  return (
    <>
      <p>出退勤一覧</p>
      <p>表示年月</p>
      <select title="表示年月" value={ym} onChange={onChangeYm}>
        {lstYm.map((n) => {
          return <option value={n.value}>{n.name}</option>;
        })}
      </select>
      {ym}
      <p>従業員名</p>
      <p>松井宏明</p>
    </>
  );
});
