import { Title, LogoImg } from "./styles"
import Logo from '../../assets/NoCRY (transparente branco).png'

function Home(){
    return (
        <div>
            <LogoImg src={Logo} alt="LOGO" title="NoCRY" className="Logo" />
            
        </div>
    )
}

export default Home