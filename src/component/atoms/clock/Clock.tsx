import { memo, useEffect, useState, VFC } from "react";
import styled from "styled-components";
import { interval } from "rxjs";
import useWeekDay from "../../../hooks/useWeekDay";

const SContainer = styled.div`
  background-color: white;
`;
const SDay = styled.div`
  font-size: 32px;
  text-align: center;
`;
const STime = styled.div`
  font-size: 64px;
  font-weight: bold;
  text-align: center;
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
