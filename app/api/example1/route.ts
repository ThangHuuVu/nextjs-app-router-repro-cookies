const handler = async (_: Request) => {

  return new Response('the cookie secured_1 has HttpOnly', {
    status: 200,
    headers: { 'Set-Cookie': `secured_1=true; Path=/; Secure; HttpOnly` },
  });
};

export { handler as GET }