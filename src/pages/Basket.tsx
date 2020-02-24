import React, { useEffect } from 'react';

import Item from '../components/Item'

import '../styles/ItemList.scss'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../stores';
import { removeAllBasketData } from '../stores/basket';

const Basket = () => {
  const dispatch = useDispatch();
  const list = useSelector((state: RootState) => state.basket.basketList);

  const clickBuyButton = () => {
    dispatch(removeAllBasketData())
    alert('결제가 완료되었습니다.')
  }
  return (
    <div className="item-list-container">
      {
        list.length ? (
          <div>{
            list.map(item => <Item key={item._id} {...item}></Item>)
          }</div>
        ) : (
            <div>
              <span>장바구니가 비어있습니다.</span>
            </div>
          )
      }
      <button className="buy-button" onClick={() => clickBuyButton()}>구매</button>
    </div>
  );
}

export default Basket;
