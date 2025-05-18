import { auth } from './firebase.js';
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

window.logout = function () {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("username").textContent = user.email;
    document.getElementById("saldo").textContent = "100";
  } else {
    window.location.href = "index.html";
  }
});

window.assistirAnuncio = function () {
  alert("Anúncio assistido! +10 pontos");
};