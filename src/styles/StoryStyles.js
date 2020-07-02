import styled from "styled-components";

export const StoryWrapper = styled.section`
  padding: 2em;
  margin-bottom: 20px;

  border-radius: 36px;
  box-shadow: 8px 8px 16px #dadde4, -8px -8px 16px #f6f9ff;

  background-image: url(https://media1.giphy.com/media/cixSLnK7XB3J3ubhqF/giphy.gif?cid=ecf05e4725983b8685f10330e95a5cc655f9b60a5242d775&rid=giphy.gif);
`;

export const StoryTitle = styled.h1`
  margin-bottom: 5px;
  font-size: 24px;
  line-height: 1.8;
  margin: 0;
  background-image: url(https://media1.giphy.com/media/cixSLnK7XB3J3ubhqF/giphy.gif?cid=ecf05e4725983b8685f10330e95a5cc655f9b60a5242d775&rid=giphy.gif);

  a {
    font-size: 20px;
    padding: 0px 5px;
    border-radius: 10%;
    color: #2e2e2c;
    background-color: #d5a8ff;
    transition: 0.25s ease-in-out;
    box-shadow: inset 0px 0 0 0 #2e2e2c;
    overflow: hidden;
  }
  a:hover,
  a:focus,
  a:active {
    color: white;
    box-shadow: inset 1000px 0 0 5vmin #913af6;
  }
`;

export const StoryMeta = styled.div`
  > span:first-child {
    margin-right: 10px;
  }

  > span:not(:first-child):before {
    content: "⏰";
    margin: 0 7px;
  }

  .story__meta-bold {
    font-weight: bold;
  }
`;

export const StoryMetaElement = styled.span`
  font-weight: bold;
  color: ${(props) => props.color};
`;
