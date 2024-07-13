import { useEffect, useState } from 'react';
import { User } from './types';
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
