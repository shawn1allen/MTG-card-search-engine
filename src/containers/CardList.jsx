import CardContainer from "../components/CardContainer"
import "./CardList.css"

const CardList = ({ cardData }) => {


    return (
        <div className="card-list">
            {cardData.map((card) => <CardContainer key={card.id} card={card} />)}
        </div>
    )
}

export default CardList;