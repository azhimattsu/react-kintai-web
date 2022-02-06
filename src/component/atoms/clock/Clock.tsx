import { memo, useEffect, useState, VFC } from "react";
import styled from "styled-components";
import { interval } from "rxjs";

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
      <SDay>{`${date.getFullYear()} / ${
        date.getMonth() + 1
      } / ${date.getDate()}`}</SDay>
      <STime>{`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`}</STime>
    </SContainer>
  );
});
