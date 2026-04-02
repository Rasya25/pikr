import { getApps, initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}
const db = getFirestore(app);

const POST = async ({ request }) => {
  const data = await request.formData();
  const initials = data.get("initials");
  const question1 = data.get("question1");
  const question2 = data.get("question2");
  if (!initials || !question1 || !question2) {
    return new Response(
      JSON.stringify({
        message: "Semua kolom wajib diisi."
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
  try {
    const docRef = await addDoc(collection(db, "curhatan"), {
      initials,
      question1,
      question2,
      timestamp: /* @__PURE__ */ new Date()
    });
    console.log("Document written with ID: ", docRef.id);
    return new Response(
      JSON.stringify({
        message: "Curhat berhasil dikirim!"
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (e) {
    console.error("Error adding document: ", e);
    return new Response(
      JSON.stringify({
        message: "Gagal mengirim curhat."
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};

export { POST };
