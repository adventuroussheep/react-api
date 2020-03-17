import React, {useEffect, useState} from 'react';
import { getStoryIds } from './Services/newApi';
import StoriesContainer from './Containers/StoriesContainer';


function App() {

  return (
    <div>
      <StoriesContainer/>
    </div>
  );
}

export default App;
