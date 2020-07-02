import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
            background-image: url(https://media1.giphy.com/media/cixSLnK7XB3J3ubhqF/giphy.gif?cid=ecf05e4725983b8685f10330e95a5cc655f9b60a5242d775&rid=giphy.gif);
  }
  *, *:before, *:after {
    -webkit-box-sizing: inherit;
            box-sizing: inherit;
            background-color: #E8EBF3;
            text-decoration: none;
            outline: none;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;
    font-size: 18px;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  #hackernews {
    color: darkgreen;
  }
  #hackernews:hover, #hackernews:focus, #hackernews:active {
    border-bottom: 1.5px solid darkgreen;
  }
  
  #github {
    padding: 0px 5px;
    overflow: hidden;
    border-radius: 5px;
    color: white;

    box-shadow:  5px 5px 10px #5d5e61,
    -5px -5px 10px #ffffff;

    background-image: linear-gradient(
      90deg,
      #00c0ff 0%,
      #ffcf00 49%,
      #fc4f4f 80%,
      #00c0ff 100%
    );
    animation: slidebg 5s linear infinite;
  }
  
  @keyframes slidebg {
    to {
      background-position: 40vw;
    }
  }
  #github:hover, #github:focus, #github:active {
    background-position: 80vw;
  }
}
`;

export const StoriesContainerWrapper = styled.main`
  max-width: 1000px;
  padding: 20px 15px;
  margin: auto;
`;

export const About = styled.p`
  font-family: "Nunito", sans-serif;
  background-color: #e8ebf3;
`;
