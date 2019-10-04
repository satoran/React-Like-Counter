// コンポーネントの役割：Todoコンポーネントの表示のみを行う

import React from 'react'
import styled from 'styled-components'

import Variable from './components/Variable'
import { thisExpression } from '@babel/types';

export default function App() {
  return (
    <Div>
      <Variable />
    </Div>
  );
}

const Div = styled.div`
 margin: 10px;
`