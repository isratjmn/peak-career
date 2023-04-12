import { getAppliedList } from "../Utilities/FakeDb"

const showData = async () => {
	const loadedProducts = await fetch("/jobs.json");
	const products = await loadedProducts.json();
	

	// If cart Data is in Database, You have to use async await
	const storedAppliedList = getAppliedList();
	const savedCart = [];
	
	for (const id in storedAppliedList) {
		const addedProduct = products.find(pd => pd.id == id);
		if (addedProduct) {
			const quantity = storedAppliedList[id];
			addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
		}
	}

	return savedCart;
};

export default showData;


