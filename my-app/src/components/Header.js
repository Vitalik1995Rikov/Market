import { Link } from 'react-router-dom';
import CartBlock from './CartBlock';

function Header() {
  return (
    <div className="flex">
      <div>
        <Link to="/">Game Store</Link>
      </div>
      <div>
        <CartBlock />
      </div>
    </div>
  );
}

export default Header;
