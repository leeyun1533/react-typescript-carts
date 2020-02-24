import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../stores';
import { addToBasketData, removeBasketData } from '../stores/basket';
import '../styles/Item.scss'


type ItemProps = {
  item: object,
}


const Item = (item: any) => {
  const pathname = window.location.pathname
  const dispatch = useDispatch();

  const clickAddButton = (item: any) => {
    dispatch(addToBasketData(item))
  }
  const clickRemoveButton = (id: number) => {
    dispatch(removeBasketData(id))
  }
  return (
    <div className="item-container">
      <div className="item-detail">
        <div className="item-detail-header" style={{ backgroundImage: `url(${item.imageUrl})` }}>
        </div>
        <div className="item-detail-body">
          <p className="item-detail-name">{item.name}</p>
          <p className="item-detail-age">{item.age}살입니다.</p>
          {
            pathname === '/' ? (
              <button className="item-delete-button" onClick={() => clickAddButton(item)}>장바구니에 추가</button>
            ) : (
                <div className="item-detail-bottom">
                  <p>{item.count}마리</p>
                  <div>
                    <button className="item-delete-button" onClick={() => clickAddButton(item)}>+</button>
                    <button className="item-delete-button" onClick={() => clickRemoveButton(item._id)}>-</button>
                  </div>
                </div>
              )
          }
        </div>
      </div>
    </div >
  );
}

export default Item;

