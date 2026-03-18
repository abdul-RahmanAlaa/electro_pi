import { Spinner } from '@/components/ui/spinner';

interface LoadingProps {
  message?: string;
  className?: string;
}

export default function Loading({ message = 'Loading...', className = '' }: LoadingProps) {
  return (
    <div className={`flex min-h-60 items-center justify-center ${className}`}>
      <div className="flex items-center gap-2">
        <Spinner className="text-neutral-700" />
        <span className="text-sm text-neutral-700">{message}</span>
      </div>
    </div>
  );
}


