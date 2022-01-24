import { ChangeEvent, memo, useState, VFC } from "react";
import styled from "styled-components";
import { PunchButton } from "../atoms/button/PunchButton";
export const WebPunch: VFC = memo(() => {
  const onClickIn = () => {
    alert("TEST");
  };
  return (
    <>
      <PunchButton src="" onClick={onClickIn}>
        出勤
      </PunchButton>
    </>
  );
});
