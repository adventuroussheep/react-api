import React, {useState, useEffect} from 'react';
import { getStory } from '../../Services/newApi';
import { StoryWrapper, StoryTitle, StoryMeta, StoryMetaElement } from "../../Styles/storyStyles";

export const Story = ( {storyId} ) => {
    const [story, setStory] = useState({});

    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data));
    }, []);
    
    return story && story.url ? (
         <StoryWrapper data-testid="story">

            <a href={story.url}>
                <StoryTitle>
                    {story.title}
                    </StoryTitle>
            </a>
            <StoryMeta>
                <span className="story__by" data-testid="story-by">
                    <StoryMetaElement>
                        By: 
                    </StoryMetaElement>
                        {story.by}
                </span>
                
                
            </StoryMeta>
                {/* <br></br> */}
                {/* {JSON.stringify(story)} */}
         </StoryWrapper>) : null;
};

export default Story;
