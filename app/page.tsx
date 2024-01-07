import Image from "next/image";
import TempleListCard from "./components/TempleListCard";
import { famousTemplesListTS } from "./constants/data";
import heroBackgroundImage from "../public/temple2.jpg";
import heroBackgroundImageMobile from "../public/temple1.jpg";
import ScrollAnimation from "./components/ScrollAnimation";
import { metroCitiestemplesData } from "./constants/metroCitiestemplesData";

export default function Home() {
	return (
		<main className="min-h-screen">
			<section className="grid place-items-center w-full min-h-screen p-8 sm:p-16 lg:p-24 relative">
				<Image
					className="hidden sm:block"
					src={heroBackgroundImage}
					layout="fill"
					alt="temple-background"
					placeholder="blur"
					quality={100}
					priority
				/>
				<Image
					className="block sm:hidden"
					src={heroBackgroundImageMobile}
					layout="fill"
					alt="temple-background"
					placeholder="blur"
					objectFit="cover"
					quality={100}
					priority
				/>
				<div className="z-10 text-center text-white">
					<h1 className="text-5xl sm:text-6xl lg:text-8xl text-bold home-heading-animate">
						Famous Temples
					</h1>
					<h2 className="text-lg sm:text-3xl home-subheading-animate">
						Explore Sacred Sites and Historical Wonders
					</h2>
				</div>
			</section>

			<section className="p-8 sm:p-16 lg:px-24 lg:py-16">
				<h2 className="text-3xl font-semibold py-12">
					Famous Temples in Telangana
				</h2>
				<div>
					{famousTemplesListTS.map((list, index) => {
						return (
							<ScrollAnimation
								key={index}
								id={`list-temples-reference-${index}`}>
								<TempleListCard
									href={`/famoustelanganatemple/${index}/${list.title
										.toLowerCase()
										.replace(/[\s-]+/g, "-")}`}
									url={list.imageUrl}
									title={list.title}
									text={list.text}
									alt={`temple-${index}`}
									place={list.place}
								/>
							</ScrollAnimation>
						);
					})}
				</div>
			</section>
			<section className="p-8 sm:p-16 lg:px-24 lg:py-16">
				<h2 className="text-3xl font-semibold py-12">
					Famous Temples in India
				</h2>
				<div>
					{metroCitiestemplesData.map((list, i) => {
						return (
							<ScrollAnimation key={i} id={`list-temples-reference-${i}`}>
								<TempleListCard
									href={`/famousindiantemple/${i}/${list.templeName
										.toLowerCase()
										.replace(/[\s-|,]+/g, "-")}`}
									title={list.templeName}
									text={list.Description}
									place={list.Location}
								/>
							</ScrollAnimation>
						);
					})}
				</div>
			</section>
		</main>
	);
}
