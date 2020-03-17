import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';

import {act} from 'react-dom/test-utils';
import { App } from '../App';
import {storyIds, singularStory } from '../fixtures';
import {getStory, getStoryIds } from "../Services/newApi";
import {useInfiniteScroll } from '../Hooks/useInfiniteScroll';
import {STORY_INCREMENT} from '../Constants/index';

beforeEach(cleanup);

jest.mock('../hooks/useInfiniteScroll');
jest.mock('../Services/newApi', () => ({
    getStory: jest.fn(),
    getStoryIds: jest.fn()
}))

test('render the application', async() => {
    useInfiniteScroll.mockImplementation(() => ({
        count: STORY_INCREMENT,
    }));
    getStory.mockImplementation(() => Promise.resolve(singularStory));
    getStoryIds.mockImplementation(() => Promise.resolve(storyIds));


        const { getByText, queryByTestId } = render(<App/>);
        await waitForElement(() => [
            expect(getByText('response')).toBeTruthy(),
            // expect(getByText('Hacker News Stories')).toBeTruthy(),
            expect(queryByTestId('story-by').textContent).toEqual("Jay Cob"),
        ])

})