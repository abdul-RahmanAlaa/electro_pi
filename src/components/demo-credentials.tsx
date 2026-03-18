'use client';

import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { copyToClipboard } from '@/lib/utils';
import { toast } from 'sonner';

export function DemoCredentials() {
  const cardinals = {
    username: 'emilys',
    password: 'emilyspass',
  };

  return (
    <div className="mx-auto max-w-sm px-8">
      <h4>Demo credentials =</h4>

      <div className="flex items-center gap-4">
        <pre>username: {cardinals.username}</pre>
        <Button
          className="cursor-pointer"
          role="button"
          variant="outline"
          size="icon-xs"
          onClick={async () => {
            const copied = await copyToClipboard(cardinals.username);
            if (copied) {
              toast.success('Username copied to clipboard');
            } else {
              toast.error('Failed to copy username');
            }
          }}
        >
          <Copy />
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <pre>password: {cardinals.password}</pre>
        <Button
          className="cursor-pointer"
          role="button"
          variant="outline"
          size="icon-xs"
          onClick={async () => {
            const copied = await copyToClipboard(cardinals.password);
            if (copied) {
              toast.success('Password copied to clipboard');
            } else {
              toast.error('Failed to copy password');
            }
          }}
        >
          <Copy />
        </Button>
      </div>
    </div>
  );
}
