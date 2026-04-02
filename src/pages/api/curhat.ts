import type { APIRoute } from 'astro';
import { db } from '../../firebase/config';
import { collection, addDoc } from "firebase/firestore"; 

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const initials = data.get('initials');
  const question1 = data.get('question1');
  const question2 = data.get('question2');

  if (!initials || !question1 || !question2) {
    return new Response(
      JSON.stringify({
        message: 'Semua kolom wajib diisi.',
      }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  try {
    const docRef = await addDoc(collection(db, "curhatan"), {
      initials: initials,
      question1: question1,
      question2: question2,
      timestamp: new Date()
    });
    console.log("Document written with ID: ", docRef.id);

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
  } catch (e) {
    console.error("Error adding document: ", e);
    return new Response(
      JSON.stringify({
        message: 'Gagal mengirim curhat.',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};