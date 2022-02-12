import { memo, VFC } from "react";
import styled, { keyframes } from "styled-components";

const spanime = keyframes`
  0%
  {
    transform: rotate(0deg);
  }
  100%
  {
    transform: rotate(360deg);
  }
`;

const SLoading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const SDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SSpinner = styled.div`
  width: 32px;
  height: 32px;
  margin: 10px auto;
  border: 4px #ddd solid;
  border-top: 4px #2e93e6 solid;
  border-radius: 50%;
  animation: ${spanime} 1s infinite linear;
`;

export const Loading: VFC = memo(() => {
  return (
    <>
      <SLoading>
        <SDiv>
          <SSpinner />
        </SDiv>
      </SLoading>
    </>
  );
});
