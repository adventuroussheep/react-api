import React, {useEffect, useState} from 'react';
import { getStoryIds, getStory } from '../Services/newApi';
import { Story } from '../Components/Stories/Story';




export const StoriesContainer = () => {

    const [storyIds, setStoryIds] = useState([]);
  
    useEffect(() => {
      getStoryIds().then(data => setStoryIds(data));
    }, []);
  
  
  
    return <div>
    <h1>Hacker News Stories</h1>
    {storyIds.map(storyId => <Story key={storyId} storyId={storyId}/>)}
    </div>
  }

  export default StoriesContainer;