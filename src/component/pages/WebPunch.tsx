import { ChangeEvent, memo, useState, VFC } from "react";
import styled from "styled-components";
import { PunchButton } from "../atoms/button/PunchButton";
import ImgIn from "../../icons/logo.png";

export const WebPunch: VFC = memo(() => {
  const onClickIn = () => {
    alert("TEST");
  };
  return (
    <>
      <PunchButton src={ImgIn} onClick={onClickIn}>
        出勤
      </PunchButton>
      <PunchButton src={ImgIn} onClick={onClickIn}>
        退勤
      </PunchButton>
    </>
  );
});
