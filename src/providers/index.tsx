import { ReactNode } from 'react';
import { QueryProvider } from './query-provider';
import { ReduxProvider } from './redux-provider';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ReduxProvider>
      <QueryProvider>{children}</QueryProvider>
    </ReduxProvider>
  );
}
