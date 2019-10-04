import React from 'react'
import styled from 'styled-components'

import Like from './Like'
import Reset from './Reset'

class Variable extends React.Component {
    constructor(props) {
      super(props);
        this.state = {
          count: 0
      }
    }
  
    // クリック時に１増える関数
    handleClick() {
      this.setState({count:this.state.count+1});
    }

    // いいねの数をリセットする関数
    handleReset() {
      this.setState({count:0});
    }
    
    
    render() {
      return (
        <div>
          <Like 
            count={this.state.count}
            handleClick={this.handleClick.bind(this)}
          />
          <Reset 
            handleClick={this.handleReset.bind(this)}
          /> 
        </div>
      );
  }
}

export default Variable;