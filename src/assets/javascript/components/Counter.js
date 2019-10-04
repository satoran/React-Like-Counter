import React from 'react'
import styled from 'styled-components'

class Counter extends React.Component {
    render(){
      return (
        <Balloon>
          <div>
            <Number>{this.props.count}</Number>
          </div>
        </Balloon>
      );
    }
  }

const Balloon = styled.div`
  align-content: center;
  position: relative;
  display: inline-block;
  padding: 0 15px;
  margin-left: 10px;
  border: 1px solid rgba(0,0,0,0.3);
  border-radius: 3px;
  width: auto;
  min-width: 50px;
  line-height: 34px;
  text-align: center;
  background: #f5f5f5;
  z-index: 0;
  &::before {
    border: 1px solid #000;
    border-width: 10px 10px 10px 0;
    border-color: transparent #f5f5f5 transparent transparent;
    content: "";
    position: absolute;
    top: 50%;
    left: -7px;
    margin-top: -9px;
    display: block;
    width: 0px;
    height: 0px;
    z-index: 0;
  }
 &::after {
    border-style: solid;
    border-width: 8px 8px 8px 0;
    border-color: transparent rgba(0,0,0,0.3) transparent transparent;
    content: "";
    position: absolute;
    top: 52%;
    left: -9px;
    margin-top: -8px;
    display: block;
    width: 0px;
    height: 0px;
    z-index: -1;
 }
`

const Number = styled.p`
  margin: 0;
  color: rgba(0,0,0,0.7);
`

export default Counter;