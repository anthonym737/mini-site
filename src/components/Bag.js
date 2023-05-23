import { useEffect, useState } from "react"
import "../styles/Bag.css"

export const Bag = ({bag, updateBag}) => {
    const [isOpen, setIsOpen] = useState(true)
    const total = bag.reduce(
        (acc, articleType) => acc + articleType.amount * articleType.price, 0
    )

    useEffect(() => {
        document.title = `CG ${total}€ d'achats`
    }, [total])

    return isOpen ? (
        <div className="cg-bag">
            <button
                className="cg-bag-toggle-bottom"
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>
            {bag.length > 0 ? (
                <div>
                    <h2>Panier</h2>
                    <ul>
                        {bag.map(({ name, price, amount}, index) => (
                            <div key={`${name} - ${index}`}>
                                {name} {price}€ x {amount}
                            </div>
                        ))}
                    </ul>
                    <h3>Total : {total}€</h3>
                    <button onClick={() => updateBag([])}>Vider le panier</button>
                </div>
            ) : (
                <div>Panier vide</div>
            )}
        </div>
    ) : (
        <div className="cg-bag-closed">
            <button
                className="cg-bag-toggle-button"
                onClick={() => setIsOpen(true)}
            >
                Ouvrir sac
            </button>
        </div>
    )
}