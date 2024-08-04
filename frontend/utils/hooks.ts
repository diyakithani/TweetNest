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
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await client.get('/activity/posts');
        if (res.status === 200) {
          setPosts(res.data);
        } else {
          setError('Failed to fetch posts');
        }
      } catch (err: any) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};
