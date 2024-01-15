import Head from "next/head";
import { richestTemplesData } from "../constants/richestTemplesData";
import { RichestTemplesDescription, RichestTemplesTitle } from "../constants";

export const generateMetadata = () => {
	return {
		title: RichestTemplesTitle,
		description: RichestTemplesDescription,
	};
};

export default function IndianRichestTemples() {
	return (
		<main className="p-8 sm:px-16 lg:px-32 lg:p-0">
			<h1 className="text-2xl sm:text-4xl font-bold text-center my-8">
				{RichestTemplesTitle}
			</h1>

			<ul className="grid gap-12 pb-12">
				{richestTemplesData.map((temple, index) => (
					<li
						key={index}
						className="bg-white rounded-lg shadow-md p-8 sm:px-12 sm:py-8">
						<h2 className="text-xl sm:text-2xl font-bold sm:text-center text-black pb-2">
							{temple.temple_name}
						</h2>
						<p className="text-green-500 font-semibold py-2 text-lg">
							Worth:&nbsp;
							{temple.worth}
						</p>
						<p className="text-gray-600 py-2 text-lg">{temple.description}</p>
						<p className="py-2 text-gray-500 text-lg">
							<b>Importance:</b>&nbsp;
							{temple.importance}
						</p>
					</li>
				))}
			</ul>
		</main>
	);
}
