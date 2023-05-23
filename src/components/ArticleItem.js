import NoteItem from "./NoteItem"
import '../styles/ArticleItem.css'

const handleClick = (articleName) => {
    alert(`Vous avez acheté 1 ${articleName}`)
}

function ArticleItem({cover, name, price, fire }) 
{
    return (
        <li className='article-item' onClick={() => handleClick(name)}>
            <span className='article-item-price'>{price}€</span>
            <img className="article-item-cover" src={cover} alt={`${name} cover`}/>
            {name}
            <div>
                <NoteItem echelleType='fire' echelleValeur={fire}/>
            </div>
        </li>
    )
}

export default ArticleItem

