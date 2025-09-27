import { Title, LogoImg, HeaderNav } from "./styles"
import Logo from '../../assets/NoCRY (transparente branco).png'

function Home(){
    return (
        <HeaderNav className="header">
            <nav className="navbar">
                <a href="#"><LogoImg src={Logo} alt="LOGO" title="NoCRY" className="Logo" /></a>
                <ul className="nav-list">
                    <li><a href="#">INÍCIO</a></li>
                    <li><a href="#">PRODUTOS</a></li>
                    <li><a href="#">QUEM SOMOS</a></li> 
                </ul>
            </nav>
        </HeaderNav>
    )
}

export default Home