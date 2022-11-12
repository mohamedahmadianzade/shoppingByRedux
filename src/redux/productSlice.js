import { createSlice } from '@reduxjs/toolkit'
const calcCount = (state) => {
    let itemCount = 0, productCount = 0;
    state.counterList.map(item => {
        if (item.value > 0) {
            itemCount += item.value
        }
    })
    state.itemCount = itemCount
    state.productCount = state.counterList.length

}
const getMaximumId = (state) => {
    let max = 0;
    state.counterList.map(item => {
        if (item.id > max) max = item.id
    })
    return ++max
}
const CounterSlice = createSlice({
    name: 'product',
    initialState: {
        productList: [{
            productId: 1, productName: "product1", value: 0, price: 1200, image: "https://d1hjkbq40fs2x4.cloudfront.net/2016-07-16/files/cat-sample_1313.jpg"
        }],
        itemCount: 0,
        productCount: 0,

    },
    reducers: {
        add: (state) => {
            let maxId = getMaximumId(state)
            state.productList.push({ productId: maxId, product: `name(${maxId})`, value: 0 })
            calcCount(state)
        },
        del: (state, action) => {
            state.productList = state.productList.filter(item => item.productId != action.payload.productId)
            calcCount(state)

        },
        inc: (state, action) => {
            state.productList.map(item => {
                if (item.productId == action.payload.productId)
                    item.value++;
            })
            calcCount(state)
        },
        dec: (state, action) => {
            state.productList.map(item => {
                if (item.productId == action.payload.productId)
                    item.value--;
            })
            calcCount(state)
        },
        reset: state => {
            state.productList.map(item => {
                item.value = 0;
            })
            state.count = 0
        }
    }
})

export default CounterSlice