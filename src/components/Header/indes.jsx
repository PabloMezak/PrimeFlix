import { Link, Router } from 'react-router-dom'
import './styles.css'

 function Header() {
    return (
        <div>
          <header>
            
                <Link className='logo' to="/">PrimeFlix</Link>
                <Link className='favoritos' to="/favoritos">meus filmes</Link>
          </header>
        </div>
    )
}
export default Header;