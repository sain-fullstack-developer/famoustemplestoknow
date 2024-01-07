import Image from "next/image";
import Link from "next/link";
import React from "react";

type propTypes = {
	url: string;
	alt: string;
	title: string;
	text: string;
	place: string;
	href: string;
};

const TempleListCard = (props: propTypes) => {
	const { url, alt, title, text, place, href } = props;
	return (
		<Link href={href}>
			<div className="py-6 cursor-pointer">
				<div className="grid md:grid-cols-2 gap-6">
					{url && url !== "" ? (
						<Image
							src={url}
							alt={alt}
							width={400}
							height={400}
							className="rounded-2xl shadow-xl"
						/>
					) : (
						<Image
							src="/temple2.jpg"
							alt={alt}
							width={400}
							height={400}
							className="rounded-2xl shadow-xl"
						/>
					)}
					<div>
						<h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wider pb-4 capitalize">
							{title}
						</h2>
						<p className="text-base sm:text-lg line-clamp-4 overflow-hidden mb-4">
							{text}
						</p>
						<p>
							<b>Place:</b> {place}
						</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default TempleListCard;
