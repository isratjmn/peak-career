// use local storage to manage cart data
const addToDb = (id) => {
	let applyCart = {};


	const storedCart = localStorage.getItem("Applied-Cart");
	if (storedCart) {
		applyCart = JSON.parse(storedCart);
	}


	const quantity = applyCart[id];
	if (quantity) {
		const newQuantity = quantity + 1;
		applyCart[id] = newQuantity;
	} else {
		applyCart[id] = 1;
	}
	localStorage.setItem("Applied-Cart", JSON.stringify(applyCart));
};

const getStoredCart = () => {
	let shoppingCart = {};

	//get the shopping cart from local storage
	const storedCart = localStorage.getItem("shopping-cart");
	if (storedCart) {
		shoppingCart = JSON.parse(storedCart);
	}
	return shoppingCart;
};

const removeFromDb = (id) => {
	const storedCart = localStorage.getItem("shopping-cart");
	if (storedCart) {
		const shoppingCart = JSON.parse(storedCart);
		if (id in shoppingCart) {
			delete shoppingCart[id];
			localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
		}
	}
};

const deleteShoppingCart = () => {
	localStorage.removeItem("shopping-cart");
};

export { addToDb, getStoredCart, removeFromDb, deleteShoppingCart };
