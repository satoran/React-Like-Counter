import React from 'react'
import styled from 'styled-components'

function Reset (props) {
    return (
      <ResetButtonWrapper>
        <ResetButton onClick={()=> props.handleClick()}>RESET</ResetButton>
      </ResetButtonWrapper>
   );
}

const ResetButtonWrapper = styled.div`
 display: flex;
`

const ResetButton = styled.button`
 width: 149px;
 text-align: center;
 height: 20px;
 background-color: rgba(255,0,0,0.8);
 color: #fff;
 border-radius: 3px;
 border-style: none;
 &:focus {
  outline:0;
 }
 &:hover {
  background-color: rgba(255,0,0,0.6);
 }
`

export default Reset;