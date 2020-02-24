import React, { useEffect } from 'react';
import axios from 'axios';
import Item from '../components/Item'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../stores';
import { setItemData } from '../stores/basket';

import '../styles/ItemList.scss'



const List = () => {
    const list = useSelector((state: RootState) => state.basket.itemList);
    const dispatch = useDispatch();
    const getList = async () => {
        const apiUrl = 'dummy-data/cats.json';

        const { data } = await axios.get(apiUrl)
        dispatch(setItemData(data))
        console.log(list)
    }
    useEffect(() => {
        getList()
    }, [])
    return (
        <div className="item-list-container">
            <div>
                {
                    list.map(item => <Item key={item._id} item={item}></Item>)
                }
            </div>

        </div >
    );
}

export default List;