'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function UserAvatar() {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <Avatar>
      {user ? (
        <>
          <AvatarImage src={user?.image} alt={user?.username} />
          <AvatarFallback>
            {user?.firstName[0] + user?.lastName[0]}
          </AvatarFallback>
        </>
      ) : (
        <AvatarFallback>EP</AvatarFallback>
      )}
    </Avatar>
  );
}
