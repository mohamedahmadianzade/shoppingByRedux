import { createSlice } from '@reduxjs/toolkit'
import { remove } from 'lodash'


const totalProductCount = (state) => {
    let count = 0;
    state.productList.map(item => count += item.count)
    return count
}
const ShoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState: {
        productList: [],
        count: 0
    },
    reducers: {
        add: (state, { payload }) => {
            let index = state.productList.findIndex(item => item.id == payload.id)
            if (index == -1)
                state.productList.push({ id: payload.id, count: 1 })
            else
                state.productList[index].count++
            state.count = totalProductCount(state)
        },
        remove: (state, { payload }) => {
            let index = state.productList.findIndex(item => item.id == payload.id)
            console.log(index);
            if (index != -1) {
                if (state.productList[index].count == 1)
                    state.productList.splice(index, 1)
                else
                    state.productList[index].count--

                state.count = totalProductCount(state)
            }
        }
    }
})
export default ShoppingCartSlice