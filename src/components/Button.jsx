/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const GButton = (props) => {
  const { message } = props;
  const StyledButton = styled.button`
    background-image: -webkit-linear-gradient(top, #f5f5f5, #f1f1f1);
    background-color: #f2f2f2;
    border: 1px solid #f2f2f2;
    border-radius: 4px;
    color: #5f6368;
    font-family: arial, sans-serif;
    font-size: 14px;
    margin: 11px 4px;
    padding: 0 16px;
    line-height: 27px;
    height: 36px;
    min-width: 54px;
    text-align: center;
    cursor: pointer;
    user-select: none;
  `;

  return (
    <>
      <StyledButton>{message}</StyledButton>
    </>
  );
};

export default GButton;
