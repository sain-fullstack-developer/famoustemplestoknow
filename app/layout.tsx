import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";
import { ThemeSwitcher } from "./components/ThemeProvider/ThemeSwitcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Discover Awe-Inspiring Temples Around the Globe",
	description:
		"Explore a collection of breathtaking temples from diverse cultures and religions, each with a unique history and architectural beauty. Embark on a virtual journey and uncover the stories behind these sacred places.",

	keywords:
		"temples, world, architecture, religion, travel, culture, spirituality, history, landmarks",
	googleadsenseaccount: "ca-pub-4118963972175745",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} relative bg-white dark:bg-black text-black dark:text-white`}>
				<ThemeProvider attribute="class">
					<div className="absolute right-10 sm:right-24 top-7 z-50">
						<ThemeSwitcher />
					</div>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
