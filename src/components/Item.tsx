import React, { Component } from 'react';

import '../styles/Item.scss'


class Item extends Component {
  static defaultProps = {
    item: {
      _id: 'sca',
      imageUrl: 'https://loremflickr.com/320/240?cat=0',
      age: '2',
      name: '까미',
      gender: '',
      count: 0
    }
  }
  clickAddButton = (item: any) => {
    // this.props.itemDataStore.addToBasketData(item)
  }
  clickRemoveButton = (id: number) => {
    console.log('clickRemove')
    // this.props.itemDataStore.removeBasketData(id)
  }

  render() {
    // const {
    //   _id,
    //   imageUrl,
    //   age,
    //   name,
    //   gender,
    //   count
    // } = this.props.item;
    // const pathname = this.props.pathname;
    return (

      <div className="item-container">
        <div className="item-detail">
          {/* <div className="item-detail-header" style={{ backgroundImage: `url(${imageUrl})` }}> */}
          {/* </div> */}
          <div className="item-detail-body">
            {/* <p className="item-detail-name">{name}</p>
            <p className="item-detail-age">{age}살입니다.</p> */}
            {/* {
              pathname === '/' ? (
                <button className="item-delete-button" onClick={() => this.clickAddButton(this.props.item)}>장바구니에 추가</button>
              ) : (
                  <div>
                    <p>{count}마리</p>
                    <button className="item-delete-button" onClick={() => this.clickAddButton(this.props.item)}>+</button>
                    <button className="item-delete-button" onClick={() => this.clickRemoveButton(_id)}>-</button>
                  </div>
                )
            } */}
          </div>
        </div>
      </div >
    );
  }
}

export default Item;