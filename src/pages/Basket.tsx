import React, { Component } from 'react';

import Item from '../components/Item'

import '../styles/ItemList.scss'


class Basket extends Component {
  componentDidMount() {

  }
  clickBuyButton = () => {
    // this.props.itemDataStore.removeAllBasketData()
    alert('결제가 완료되었습니다.')
  }

  render() {
    // const {pathname} = this.props.location

    //   const list = this.props.itemDataStore.basketList.map(item => {
    //     return (<Item key={item._id} item={item} pathname={pathname}></Item>)
    //   })
    return (
      <div className="item-list-container">
        {/* {
                  list.length ? (
                    <div>{list}</div>
                  ) : (
                    <div>
                      <span>장바구니가 비어있습니다.</span>
                    </div>
                  )
                } */}
        <button className="buy-button" onClick={() => this.clickBuyButton()}>구매</button>
      </div>
    );
  }
}

export default Basket;