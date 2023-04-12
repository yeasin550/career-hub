// use local storage to manage cart data
const addToDb = id => {
  let shoppingCart = {}

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem('jobs')
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart)
  }
  // const quantity = shoppingCart[id]
  shoppingCart[id] = 1
  localStorage.setItem('jobs', JSON.stringify(shoppingCart))

  // add quantity
  // if (quantity) {
  //   const newQuantity = quantity + 1
  //   shoppingCart[id] = newQuantity
  // } else {
  // }
}

const getStoredCart = () => {
  let shoppingCart = {}

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem('jobs')
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart)
  }
  return shoppingCart
}

const removeFromDb = id => {
  const storedCart = localStorage.getItem('shopping-cart')
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart)
    if (id in shoppingCart) {
      delete shoppingCart[id]
      localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
    }
  }
}

const deleteShoppingCart = () => {
  localStorage.removeItem('shopping-cart')
}

export { addToDb, getStoredCart, removeFromDb, deleteShoppingCart }
