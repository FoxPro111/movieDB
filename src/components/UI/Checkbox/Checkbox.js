import React from "react";
import styled from "styled-components";

const CheckboxContainer = styled.label`
  display: block;
  vertical-align: middle;
  position: relative;
  padding-left: 20px;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 4px;

  &::before {
    display: inline-block;
    width: 10px;
    height: 10px;
    content: "";
    position: absolute;
    left: 0;
    top: 6px;
    transition: 0.35s border-background;
    border: 2px solid #222;
    background-color: ${props => (props.checked ? "#222" : "transparent")};
  }
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const checkbox = ({ className, checked, label, ...props }) => (
  <CheckboxContainer checked={checked} className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    {label}
  </CheckboxContainer>
);

export default checkbox;
