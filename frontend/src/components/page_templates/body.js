import { Link } from "react-router";
import "../../assets/styles/style.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

// function Main({ text, children }) {
//   return (
//     <div className="b1">
//       <main className="main1">
//         <div className="d1">
//           <h2 className="texto__principal">{text}</h2>
//           {children}
//         </div>
//       </main>
//     </div>
//   )
// }

function Header() {
  const header_links = [
    { name: "Greet", url: "/greet" },
    { name: "Clear", url: "/clear" },
    { name: "Recent", url: "/recent" },
  ];
  return (
    <div className="container__header">
      <ul className="container__header_ul">
        {header_links.map((link, index) => (
          <li key={index} className="container__header_li">
            <Link to={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Main({ text, children }) {
  return (
    <main className="container__main">
      <div className="container__main_div-center">{children}</div>
    </main>
  );
}

function MainText({ children }) {
  return (
    <div>
      <h2 className="text__principal">{children}</h2>
    </div>
  );
}

function ReturnText({ children }) {
  return (
    <div>
      <p className="text__secundario">{children}</p>
    </div>
  );
}

function Base({ children }) {
  return (
    <div className="container__body">
      <Header />
      <Main>{children}</Main>
    </div>
  );
}

function ListaNomes() {
  const [names, setNames] = useState([]);
  useEffect(() => {
    const listarNomes = async () => {
      try {
        const res = await axios.get("http://localhost:8000/recent");
        setNames(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    listarNomes();
  }, []);

  return (
    <ul>
      {names.map((name, i) => (
        <li key={i}><ReturnText>{name}</ReturnText></li>
        // 
      ))}
    </ul>
  );
}

function Botao({ page, children, script }) {
  return (
    <Link to={page}>
      <button className="button__effect" onClick={script}>
        {children}
      </button>
    </Link>
  );
}

function Footer({ l1, t1, l2, t2 }) {
  return (
    <div className="d2">
      <Botao page={l1}>{t1}</Botao>
      <Botao page={"/"}>Voltar</Botao>
      <Botao page={l2}>{t2}</Botao>
    </div>
  );
}

function ClearButton({ page, children }) {
  const [response, setResponse] = useState("...");

  const handleClear = async () => {
    try {
      await axios.post("http://localhost:8000/clear");
      setResponse("Dados apagados!");
    } catch (err) {
      console.error(err);
      setResponse("Erro ao apagar os dados.");
    }
  };
  return (
    <div className="container__clear">
      <Link to={page}>
        <button className="button__effect" onClick={handleClear}>
          {children}
        </button>
      </Link>
      <ReturnText>{response}</ReturnText>
    </div>
  );
}

function Input({ text }) {
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:8000/greet", { name });
      setResponse(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container__greet">
        <input
          type="text"
          name="nome_input"
          id=""
          className="inputGroup"
          placeholder="Escreva seu nome aqui"
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="button__clear button__effect"
        >
          {text}
        </button>
        <ReturnText>...{response}</ReturnText>
    </div>
  );
}

export default Base;
export { ListaNomes, Botao, Input, ClearButton, Footer, MainText };
