import '../styles/global.css';
import { Metadata } from 'next';
import { RootStyleRegistry } from '@/app/emotion';
import { gilory } from '@/app/font';
import { MainLayout } from '@/components/Layout/MainLayout';
import { AuthProvider } from '@/context/AuthProvider';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/authOptions';

export const metadata: Metadata = {
  title: `M Afzaal Afzal`,
  description: `M Afzaal Afzal, A frontend web apps developer`,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html className={`${gilory.variable} ${gilory.className}`} lang="en">
      <body>
        <AuthProvider session={session}>
          <RootStyleRegistry>
            <MainLayout>{children}</MainLayout>
          </RootStyleRegistry>
        </AuthProvider>
      </body>
    </html>
  );
}
