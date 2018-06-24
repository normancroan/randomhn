const TOP_STORIES_URL = "https://hacker-news.firebaseio.com/v0/topstories.json";
const STORY_ITEM_BASE_URL = "https://hacker-news.firebaseio.com/v0/item/"; //item/[id].json
const AUTHOR_BASE_URL = "https://hacker-news.firebaseio.com/v0/user/"; //[id].json

//shopped around for a performant js array shuffle, modified to avoid extending Array prototype
const shuffle = array => {
  let m = array.length,
    i;
  while (m) {
    i = (Math.random() * m--) >>> 0;
    [array[m], array[i]] = [array[i], array[m]];
  }
  return array;
};

const getStoryDataFor = storyIds => {
  //get the story data for story ids
  const storyDataJobs = storyIds.map(id => {
    return new Promise((resolve, reject) => {
      fetch(`${STORY_ITEM_BASE_URL}/${id}.json`)
        .then(res => res.json().then(json => resolve(json)))
        .catch(error => reject(error));
    });
  });
  return Promise.all(storyDataJobs).then(values => {
    return values;
  });
};

const getAuthorDataFor = stories => {
  //add Author data to array of stories
  const authorDataJobs = stories.map(story => {
    return new Promise((resolve, reject) => {
      fetch(`${AUTHOR_BASE_URL}/${story.by}.json`)
        .then(res => res.json().then(json => resolve(json)))
        .catch(error => reject(error));
    });
  });

  return Promise.all(authorDataJobs).then(authorValues => {
    // console.log(authorValues);
    return stories.map(story => {
      return {
        ...story,
        authorData: authorValues.find(
          authorValue => authorValue.id === story.by
        )
      };
    });
  });
};

export const getRandomStories = async () => {
  //GET top story ids
  const storyIds = await fetch(TOP_STORIES_URL)
    .then(storyIds => storyIds.json())
    .catch(error => console.log(error));

  //NOTE: use client side JavaScript to fetch ten stories at random from the top stories list.
  const randomStoryIds = shuffle(storyIds).slice(0, 10);

  //GET story data for our 10 random ids
  const stories = await getStoryDataFor(randomStoryIds);

  //GET author data for these stories, fetching here to easily satisfy "render nothing until all data retrieved"
  const storiesWithAuthorData = await getAuthorDataFor(stories);

  // return stories;
  return storiesWithAuthorData;
};
