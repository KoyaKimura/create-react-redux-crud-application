//Reducerでも使うため定義してexportしておく
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"

//INCREMENT側のAction
export const increment = () => ({
  type: INCREMENT
})

//DECREMENT側のAction
export const decrement = () => ({
  type: DECREMENT
})