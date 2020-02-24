import React from 'react';
import { Link } from 'react-router-dom'

import '../styles/Header.scss'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../stores';


const Header = () => {
  const basketListLength = useSelector((state: RootState) => state.basket.basketList.length);

  return (
    <div className="header">
      <ul>
        <Link to="/">제품목록</Link>
        <Link to="/basket">장바구니
            {
            basketListLength ? (
              <span className="badge">{basketListLength}</span>
            ) : (
                <span></span>
              )
          }
        </Link>
      </ul>
    </div>
  );
}

export default Header;
