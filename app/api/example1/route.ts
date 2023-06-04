const handler = async (_: Request) => {

  return new Response('the cookie example1 has HttpOnly', {
    status: 200,
    headers: { 'Set-Cookie': `example1=1; Path=/; Secure; HttpOnly` },
  });
};

export { handler as GET }