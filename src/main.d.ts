export interface Post {
  id: string
  url: string
  updatedAt: string
  createdAt: string
  title: string
  body: string
  frontmatter: {
    [key: string]: string
  }
  author: {
    name: string
    login: string
    avatarUrl: string
  }
  labels: {
    [key: string]: string[]
  }
  reactions: {
    THUMBS_UP: number
    THUMBS_DOWN: number
    LAUGH: number
    HOORAY: number
    CONFUSED: number
    HEART: number
    ROCKET: number
    EYES: number
  }
  totalComments: number
  totalReactions: number
}

export interface State {
  cache: Array<Post>
  content: {
    post: Post | null
    posts: Array<Post>
    offset: number
  }
}
