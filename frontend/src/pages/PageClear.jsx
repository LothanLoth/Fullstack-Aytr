import "../assets/styles/style.css";

import Base, {
  ClearButton,
  MainText,
} from "../components/page_templates/body.js";

function PageClear() {
  return (
    <Base>
      <MainText>Deseja Apagar os dados?</MainText>
      <ClearButton> Apagar </ClearButton>
    </Base>
  );
}

export default PageClear;
