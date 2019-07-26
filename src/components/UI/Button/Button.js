import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  width: 100%;
  padding: 10px;
`;

const button = ({ className, children, ...props }) => (
  <ButtonWrapper className={className} {...props}>
    {children}
  </ButtonWrapper>
);

export default button;
