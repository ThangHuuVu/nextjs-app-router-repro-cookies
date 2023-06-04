import { cookies } from "next/headers";

const handler = async (_: Request) => {
  cookies().set({ name: "custom_cookie", value: "1" });

  return new Response(`the cookie secure_2 won't have HttpOnly nor Secure after using cookies().set() for custom_cookie on line 4`, {
    status: 200,
    headers: { 'Set-Cookie': `secure_2=true; Secure; HttpOnly` },
  });
};

export { handler as GET }