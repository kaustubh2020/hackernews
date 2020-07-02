import React, { useEffect, useState } from "react";
import { getStoryIds } from "../services/hnApi";
import { Story } from "../components/Story";
import Icon from "../components/Icon";

import {
  GlobalStyle,
  StoriesContainerWrapper,
  About,
} from "../styles/StoriesContainerStyles";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

export const StoriesContainer = () => {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper data-test-id="stories-container">
        <h1>
          {" "}
          <Icon /> Hacker News 360&#176; 🌐
        </h1>
        <About>
          {" "}
          A news app{" "}
          <span role="img" aria-label="icon">
            💡
          </span>{" "}
          by the{" "}
          <a
            id="hackernews"
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/HackerNews/API"
          >
            Hackernews API
          </a>{" "}
          designed with{" "}
          <span role="img" aria-label="icon">
            💛
          </span>{" "}
          by{" "}
          <a
            id="github"
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/kaustubh2020/hackernews"
          >
            Kaustubh Jaiswal
          </a>
        </About>
        {storyIds.slice(0, count).map((storyId) => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </StoriesContainerWrapper>
    </>
  );
};
