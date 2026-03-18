interface ErrorProps {
  message?: string;
  className?: string;
}

export default function ErrorMessage({
  message = 'Something went wrong.',
  className = '',
}: ErrorProps) {
  return (
    <div className={`flex min-h-60 items-center justify-center ${className}`}>
      <div className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-center">
        <p className="text-red-700">{message}</p>
      </div>
    </div>
  );
}
