// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCYSb0BIEuNcsx-UMsXMZMYTX4g8fQk6Gw",
  authDomain: "kyra-login.firebaseapp.com",
  projectId: "kyra-login",
  storageBucket: "kyra-login.appspot.com",
  messagingSenderId: "622487610554",
  appId: "1:622487610554:web:ed548339d54c77b9918e83"
};

firebase.initializeApp(firebaseConfig);

// register.js
document.getElementById('register-btn').addEventListener('click', (event) => {
  event.preventDefault();
  const email = document.getElementById('email-register').value;
  const password = document.getElementById('password-register').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Registration successful
      console.log('Registration successful:', userCredential.user);
      alert('Registration successful!');
    })
    .catch((error) => {
      // Handle registration error
      console.error('Registration error:', error);
      alert('Registration failed: ' + error.message);
    });
});

