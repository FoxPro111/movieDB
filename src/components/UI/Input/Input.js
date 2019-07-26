import React from "react";
import styled from "styled-components";

const Input = styled.input.attrs({ type: "search" })`
  display: block;
  width: 100%;
  padding: 8px 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  font-size: 15px;
`;

const input = ({ className, checked, label, ...props }) => (
  <Input checked={checked} {...props} />
);

export default input;
