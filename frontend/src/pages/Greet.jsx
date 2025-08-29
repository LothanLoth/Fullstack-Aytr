import "../assets/styles/style.css";
import Base, { Input,MainText } from "../components/page_templates/body.js";

function Greet() {
  return (
    // <Main text={"Olá! Qual seu nome?"}>
    // </Main>

    <Base>
      <MainText>Olá! Qual seu nome?</MainText>
      <Input text="Enviar" />
    </Base>
  );
}

export default Greet;
