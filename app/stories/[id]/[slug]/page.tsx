import { storiesData } from "@/app/constants/storiesData";
import Link from "next/link";
import { useParams } from "next/navigation";
import { text } from "stream/consumers";

interface Story {
	title: string;
	description: string;
}

export const generateMetadata = ({ params }: any) => {
	const index = parseInt(params.id);

	const { title, description } = storiesData[index];

	return {
		title,
		description,
	};
};

const StoryPage: React.FC<Story> = ({ params }: any) => {
	const index = parseInt(params.id);

	const { title, description } = storiesData[index];

	return (
		<main className="min-h-screen p-8 sm:px-16 lg:px-44">
			<h1 className="text-4xl font-bold mb-4 leading-relaxed">{title}</h1>
			<p
				className="text-lg leading-loose mb-8"
				dangerouslySetInnerHTML={{ __html: description }}></p>
		</main>
	);
};

export default StoryPage;
