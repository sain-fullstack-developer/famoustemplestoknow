import React from "react";
import Image from "next/image";
import Link from "next/link";
import { famousTemplesListTS } from "@/app/constants/data";

export const generateMetadata = ({ params }: any) => {
	const index = parseInt(params.id);

	const { title, text } = famousTemplesListTS[index];
	return {
		title,
		description: text,
	};
};

const TempleDetailsPage = ({ params }: any) => {
	console.log(params);
	const index = parseInt(params.id);

	const { imageUrl, title, text, place, timing } = famousTemplesListTS[index];
	return (
		<main className="min-h-screen p-8 sm:p-16 lg:p-20 grid lg:grid-cols-custom1 gap-6 relative">
			<Link href="/" className="absolute right-4 sm:right-10 top-4">
				<div className="w-6 h-6 sm:w-10 sm:h-10 bg-gray-300/80 rounded-full grid place-items-center">
					<div className="h-2 w-2 sm:h-4 sm:w-4 bg-none border-2 border-black border-r-0 border-b-0 -rotate-45 cursor-pointer"></div>
				</div>{" "}
			</Link>
			<section className="pb-6">
				<div className="max-w-3xl pb-12">
					<h1 className="text-3xl sm:text-5xl pb-12">{title}</h1>
					{imageUrl && imageUrl !== "" ? (
						<Image
							src={imageUrl}
							alt="temple-reference"
							height={512}
							width={780}
							priority
							className="rounded-xl shadow-xl home-heading-animate"
						/>
					) : (
						<Image
							src="/temple1.jpg"
							alt="temples"
							height={512}
							width={780}
							className="rounded-xl"
						/>
					)}
				</div>
				<div className="max-w-3xl">
					<p className="text-lg pb-4">{text}</p>
					<p className="text-lg pb-4">
						<b>Place : </b>
						{place}
					</p>
					<p>
						<b>Timings : {timing}</b>
					</p>
				</div>
			</section>
			<section>
				<h2 className="font-semibold text-2xl pb-6 lg:pb-4">
					List of Telangana Temples
				</h2>
				<div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-none gap-4">
					{famousTemplesListTS.slice(0, 7)?.map((list, i) => {
						if (i !== index) {
							return (
								<Link
									key={i}
									href={`/${i}/${list.title
										.toLocaleLowerCase()
										.replace(/[\s -]+/g, "-")}`}>
									<div className="pb-2 animate-slide-up">
										{list.imageUrl && list.imageUrl !== "" ? (
											<Image
												src={list.imageUrl}
												alt="temples"
												width={200}
												height={200}
												className="rounded-xl"
											/>
										) : (
											<Image
												src="/temple1.jpg"
												alt="temples"
												width={200}
												height={200}
												className="rounded-xl"
											/>
										)}
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

export default TempleDetailsPage;
