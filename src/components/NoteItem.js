import Fire from "../assets/fire.svg"
import '../styles/ArticleItem.css'

const avisChoix = 
{
    1: "Une honte",
    2: "Ce jeu craint",
    3: "Ca va, ce jeu est cool",
    4: "Excellent jeu",
    5: "Parfait"
}

function NoteItem({echelleValeur, echelleType}) 
{
    const rang = [1,2,3,4,5]
    const echelleRep = 
        echelleType === 
            'fire' && <img src={Fire} alt="fire-icon"/>

    return (
        <div
            onClick={() => 
                alert( 
                    `Cette article à une note de ${avisChoix[echelleValeur]} 
                        ${echelleRep === 'fire'
                    }`
                )
            }
        >
            {rang.map((rangElem) => 
                echelleValeur >= rangElem ? (
                    <span key={rangElem.toString()}>{echelleRep}</span>
                ) : null 
            )}
        </div>
    )
}

export default NoteItem