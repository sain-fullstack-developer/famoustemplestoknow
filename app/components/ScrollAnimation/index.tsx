"use client";
import React, { useEffect } from "react";

const ScrollAnimation = ({
	id,
	children,
}: {
	id: string;
	children: React.ReactNode;
}) => {
	useEffect(() => {
		const handleScroll = () => {
			const element = document.getElementById(id);

			if (element) {
				const scrollPosition = window.scrollY;
				const elementPosition = element.offsetTop;

				if (scrollPosition > elementPosition - window.innerHeight / 2) {
					element.classList.add("animate");
				} else {
					element.classList.remove("animate");
				}
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div id={id} className="scrollElement">
			{children}
		</div>
	);
};

export default ScrollAnimation;
