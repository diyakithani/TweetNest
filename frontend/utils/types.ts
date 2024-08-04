export type User = {
  username: string;
  email: string;
  birthday: string;
  pfp_path: string;
  user_id: number;
};

export type Post = {
  post_id: number;
  parent_post_id: number;
  user_id: number;
  content: string;
  media_path: string;
  timestamp: Date;
  username: string;
  email: string;
  birthday: string;
  pfp_path: string;
};
