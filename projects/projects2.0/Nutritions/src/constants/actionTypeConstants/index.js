export const RELATION_NUTRITIONS_UNITS = 'RELATION_NUTRITIONS_UNITS'
export const GET_NUTRITIONS_V_ONE = 'GET_NUTRITIONS_V_ONE'
export const GET_NUTRITIONS_V_TWO = 'GET_NUTRITIONS_V_ONE'
export const GET_NUTRITIONS_V_THREE = 'GET_NUTRITIONS_V_THREE'


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
