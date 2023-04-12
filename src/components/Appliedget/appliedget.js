
import { getStoredCart } from "../utils/fakeDB";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('/jobs.json');
    const products = await loadedProducts.json();
    
    const storedCart = getStoredCart();
    const savedCart = [];
    
    for (const id in storedCart) {
        
        const addedProduct = products.find(pd => pd.id === parseInt(id));
        if (addedProduct) {
            savedCart.push(addedProduct);
        }
    }
    return savedCart;
}

export default cartProductsLoader;

