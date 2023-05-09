import './CardContainer.css'

const CardContainer = ({ card }) => {
    
    return (
        <div>
            <img className="card-image" src={card.imageUrl}></img>
        </div>
    )
}

export default CardContainer;