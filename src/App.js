import React from "react";
import "./App.css";
import GetPhoto from './components/GetPhoto.js';
import styled from 'styled-components';

const Title = styled.h1`
  background: blue;
  border: 5px solid red;
  border-radius: 50px;
  padding: 2%;
  color: white;
  width: 75%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;


function App() {
  return (
    <div className="App">
      <Wrapper>
        <Title>NASA PHOTO OF THE DAY</Title>
        <GetPhoto />
      </Wrapper>
    </div>
  );
}

export default App;
