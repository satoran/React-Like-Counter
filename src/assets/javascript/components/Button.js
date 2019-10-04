import React from 'react'
import styled from 'styled-components'

function Button(props) {
      return (
        <LikeButton onClick={() => props.handleClick()}>
          いいね！
        </LikeButton>
      );
  }


const LikeButton = styled.button`
  height: 34px;
  border-radius: 3px;
  background-color: rgba(0,0,255,0.8);
  color: #fff;
  font-weight: bold;
  border-style: none;

 &:focus {
  outline:0;
 }
 &:hover {
  background-color: rgba(0,0,255,0.6);
 }
`


export default Button;