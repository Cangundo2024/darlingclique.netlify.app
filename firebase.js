import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD3voRUhhaJUSiYUc7WnsN8iMXsNn84UNM",
  authDomain: "darling-clica-e-ganha.firebaseapp.com",
  projectId: "darling-clica-e-ganha",
  storageBucket: "darling-clica-e-ganha.firebasestorage.app",
  messagingSenderId: "993176761999",
  appId: "1:993176761999:web:d6a10be0f2e4f42237e2fa",
  measurementId: "G-64JM6D3QS2"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);