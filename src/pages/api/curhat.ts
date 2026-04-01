import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const initials = data.get('initials');
  const question1 = data.get('question1');
  const question2 = data.get('question2');

  // For this example, we'll just log it to the console.
  console.log({
    initials,
    question1,
    question2,
  });

  return new Response(
    JSON.stringify({
      message: 'Curhat berhasil dikirim!',
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};