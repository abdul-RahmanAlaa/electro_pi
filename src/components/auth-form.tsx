import { Spinner } from '@/components/ui/spinner';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

interface AuthFormProps {
  formData: { username: string; password: string };
  handleChange: (field: 'username' | 'password', value: string) => void;
  handleSubmit: (event: React.SyntheticEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  error: string;
  isError: boolean;
  queryError: unknown;
}

export function AuthForm({
  formData,
  handleChange,
  handleSubmit,
  isLoading,
  error,
  isError,
  queryError,
}: AuthFormProps) {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full space-y-4 rounded-lg border p-6 shadow-sm"
      >
        <h2 className="text-center text-2xl font-semibold">Log in</h2>

        <div className="grid gap-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            value={formData.username}
            onChange={(e) => handleChange('username', e.target.value)}
            placeholder="username"
            autoComplete="username"
            required
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={(e) => handleChange('password', e.target.value)}
            placeholder="password"
            required
          />
        </div>

        {error && <p className="text-destructive text-sm">{error}</p>}
        {isError && queryError instanceof Error && (
          <p className="text-destructive text-sm">{queryError.message}</p>
        )}

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <>
              <Spinner className="mr-2" />
              Logging in...
            </>
          ) : (
            'Log in'
          )}
        </Button>
      </form>
    </div>
  );
}
