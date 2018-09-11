import React, { Component } from "react";
import styled from "styled-components";
import logo from "./logo.svg";

const StyledApp = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
  font-family: "CircularStd Bold";
`;

const StyledIntro = styled.p`
  font-family: "CircularStd";
`;

const Logo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <Header>
          <Logo src={logo} alt="logo" />
          <h1>Welcome to React</h1>
        </Header>
        <StyledIntro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </StyledIntro>
      </StyledApp>
    );
  }
}

export default App;
