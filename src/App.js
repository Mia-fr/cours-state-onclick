import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  // Ces 4 states sont relié aux input correspondants
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");

  // State qui gère l'affichage ou non d'un message d'erreur à côté de mon bouton submit
  const [showError, setShowError] = useState(false);

  // Fonction déclenchée lors de la soumission du formulaire

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password.length > 8 && password === passwordConf) {
      setShowError(false);
      console.log("ok");
      return;
    } else {
      setShowError(true);
      return alert(
        "Votre mot de passe doit faire plus de 8 caractères et identique dans les deux champs!"
      );
    }
  };

  return (
    <>
      <h1>Create account</h1>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <p>Name</p>

        <input
          value={name}
          type="text"
          placeholder="Jean Dupont"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <p>Email</p>

        <input
          value={email}
          type="email"
          name="email"
          placeholder="jeandupont@lereacteur.io"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <p>Password</p>

        <input
          value={password}
          type="password"
          name="password"
          placeholder="Your Secret Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        ></input>

        <p>Confirm your password</p>

        <input
          value={passwordConf}
          type="password"
          name="password"
          placeholder="Your Secret Password to confirm"
          onChange={(event) => {
            setPasswordConf(event.target.value);
          }}
        />
        <br></br>
        <button type="submit">Register</button>
      </form>
      {showError === true && (
        <p style={{ color: "red" }}>
          Votre mot de passe doit faire plus de 8 caractères
        </p>
      )}
      <Footer />
    </>
  );
}
export default App;
