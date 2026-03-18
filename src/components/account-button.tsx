'use client';

import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
import { RootState } from '@/store/store';
import { logout } from '@/store/authSlice';
import { UserAvatar } from '@/components';

export default function AccountButton() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    toast.success('Logged out');
  };

  if (user) {
    return (
      <button
        type="button"
        onClick={handleLogout}
        className="flex items-center gap-2 rounded-xl hover:bg-neutral-300"
      >
        <UserAvatar />
        <p className="hidden sm:block">Log out</p>
      </button>
    );
  }

  return (
    <Link
      href="/auth"
      className="flex items-center gap-2 rounded-xl hover:bg-neutral-300"
    >
      <UserAvatar />
      <p className="hidden sm:block">Log in</p>
    </Link>
  );
}
