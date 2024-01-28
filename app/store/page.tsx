import React from "react";
import { productsData } from "../constants/storeData";
import ProductCard from "../components/Product";

const ProductStore = () => {
	return (
		<main className="p-8 sm:p-16 md:py-8 md:px-32">
			<section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{productsData.map((store, index) => {
					return (
						<ProductCard
							price={store.price}
							description={store?.description}
							url={store?.image}
							title={store?.title}
							rating={store?.rating}
							id={index}
						/>
					);
				})}
			</section>
		</main>
	);
};

export default ProductStore;
