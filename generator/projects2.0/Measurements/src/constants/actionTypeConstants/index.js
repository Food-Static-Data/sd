// export const REQUEST_POSTS = 'REQUEST_POSTS'
// export const RECEIVE_POSTS = 'RECEIVE_POSTS'
// export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
// export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'


export const GET_MEASUREMENTS = 'GET_MEASUREMENTS'
export const GET_MEASUREMENT_SYSTEM = 'GET_MEASUREMENT_SYSTEM'
export const SHOW_ALL_MEASUREMENTS = 'SHOW_ALL_MEASUREMENTS'
export const FILTER_ITEMS = 'FILTER_ITEMS'

// export const GET_UNIT --> (ID)
// paginate
// search/filter
//
// FILTER_BY_*

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
