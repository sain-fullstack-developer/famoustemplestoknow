import Image from "next/image";
import React from "react";
import BhagavadgeethaPic from "../../public/bhagavadgeeta.jpg";
import { BhagavadGeethaData } from "../constants/bhagavadgeetha";
import Link from "next/link";
import {
	BhagavadgeethaPageIntroductionText,
	BhagavadgeethaPageTitle,
} from "../constants";

export const generateMetadata = () => {
	return {
		title: BhagavadgeethaPageTitle,
		description: BhagavadgeethaPageIntroductionText,
	};
};

const Bhagavadgeetha = () => {
	return (
		<div className="p-8 sm:p-16 md:py-8 md:px-32">
			<h1 className="text-3xl sm:text-4xl pb-6 md:pb-12">
				{BhagavadgeethaPageTitle}
			</h1>
			<section className="grid lg:grid-cols-2 gap-6 pb-4 w-full">
				<Link
					href="https://amzn.to/41Rnko9"
					target="_blank"
					className="w-full flex justify-center relative">
					<Image
						width={300}
						height={300}
						src={BhagavadgeethaPic}
						alt="Bhagavadgeetha Reference Picture"
						className="rounded-2xl"
					/>
					<button
						type="button"
						className="font-bold text-sm bg-[#773B3F] absolute rounded-md bottom-4 p-2 text-white border-none outline-none">
						Available on AMAZON
						<br /> click on image to purchase
					</button>
				</Link>
				<div>
					<p className="text-lg leading-relaxed">
						{BhagavadgeethaPageIntroductionText}
					</p>
				</div>
			</section>
			<section>
				{BhagavadGeethaData.map((list, index) => {
					return (
						<div className="py-4" key={index}>
							<h2 className="text-xl font-semibold underline pb-4">
								{list?.Title}
							</h2>
							<h2 className="text-xl font-semibold text-center pb-2">
								{list?.Chapter}&nbsp;{list?.Verse}
							</h2>
							<p className="text-lg">{list?.EnlgishTranslation}</p>
						</div>
					);
				})}
			</section>
		</div>
	);
};

export default Bhagavadgeetha;
