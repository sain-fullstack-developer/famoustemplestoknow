/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "telanganatemples.s3.ap-south-1.amazonaws.com",
				port: "",
				pathname: "/telanganatemples/**",
			},
		],
	},
};

module.exports = nextConfig;
