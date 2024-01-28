import { productsData } from "@/app/constants/storeData";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import React from "react";

const Product = ({ params }: any) => {
	const { id } = params;
	const {
		image,
		title,
		price,
		rating,
		description,
		ratings_count,
		affiliateLink,
	} = productsData[id];

	return (
		<main className="p-8 md:py-8 md:px-32 grid md:grid-cols-2 gap-4">
			<Link href={affiliateLink}>
				<Image
					className="rounded-2xl"
					src={image}
					height={800}
					width={800}
					alt="Product-Img"
				/>
			</Link>
			<div className="px-6 md:px-12">
				<h1 className="font-semibold pb-2 text-xl sm:text-2xl">
					{title}
					&nbsp;
					<Link
						href={affiliateLink}
						className="bg-green-500 rounded-lg p-2 uppercase text-xs tracking-widest">
						Purchase
					</Link>
				</h1>
				<p className="font-bold text-xl pb-2">Price: {price}</p>
				<p className="font-semibold pb-2">Rating: {rating}</p>
				<p className="font-semibold pb-2">{ratings_count} ratings</p>
				<p className="font-bold py-2">About this item</p>
				<div
					className="font-medium"
					dangerouslySetInnerHTML={{ __html: description }}></div>
			</div>
		</main>
	);
};

export default Product;
