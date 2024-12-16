import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import ContactHeader from "./components/ContactHeader";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <div className="container">
        <Navigation></Navigation>
        <ContactHeader></ContactHeader>
        <ContactForm></ContactForm>
      </div>
    </>
  );
}

export default App;
