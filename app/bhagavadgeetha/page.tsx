import Image from "next/image";
import React from "react";
import BhagavadgeethaPic from "../../public/bhagavadgeeta.jpg";
import { BhagavadGeethaData } from "../constants/bhagavadgeetha";
import Link from "next/link";

export const generateMetadata = () => {
	return {
		title:
			"Unlocking the Wisdom of the Bhagavad Gita: Insights, Verses, and Teachings for Spiritual Enlightenment",
		description:
			"Explore the profound wisdom of the Bhagavad Gita on our readable page, offering insights, verses, and teachings for spiritual enlightenment. Uncover transformative guidance that transcends time and culture.",
	};
};

const Bhagavadgeetha = () => {
	return (
		<div className="p-8 sm:p-16 md:py-8 md:px-32">
			<h1 className="text-3xl sm:text-4xl pb-6 md:pb-12">
				Unlocking the Wisdom of the Bhagavad Gita: Insights, Verses, and
				Teachings | Your Ultimate Guide"
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
						The Bhagavad Gita, often referred to as the Gita, holds a special
						place in Hindu scriptures with its 700 verses, forming an integral
						part of the Mahabharata's Bhishma Parva (chapters 23–40).
						Originating in the first millennium BCE, this sacred dialogue
						unfolds between Arjuna, the Pandava prince, and Krishna, his
						charioteer guide and the revered avatar of Vishnu. Amidst the
						tumultuous Kurukshetra War, Arjuna grapples with a profound moral
						dilemma, turning to Krishna for guidance. The ensuing discourse
						shapes the timeless teachings of the Bhagavad Gita, emphasizing the
						duty of a warrior to uphold dharma. Beyond the battlefield, this
						dialogue transcends its immediate context, delving into moral,
						ethical, and philosophical dimensions. It serves as a powerful
						allegory for the universal struggles inherent in human life. Explore
						the profound wisdom of the Bhagavad Gita, offering transformative
						insights for navigating the intricate complexities of existence.
						Immerse yourself in the spiritual depth of this scripture,
						discovering guidance that resonates across time and culture.
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
