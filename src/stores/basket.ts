const SET_ITEM_DATA = 'itemAction/SET_ITEM_DATA' as const;
const ADD_TO_BASKET_DATA = 'itemAction/ADD_TO_BASKET_DATA' as const;
const REMOVE_BASKET_DATA = 'itemAction/REMOVE_BASKET_DATA' as const;
const REMOVE_ALL = 'itemAction/REMOVE_ALL' as const;

type ItemTypes = {
  _id: number
  imageUrl: string,
  age: number,
  name: string,
  gender: string,
  count: number,
}

export const setItemData = (list: Array<object>) => ({
  type: SET_ITEM_DATA,
  payload: list
});
export const addToBasketData = (basketData: ItemTypes) => ({ type: ADD_TO_BASKET_DATA, basketData: basketData });
export const removeBasketData = (id: number) => ({ type: REMOVE_BASKET_DATA, id });
export const removeAllBasketData = () => ({ type: REMOVE_ALL });

type ItemAction =
  | ReturnType<typeof setItemData>
  | ReturnType<typeof addToBasketData>
  | ReturnType<typeof removeBasketData>
  | ReturnType<typeof removeAllBasketData>;


type ItemState = {
  itemList: Array<ItemTypes>,
  basketList: Array<ItemTypes>
}

const initialState: ItemState = {
  itemList: [],
  basketList: []
}

export default function itemAction(state: ItemState = initialState, action: ItemAction) {
  switch (action.type) {
    case SET_ITEM_DATA:
      return { ...state, itemList: [...action.payload] };
    case ADD_TO_BASKET_DATA:
      const index = state.basketList.findIndex((item) => item._id === action.basketData._id)
      if (!index) {
        return {
          ...state,
          basketList: [...state.basketList, { ...state.basketList[index], count: 1 }]
        }
      } else {
        return {
          ...state,
          basketList: [...state.basketList, { ...state.basketList[index], count: state.basketList[index].count + 1 }]
        }
      }
    case REMOVE_BASKET_DATA:
      return {
        // list: [...state.itemList, action.payload]
      };
    case REMOVE_ALL:
      return {
        // list: [...state.itemList, action.payload]
      };
    default:
      return state;
  }
}









// import { observable, action } from 'mobx'
// import { id } from 'postcss-selector-parser';

// class ItemDataStore {
//   @observable itemList
//   @observable basketList

//   constructor() {
//     this.itemList = []
//     this.basketList = []
//   }

//   @action.bound
//   setItemData(data) {
//     data.forEach(item => item.count=0)
//     this.itemList = data
//   }

//   @action.bound
//   addToBasketData(data) {
//     const basket = this.basketList.find(item => item._id === data._id)
//     if(!basket) {
//         data.count = 1;
//         this.basketList.push(data)
//     } else {
//         basket.count++;
//     }
//   }

//   @action.bound
//   removeBasketData(id) {
//     const itemtoTake = this.basketList.find(item => item._id === id)
//     itemtoTake.count--;
//     if(itemtoTake.count === 0) {
//         this.basketList.remove(itemtoTake)
//     }
//   }
//   @action.bound
//   removeAllBasketData(id) {
//     this.basketList = []
//   }
// }

// export default ItemDataStore