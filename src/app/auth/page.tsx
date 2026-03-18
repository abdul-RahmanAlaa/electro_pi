'use client';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useLogin } from '@/hooks/use-login';
import { setCredentials } from '@/store/authSlice';
import { toast } from 'sonner';

import { AuthForm } from '@/components/auth-form';
import { DemoCredentials } from '@/components/demo-credentials';

export default function AuthPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [loginParams, setLoginParams] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const router = useRouter();

  const {
    data: userData,
    isLoading,
    isError,
    error: queryError,
  } = useLogin(loginParams.username, loginParams.password);

  useEffect(() => {
    if (userData) {
      dispatch(setCredentials(userData));
      toast.success(`Logged in as ${userData.username}`);
      router.push('/');
    }
  }, [dispatch, userData, router]);

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (!formData.username || !formData.password) {
      setError('Please enter username and password');
      return;
    }

    setLoginParams({
      username: formData.username,
      password: formData.password,
    });
  };

  const handleChange = (field: 'username' | 'password', value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <AuthForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        error={error}
        isError={isError}
        queryError={queryError}
      />
      <DemoCredentials />
    </>
  );
}
