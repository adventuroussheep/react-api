import React, {useEffect, useState} from 'react';
import { getStoryIds, getStory } from '../Services/newApi';
import { Story } from '../Components/Stories/Story';
import { GlobalStyle, StoriesContainerWrapper } from "../Styles/StoriesContainerStyles";
import { useInfiniteScroll } from "../Hooks/useInfiniteScroll";


export const StoriesContainer = () => {

    const [storyIds, setStoryIds] = useState([]);
    const count = useInfiniteScroll();
  
    useEffect(() => {
      getStoryIds().then(data => setStoryIds(data));
    }, []);
  
  
  
    return <div>
      <GlobalStyle/>
      <StoriesContainerWrapper data-test-id="stories-container">

    <h1>Hacker News Stories</h1>
    {storyIds.slice(0, count).map(storyId => <Story key={storyId} storyId={storyId}/>)}
      </StoriesContainerWrapper>
    </div>
  }

  export default StoriesContainer;