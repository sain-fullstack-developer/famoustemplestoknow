import React from "react";
import Image from "next/image";
import Link from "next/link";
import { metroCitiestemplesData } from "@/app/constants/metroCitiestemplesData";

export const generateMetadata = ({ params }: any) => {
	const index = parseInt(params.id);

	const { templeName, Description } = metroCitiestemplesData[index];

	return {
		templeName,
		Description,
	};
};

const FamousIndianTempleDetails = ({ params }: any) => {
	const index = parseInt(params.id);

	const {
		templeName,
		Description,
		Location,
		DistanceFromChennai,
		DistanceFromKolkata,
		DistanceFromMumbai,
		DistanceFromNewDelhi,
	} = metroCitiestemplesData[index];
	return (
		<main className="min-h-screen p-8 sm:p-16 lg:p-20 grid lg:grid-cols-custom1 gap-6 relative">
			<Link href="/" className="absolute right-4 sm:right-10 top-4">
				<div className="w-6 h-6 sm:w-10 sm:h-10 bg-gray-300/80 rounded-full grid place-items-center">
					<div className="h-2 w-2 sm:h-4 sm:w-4 bg-none border-2 border-black border-r-0 border-b-0 -rotate-45 cursor-pointer"></div>
				</div>{" "}
			</Link>
			<section className="pb-6">
				<div className="max-w-3xl pb-6">
					<h1 className="text-3xl sm:text-5xl">{templeName}</h1>
				</div>
				<div className="max-w-3xl">
					<p className="text-lg pb-4">{Description}</p>
					<p className="text-lg pb-4">
						<b>Place : </b>
						{Location}
					</p>
					<p className="pb-4">
						<b>DistanceFromChennai : </b>
						{DistanceFromChennai}
					</p>
					<p className="pb-4">
						<b>DistanceFromKolkata : </b>
						{DistanceFromKolkata}
					</p>
					<p className="pb-4">
						<b>DistanceFromMumbai : </b>
						{DistanceFromMumbai}
					</p>
					<p>
						<b>DistanceFromNewDelhi : </b>
						{DistanceFromNewDelhi}
					</p>
				</div>
			</section>
			<section>
				<h2 className="font-semibold text-2xl pb-6 lg:pb-4">
					List of Indian Temples
				</h2>
				<div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-none gap-4">
					{metroCitiestemplesData.slice(0, 7)?.map((list, i) => {
						if (i !== index) {
							return (
								<Link
									key={i}
									href={`/${i}/${list.templeName
										.toLocaleLowerCase()
										.replace(/[\s -|,]+/g, "-")}`}>
									<div className="pb-2 animate-slide-up">
										<h2 className="font-semibold text-base sm:text-lg underline">
											{list?.templeName}
										</h2>
									</div>
								</Link>
							);
						}
					})}
				</div>
			</section>
		</main>
	);
};

export default FamousIndianTempleDetails;
