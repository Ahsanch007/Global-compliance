'use client';
import { CacheProvider } from '@emotion/react';
import { useEmotionCache, MantineProvider, MantineTheme } from '@mantine/core';

import { useServerInsertedHTML } from 'next/navigation';
import { theme } from '@/theme/theme';

export function RootStyleRegistry({ children }: { children: React.ReactNode }) {
  const cache = useEmotionCache();
  cache.compat = true;

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' '),
      }}
    />
  ));

  return (
    <CacheProvider value={cache}>
      <MantineProvider
        theme={theme as unknown as MantineTheme}
        withGlobalStyles
        withNormalizeCSS
      >
        {children}
      </MantineProvider>
    </CacheProvider>
  );
}
