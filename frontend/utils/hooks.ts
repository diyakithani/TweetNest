import { useEffect, useState } from 'react';
import { Post, User } from './types';
import client from './httpclient';
import { useRouter } from 'next/router';

export const useCurrentUser = (required: boolean = true) => {
  const router = useRouter();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    client.get('/activity/currentuser').then((res) => {
      if (res.status == 200) {
        setUser(res.data);
      } else {
        if (required) {
          router.replace('/test/login');
        }
      }
    });
  }, []);

  return user;
};

export const useGetPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    client.get('/activity/posts').then((res) => {
      if (res.status == 200) {
        setPosts(res.data);
      }
    });
  }, []);
  return posts;
};
