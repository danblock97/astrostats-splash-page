import React from "react";

function Commands() {
	return (
		<div className="flex flex-col items-start p-8 h-screen bg-gradient-to-r from-indigo-900 via-purple-800 to-transparent">
			<h1 className="text-3xl font-bold text-purple-300">Commands</h1>
			<h3 className="text-md text-purple-300 mb-4">List of bot commands</h3>
			<div className="w-full bg-white rounded-lg overflow-hidden shadow">
				<table className="w-full">
					<thead>
						<tr className="bg-gray-800 text-purple-300">
							<th className="text-left px-4 py-2">Command</th>
							<th className="text-left px-4 py-2">Description</th>
							<th className="text-left px-4 py-2">Usage</th>
						</tr>
					</thead>
					<tbody>
						<tr className="bg-gray-900 text-purple-500 border-b border-gray-700">
							<td className="px-4 py-2 font-bold">/help</td>
							<td className="px-4 py-2">Lists all available commands</td>
							<td className="px-4 py-2">/help</td>
						</tr>
						<tr className="bg-gray-700 text-purple-400 border-b border-gray-600">
							<td className="px-4 py-2 font-bold">/league</td>
							<td className="px-4 py-2">
								Display Ranked Solo/Duo information for your League of Legends
								Summoner
							</td>
							<td className="px-4 py-2">/league 'summoner name'</td>
						</tr>
						<tr className="bg-gray-900 text-purple-500 border-b border-gray-700">
							<td className="px-4 py-2 font-bold">/apex</td>
							<td className="px-4 py-2">
								Display player stats for your Apex Legend profile on any
								platform
							</td>
							<td className="px-4 py-2">/apex 'player name' 'platform'</td>
						</tr>
						<tr className="bg-gray-700 text-purple-400 border-b border-gray-600">
							<td className="px-4 py-2 font-bold">/fortnite</td>
							<td className="px-4 py-2">
								Display player stats for your Fortnite player profile
							</td>
							<td className="px-4 py-2">/fortnite 'player name'</td>
						</tr>
						<tr className="bg-gray-900 text-purple-500 border-b border-gray-700">
							<td className="px-4 py-2 font-bold">/horoscope</td>
							<td className="px-4 py-2">Display your daily horoscope</td>
							<td className="px-4 py-2">/horoscope 'sign'</td>
						</tr>
						{/* Add more command rows as needed */}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Commands;
