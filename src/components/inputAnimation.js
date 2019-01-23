import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";
import { Grid, Cell } from "styled-css-grid";
import React, { Component } from 'react';

const borderLeft = keyframes`
    0% {
    height:0;
    transform:translate(0,200px);
    opacity:0;
    }
    100% {
    height:100%;
    opacity:1;
  }
`;
const borderRight = keyframes`
    0% {
    height:0;
    transform:translate(0,-200px);
    opacity:0;
    }
    100% {
    height:100%;
    opacity:1;
  }
`;
const borderUp = keyframes`
    0% {
    width:0;
    transform:translate(200px);
    opacity:0;
    }
    100% {
    width:100%;
    opacity:1;
  }
`;
const borderDown = keyframes`
    0% {
    width:100%;
    opacity:1;
    }
    50%{
      width: 150%;
      opacity:0.5
    }
    100% {
    width:100%;
    opacity:1;
    color:yellow;
  }
`;
const Input2 = styled.input`
  border: 1px solid darkred;
  border: none;
  width: 100%;
  height: 100%;
  font-size: 1em;
  background-color: white;
  justify-self: center;
  align-self: center;
`;
const DivToAnimateLeft = styled.div`
  grid-column: 1/2;
  grid-row: 1/5;
  background-color: darkred;
  animation: ${borderLeft} 2s reverse forwards;
`;
const DivToAnimateRight = styled.div`
  grid-column: 3/4;
  grid-row: 1/5;
  background-color: darkred;
  animation: ${borderRight} 2s reverse forwards;
`;
const DivToAnimateHorizontalUp = styled.div`
  grid-column: 1/5;
  grid-row: 1/1;
  background-color: darkred;
  animation: ${borderUp} 2s reverse forwards;
`;
const DivToAnimateHorizontalDown = styled.div`
  justify-self: center;
  grid-column: 1/5;
  grid-row: 4/5;
  background-color: darkred;
  animation: ${borderDown} 2s forwards;
`;

class InputAnimation extends Component {
    render() {
        return (
            <div style={{ display: "grid", gridTemplateColumns: "100" }}>
            <div
              style={{
                // border: "2px solid black",
                gridColumn: "2/3",
                gridRow: "1/1",
                display: "grid",
                alignContent: "start",
                justifyContent: "center",
                gridTemplateColumns: "1% 98% 1%",
                gridTemplateRows: "5% 45% 45% 5%"
              }}
            >
              <DivToAnimateLeft />
              <DivToAnimateHorizontalUp />
              <Input2
                style={{
                  gridColumn: "2/3",
                  gridRow: "2/4"
                }}
              />
              <DivToAnimateRight />
              <DivToAnimateHorizontalDown />
            </div>
          </div>
        );
    }
}

export default InputAnimation;