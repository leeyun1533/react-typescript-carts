import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import '../styles/Header.scss'





class Basket extends Component {
  render() {
    // const basketListLength = this.props.itemDataStore.basketList.length > 0 ? this.props.itemDataStore.basketList.length : ''
    return (
      <div className="header">
        <ul>
          <Link to="/">제품목록</Link>
          {/* <Link to="/basket">장바구니
                {
                    basketListLength ? (
                        <span className="badge">{basketListLength}</span>
                    ) : (
                        <span></span>
                    )
                }
            </Link> */}
        </ul>
      </div>
    );
  }
}

export default Basket;