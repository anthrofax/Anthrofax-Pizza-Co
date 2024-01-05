import { Link } from "react-router-dom"
import SearchOrder from "../features/order/searchOrder.jsx"

function Header() {
    return (
      <header>
            <Link to="/">Anthrofax Pizza Co.</Link>
            <SearchOrder/>
            <p>Afridho</p>
      </header>
    )
}

export default Header
