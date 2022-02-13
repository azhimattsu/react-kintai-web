import { memo, useEffect, useState, VFC } from "react";
import styled from "styled-components";
import { interval } from "rxjs";
import useWeekDay from "../../../hooks/useWeekDay";

const SContainer = styled.div`
  background-color: #dddddd;
`;
const SDay = styled.div`
  font-size: 24px;
  text-align: center;
  padding-top: 10px;
`;
const STime = styled.div`
  font-size: 64px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Clock: VFC = memo(() => {
  const [date, setDate] = useState(new Date());
  const { getString } = useWeekDay();
  const zeroPadding = (num: number, len: number) => {
    return (Array(len).join("0") + num).slice(-len);
  };

  useEffect(() => {
    const subscription = interval(1000).subscribe(() => {
      setDate(new Date());
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <SContainer>
      <SDay>{`${date.getFullYear()} / ${zeroPadding(
        date.getMonth() + 1,
        2
      )} / ${zeroPadding(date.getDate(), 2)} （${getString(
        date.getDay()
      )}）`}</SDay>
      <STime>{`${zeroPadding(date.getHours(), 2)} : ${zeroPadding(
        date.getMinutes(),
        2
      )} : ${zeroPadding(date.getSeconds(), 2)}`}</STime>
    </SContainer>
  );
});
