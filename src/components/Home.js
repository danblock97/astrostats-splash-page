import React from "react";

function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-900 via-purple-800 to-transparent">
			<h1 className="text-4xl font-bold text-purple-300 mb-8">
				Welcome to AstroStats!
			</h1>
			<div className="flex space-x-4">
				<a
					href="https://discord.com/api/oauth2/authorize?client_id=1088929834748616785&permissions=277025639488&scope=bot"
					target="_blank"
					rel="noopener noreferrer"
					className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-8 py-4 text-xl"
				>
					Invite AstroStats
				</a>
				<a
					href="https://github.com/danblock97/AstroStats"
					target="_blank"
					rel="noopener noreferrer"
					className="bg-purple-700 hover:bg-purple-800 text-white rounded-lg px-8 py-4 text-xl"
				>
					View on GitHub
				</a>
			</div>
		</div>
	);
}

export default Home;
