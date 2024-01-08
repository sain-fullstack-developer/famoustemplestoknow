"use client";
import React from "react";
import { navMenuList } from "@/app/constants";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import {usePathname } from "next/navigation";

const Header = () => {
	const [toggleMenuList, setToggleMenuList] = React.useState(false);
	const [navScrollAdd, setNavScrollAdd] = React.useState(false);
	const pathName = usePathname();

	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		latest >= 50 ? setNavScrollAdd(true) : setNavScrollAdd(false);
	});

	const openMenu = () => {
		setToggleMenuList(true);
	};
	const closeMenu = () => {
		setToggleMenuList(false);
	};

	return (
		<header
			id="headerReference"
			className={`flex justify-between py-3 px-10 sm:px-20  ${
				pathName === "/" ? "fixed text-white" : "sticky"
			} top-0 left-0 w-full z-40 ${
				navScrollAdd && "lg:bg-white/10 backdrop-blur-sm"
			}`}>
			<div className="flex mt-2 w-full text-center">
				<Link href="/">
					<h2 className={`text-2xl font-bold`}>FT</h2>
					<h4 className="text-sm font-bold">Famous Temples</h4>
				</Link>
			</div>

			{!toggleMenuList && (
				<div
					onClick={openMenu}
					className="relative flex items-center cursor-pointer lg:hidden">
					<BiMenu size="32px" />
				</div>
			)}
			<motion.nav
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.6 }}
				role="navigation"
				className={`${
					toggleMenuList
						? "block backdrop-blur-sm lg:backdrop-blur-none dark:text-white"
						: "hidden"
				} ${
					navScrollAdd && pathName === "/" && "text-black"
				} bg-white/40 lg:bg-transparent dark:bg-black/40 dark:lg:bg-transparent  font-semibold z-50 transition-all lg:flex lg:justify-end lg:mt-2  min-h-screen top-0 left-0 lg:min-h-fit lg:items-center absolute grid place-items-center w-full lg:w-inherit lg:right-0 lg:relative`}>
				{toggleMenuList && (
					<div
						onClick={closeMenu}
						className="absolute top-8 right-10 cursor-pointer lg:hidden z-50">
						<AiOutlineClose size="32px" />
					</div>
				)}
				<ul className={`lg:flex lg:gap-10`}>
					{navMenuList.map((list, index) => {
						return (
							<li
								className="pb-8 text-center lg:mt-2 text-h4 leading-h4 lg:text-paragraph lg:leading-paragraph"
								key={index}>
								<Link onClick={closeMenu} href={list?.href}>
									{list?.listName}
								</Link>
							</li>
						);
					})}
				</ul>
			</motion.nav>
		</header>
	);
};

export default Header;
