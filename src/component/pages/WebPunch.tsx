import { memo, VFC } from "react";
import styled from "styled-components";
import { PunchButton } from "../atoms/button/PunchButton";
import { Clock } from "../atoms/clock/Clock";
import ImgIn from "../../icons/logo.png";

const SContainer = styled.div`
  display: grid;
  grid-template-rows: 200px 200px 200px 200px;
  grid-template-columns: 100px 200px 200px 200px 200px 100px;
`;

const SItem1 = styled.div`
  background-color: red;
  grid-row: 1;
  grid-column: 1 / span 7;
`;

const SItem2 = styled.div`
  background-color: green;
  grid-row: 2;
  grid-column: 2;
`;

const SItem3 = styled.div`
  background-color: blue;
  grid-row: 2;
  grid-column: 3;
`;

const SItem4 = styled.div`
  background-color: pink;
  grid-row: 3;
  grid-column: 2 / span 2;
`;

const SItem5 = styled.div`
  background-color: white;
  grid-row: 2 / span 2;
  grid-column: 4 / span 2;
`;

export const WebPunch: VFC = memo(() => {
  const onClickIn = () => {
    alert("出勤");
  };
  const onClickOut = () => {
    alert("退勤");
  };
  return (
    <>
      <SContainer>
        <SItem1>
          <Clock />
        </SItem1>
        <SItem2>
          <PunchButton src={ImgIn} onClick={onClickIn}>
            出勤
          </PunchButton>
        </SItem2>
        <SItem3>
          <PunchButton src={ImgIn} onClick={onClickOut}>
            退勤
          </PunchButton>
        </SItem3>
        <SItem4>
          <textarea cols={50} rows={10} maxLength={20} />
        </SItem4>
        <SItem5>地図</SItem5>
      </SContainer>
    </>
  );
});
