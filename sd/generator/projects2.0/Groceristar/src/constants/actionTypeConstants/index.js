// is it simple export of we should here keep some methods?
// like func where we connect files with models
// aka get(filename) switch case GS_DEPARTMENTS return @files/departments...
import {
  GS_DEPARTMENTS, GS_GROCERY, GS_INGREDIENTS, GS_USERS
} from './models'


export const selectSubreddit = subreddit => ({
  type: SELECT_SUBREDDIT,
  subreddit
})

export const invalidateSubreddit = subreddit => ({
  type: INVALIDATE_SUBREDDIT,
  subreddit
})

export const requestPosts = subreddit => ({
  type: REQUEST_POSTS,
  subreddit
})

export const receivePosts = (subreddit, json) => ({
  type: RECEIVE_POSTS,
  subreddit,
  posts: json.data.children.map(child => child.data),
  receivedAt: Date.now()
})
