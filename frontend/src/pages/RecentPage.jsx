import "../assets/styles/style.css"
import Base, { ListaNomes, MainText } from "../components/page_templates/body.js"

const nomes = []

function RecentPage() {
  return (
    <Base>
    <MainText>Acessos recentes:</MainText>
    
      <ListaNomes nomes={nomes} />

    </Base>
  )
}

export default RecentPage
