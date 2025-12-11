import React, { useState, useEffect } from "react";
import "./index.css";

/**
 * Example typed props for a Badge component.
 * Replace with the actual props/logic from your original App.js.
 */
type BadgeProps = {
  title: string;
  name?: string;
  issuer?: string;
  date?: string;
};

const Badge: React.FC<BadgeProps> = ({ title, name, issuer, date }) => {
  return (
    <div className="badge">
      <div className="badge-header">
        <h2>{title}</h2>
      </div>
      <div className="badge-body">
        {name && <p className="badge-name">{name}</p>}
        {issuer && <p className="badge-issuer">Issued by: {issuer}</p>}
        {date && <p className="badge-date">Date: {date}</p>}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  // Example local state typed explicitly
  const [name, setName] = useState<string>("");
  const [title, setTitle] = useState<string>("Digital Badge");
  const [issuer] = useState<string>("Example Issuer");
  const [issuedDate] = useState<string>(new Date().toLocaleDateString());

  useEffect(() => {
    // If your original App fetched or computed data, port logic here.
    // Example: pre-fill name from localStorage
    const saved = localStorage.getItem("badge_name");
    if (saved) setName(saved);
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    localStorage.setItem("badge_name", e.target.value);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>{title}</h1>
      </header>

      <main>
        <label htmlFor="name">Recipient name</label>
        <input id="name" value={name} onChange={handleNameChange} />

        <section style={{ marginTop: 20 }}>
          <Badge title={title} name={name} issuer={issuer} date={issuedDate} />
        </section>
      </main>
    </div>
  );
};

export default App;
