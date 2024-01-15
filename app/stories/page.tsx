// pages/stories/index.tsx
import { GetStaticProps } from "next";
import Link from "next/link";
import { storiesData } from "../constants/storiesData";
import { StoriesDescription, StroriesTitle } from "../constants";

export const generateMetadata = () => {
	return {
		title: StroriesTitle,
		description: StoriesDescription,
	};
};

const StoriesPage = () => {
	return (
		<main className="container mx-auto  text-center p-8 lg:p-0 lg:px-32">
			<h1 className="text-2xl sm:text-4xl font-bold pb-6 sm:pb-12">
				{StroriesTitle}
			</h1>
			<ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 text-black pb-12">
				{storiesData.map((story, index) => (
					<li key={index} className="bg-white p-4 rounded-lg shadow-md h-full">
						<Link
							className="text-blue-800 underline font-bold text-lg"
							href={`/stories/${index}/${encodeURIComponent(
								story.title.toLowerCase().replace(/[\s - :]+/g, "-")
							)}`}>
							{story.title}
						</Link>
						<p className="line-clamp-3 text-lg my-2 overflow-hidden">
							{story.description}
						</p>
					</li>
				))}
			</ul>
		</main>
	);
};

export default StoriesPage;
