import { useState } from "react"
import { itemList } from "../datas/listItems"
import  ArticleItem  from "./ArticleItem"
import Categories from "./Categories"
import "../styles/ItemList.css"

function ItemList({ bag, updateBag })
{
    const [activeCategory, setActiveCategory] = useState('')
    const categories = itemList.reduce(
        (acc, elem) => 
            acc.includes(elem.categorie) ? acc : acc.concat(elem.categorie), 
        []
    )

    function ajouterAuSac(name, price) {
        const articleActuel = bag.find((article) => article.name === name)
        if (articleActuel) {
            const  bagFilteredCurrentPlant = bag.filter(
                (article) => article.name !== name
            )
            updateBag([
                ...bagFilteredCurrentPlant,
                {name,price,amount: articleActuel.amount + 1}
            ])
        } else {
            updateBag([...bag,{ name, price, amount: 1}])
        }
    }
    return (
        <div className="cg-liste-courses">
            <Categories
                categories={categories}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}

            />
            <ul className="cg-liste-articles">
                {itemList.map(({ id,name,categorie,price,fire,cover,date }) => 
                !activeCategory || activeCategory === categorie ? (
                    <div key={id}>
                        <ArticleItem
                            cover={cover}
                            name={name}
                            price={price}
                            fire={fire}
                            date={date}
                        />
                        <button onClick={() => ajouterAuSac(name,price)}>Ajouter</button>
                    </div>
                ) : null
                )}
            </ul>
        </div>
    )
}

export default ItemList