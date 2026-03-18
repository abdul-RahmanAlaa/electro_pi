import { IUser } from '@/types/user';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL_DEV;

export default async function Login(
  username: string,
  password: string,
): Promise<IUser> {
  const res = await fetch(`${baseUrl}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      password,
      expiresInMins: 30,
    }),
  });

  if (!res.ok) {
    throw new Error(`Failed to login: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();

  return data;
}
