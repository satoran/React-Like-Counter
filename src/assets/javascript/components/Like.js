import React from 'react'
import styled from 'styled-components'

import Button from './Button'
import Counter from './Counter'


class Like extends React.Component {
  render(){
    return (
      <Wrapper >
        <Button
          handleClick={this.props.handleClick}
        />
        <Counter 
          count={this.props.count}
        />
      </Wrapper>
    );
  }
}

export default Like;

const Wrapper = styled.div`
display: flex;
align-items: center;
width: 300px;
height: 50px;
border-radius: 5px;
`