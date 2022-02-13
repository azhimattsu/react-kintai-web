import { ChangeEvent, memo, useState, VFC } from "react";
import styled from "styled-components";
import { PunchButton } from "../atoms/button/PunchButton";
import { Clock } from "../atoms/clock/Clock";
import ImgIn from "../../images/punch.png";
import { Loading } from "../atoms/Loading";

const SBody = styled.div`
  width: 800px;
  margin: 100px auto;
  padding: 10px;
  border: 1px solid #555;
  background-color: #f8f4e6;
`;

const SArea1 = styled.div`
  display: grid;
  grid-template-columns: 400px 50%;
  grid-template-rows: 200px 200px;
  border: 1px solid blue;
`;
const SBox1 = styled.div`
  display: frex;
  grid-column: 1/2;
  border: 1px solid green;
`;
const SBox2 = styled.div`
  display: frex;
  grid-column: 1/2;
  grid-row: 2/3;
  border: 1px solid black;
`;
const SBox3 = styled.div`
  display: frex;
  grid-column: 2/3;
  grid-row: 1/3;
  border: 1px solid black;
`;
const SMemo = styled.textarea`
  resize: none;
  padding: 0;
  margin: 0;
  width: 390px;
  height: 190px;
`;

export const WebPunch: VFC = memo(() => {
  const [memo, setMemo] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const onChangeMemo = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(e.target.value);
  };

  const onClickIn = () => {
    setIsLoading(true);
    setIsLoading(false);
    alert("出勤");
  };
  const onClickOut = () => {
    setIsLoading(true);
    setIsLoading(false);
    alert("退勤");
  };
  return (
    <>
      {isLoading === true ? <Loading /> : ""}
      <SBody>
        <Clock />
        <SArea1>
          <SBox1>
            <PunchButton src={ImgIn} onClick={onClickIn}>
              出勤
            </PunchButton>
            <PunchButton src={ImgIn} onClick={onClickOut}>
              退勤
            </PunchButton>
          </SBox1>
          <SBox2>
            <SMemo
              placeholder="報告事項"
              maxLength={20}
              value={memo}
              onChange={onChangeMemo}
            />
          </SBox2>
          <SBox3>地図エリア</SBox3>
        </SArea1>
      </SBody>
    </>
  );
});
