import { slokasData } from "@/app/constants/slokasData";
import React from "react";

const HinduSlokas = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{slokasData.map((sloka, index) => (
				<div key={index} className="mb-8">
					<div className="bg-white p-4 rounded-lg shadow-md h-full">
						<div className="mb-4">
							<strong className="text-xl dark:text-black">
								Sloka {index + 1}:
							</strong>
						</div>
						<blockquote className="italic text-gray-600 mb-2 font-semibold text-lg">
							{sloka.sloka}
						</blockquote>
						<p className="text-gray-800">{sloka.translation}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default HinduSlokas;
