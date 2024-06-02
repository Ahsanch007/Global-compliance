import LoginView from '@/app/auth/login/LoginView';
import { AuthOptions, getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/authOptions';

const LoginContainer = async () => {
  const session = await getServerSession(authOptions as AuthOptions);
  console.log(session);
  return (
    <>
      <LoginView />
    </>
  );
};

export default LoginContainer;
