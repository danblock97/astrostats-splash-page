import React from "react";

function Commands() {
	return (
		<div
			className="flex flex-col items-start p-8 h-screen"
			style={{ background: "linear-gradient(135deg, #dd4f7a, transparent)" }}
		>
			<h1 className="text-3xl font-bold text-white">Commands</h1>
			<h3 className="text-md mb-4 text-white">List of bot commands</h3>
			<div className="w-full bg-white rounded-lg overflow-hidden">
				<table className="w-full">
					<thead>
						<tr>
							<th className="text-left bg-gray-700 px-4 py-2 text-white">
								Command
							</th>
							<th className="text-left bg-gray-700 px-4 py-2 text-white">
								Description
							</th>
							<th className="text-left bg-gray-700 px-4 py-2 text-white">
								Usage
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="bg-gray-100">
							<td className="px-4 py-2 text-red-400 font-bold border-b border-white/30">
								help
							</td>
							<td className="px-4 py-2 text-gray-800 font-bold border-b border-white/30">
								Lists all available commands
							</td>
							<td className="px-4 py-2 text-gray-500 font-bold border-b border-white/30">
								/help
							</td>
						</tr>
						<tr className="bg-gray-100">
							<td className="px-4 py-2 text-red-400 font-bold border-b border-white/30">
								League
							</td>
							<td className="px-4 py-2 text-gray-800 font-bold border-b border-white/30">
								Display Ranked Solo/Duo information for your League of Legends
								Summoner
							</td>
							<td className="px-4 py-2 text-gray-500 font-bold border-b border-white/30">
								/league 'summoner name'
							</td>
						</tr>
						<tr className="bg-gray-100">
							<td className="px-4 py-2 text-red-400 font-bold border-b border-white/30">
								Apex
							</td>
							<td className="px-4 py-2 text-gray-800 font-bold border-b border-white/30">
								Display player stats for your Apex Legend profile on any
								platform
							</td>
							<td className="px-4 py-2 text-gray-500 font-bold border-b border-white/30">
								/apex 'player name' 'platform'
							</td>
						</tr>
						<tr className="bg-gray-100">
							<td className="px-4 py-2 text-red-400 font-bold border-b border-white/30">
								CSGO
							</td>
							<td className="px-4 py-2 text-gray-800 font-bold border-b border-white/30">
								Display player stats for your CSGO player profile
							</td>
							<td className="px-4 py-2 text-gray-500 font-bold border-b border-white/30">
								/csgo 'player name'
							</td>
						</tr>
						<tr className="bg-gray-100">
							<td className="px-4 py-2 text-red-400 font-bold border-b border-white/30">
								Fortnite
							</td>
							<td className="px-4 py-2 text-gray-800 font-bold border-b border-white/30">
								Display player stats for your Fortnite player profile
							</td>
							<td className="px-4 py-2 text-gray-500 font-bold border-b border-white/30">
								/fortnite 'player name'
							</td>
						</tr>
						<tr className="bg-gray-100">
							<td className="px-4 py-2 text-red-400 font-bold border-b border-white/30">
								Horoscope
							</td>
							<td className="px-4 py-2 text-gray-800 font-bold border-b border-white/30">
								Display your daily horoscope
							</td>
							<td className="px-4 py-2 text-gray-500 font-bold border-b border-white/30">
								/horoscope 'sign'
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Commands;
