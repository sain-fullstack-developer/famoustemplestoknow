import Image from "next/image";
import Link from "next/link";
import React from "react";

type productProps = {
	url: string;
	title: string;
	price: string;
	rating: string;

	description: string;
	id: number;
};

const ProductCard = (props: productProps) => {
	const { url, title, price, rating, description, id } = props;
	return (
		<Link href={`/store/${id}`}>
			<div className="h-full rounded-lg bg-white dark:bg-white/40 shadow-xl p-2">
				<div className="w-full h-64 relative">
					<Image
						className="rounded-xl"
						src={url}
						alt="product-pic"
						layout="fill"
					/>
				</div>
				<div className="py-4">
					<h2 className="font-semibold mb-2 line-clamp-3 overflow-hidden underline text-lg">
						{title}
					</h2>
					<p className="font-bold text-xl pb-2">Price: {price}</p>
					<p className="font-semibold pb-2">Rating: {rating}</p>
					<div
						className="line-clamp-4 overflow-hidden font-medium"
						dangerouslySetInnerHTML={{ __html: description }}></div>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
