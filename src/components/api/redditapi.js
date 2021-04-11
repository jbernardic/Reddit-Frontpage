export function getPosts(subreddit, limit){
    return fetch(`https://www.reddit.com/r/${subreddit}.json?&limit=${limit}&raw_json=1`)
    .then(res => res.json())
    .then(obj => obj.data.children);
}