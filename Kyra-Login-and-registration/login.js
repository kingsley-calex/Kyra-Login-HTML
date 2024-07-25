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

// login.js
document.getElementById('login-btn').addEventListener('click', (event) => {
  event.preventDefault();
  const email = document.getElementById('email-login').value;
  const password = document.getElementById('password-login').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Login successful
      console.log('Login successful:', userCredential.user);
      alert('Login successful!');
    })
    .catch((error) => {
      // Handle login error
      console.error('Login error:', error);
      alert('Login failed: ' + error.message);
    });
});


  