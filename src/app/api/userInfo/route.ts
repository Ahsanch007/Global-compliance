import { getToken } from 'next-auth/jwt';

const getDataFromUserInfo = async (token: string) => {
  const userInfoEndpoint = `${process.env.ZITADEL_ISSUER}/oidc/v1/userinfo`;
  const response = await fetch(userInfoEndpoint, {
    headers: {
      authorization: `Bearer ${token}`,
      'content-type': 'application/json',
    },
    method: 'GET',
  });

  const userInfo = await response.json();

  return userInfo;
};

const handler = async (req: Request) => {
  try {
    const token = await getToken({ req: req as any });

    if (!token?.accessToken) {
      // Use the token as needed
      return new Response(
        JSON.stringify({ status: 'fail', message: 'Unauthorized' }),
        {
          status: 401,
        },
      );
    }

    const userInfo = await getDataFromUserInfo(token?.accessToken as any);
    return new Response(
      JSON.stringify({
        data: userInfo,
        status: 'success',
      }),
      {
        status: 200,
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        status: 'fail',
        message: 'Error while getting user info',
      }),
      {
        status: 500,
      },
    );
  }
};

export { handler as GET };
