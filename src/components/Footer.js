import { useState } from "react"
import '../styles/Footer.css'

export const Footer = () => {
    const [inputValue, setInputValue] = useState('');

    function handleInput(e) {
        setInputValue(e.target.value)
    }

    function handleBlur() {
        if(!inputValue.includes('@')) {
            alert("Adresse invalide, pas de @")
        }
    }

    return (
        <footer className="cg-footer">
            <div className="cg-footer-elem">
                Vous aimez nos services
            </div>
            <div className="footer-elem">Laissez votre mail:</div>
            <input
                placeholder="anthony.morand@gmail.com"
                onChange={handleInput}
                value={inputValue}
                onBlur={handleBlur}
            />
        </footer>
    )
}
