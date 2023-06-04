import { cookies } from "next/headers";

const handler = async (_: Request) => {
  cookies().set({ name: "example2_custom", value: "2", secure: true, httpOnly: true });

  return new Response(`the foo cookie won't have HttpOnly after using cookies().set() for the bar cookie on line 4`, {
    status: 200,
    headers: { 'Set-Cookie': `example2=2; Secure; HttpOnly` },
  });
};

export { handler as GET }