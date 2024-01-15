import React from "react";
import { SlokasDescription, SlokasTitle } from "../constants";
import HinduSlokas from "../components/HinduSloka";

export const generateMetadata = () => {
	return {
		title: SlokasTitle,
		description: SlokasDescription,
	};
};

const Slokas = () => {
	return (
		<main className="p-8 sm:p-16 md:py-8 md:px-32">
			<section className="text-center pb-12">
				<h1 className="text-3xl font-semibold pb-4">Welcome to Hindu Slokas</h1>
				<p className="text-lg pb-8">
					Explore a collection of powerful Hindu slokas for spiritual well-being
					and inspiration.
				</p>
			</section>
			<section>
				<HinduSlokas />
			</section>
		</main>
	);
};

export default Slokas;
