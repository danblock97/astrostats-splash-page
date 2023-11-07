import React from "react";

function Home() {
	return (
		<div
			className="flex flex-col items-center justify-center min-h-screen"
			style={{
				background: `linear-gradient(135deg, #dd4f7a, transparent)`,
			}}
		>
			<h1
				className="text-4xl font-bold text-white mb-8"
				style={{ color: "#dd4f7a" }}
			>
				Welcome to AstroStats!
			</h1>
			<div className="flex space-x-4">
				<a
					href="https://discord.com/api/oauth2/authorize?client_id=1088929834748616785&permissions=277025639488&scope=bot"
					target="_blank"
					rel="noopener noreferrer"
					className="bg-red-500 hover:bg-red-600 text-white rounded-lg px-8 py-4 text-xl"
					style={{ backgroundColor: "#dd4f7a", color: "white" }}
				>
					Invite AstroStats
				</a>
				<a
					href="https://github.com/danblock97/AstroStats"
					target="_blank"
					rel="noopener noreferrer"
					className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-8 py-4 text-xl"
					style={{ backgroundColor: "#dd4f7a", color: "white" }}
				>
					View on GitHub
				</a>
			</div>
		</div>
	);
}

export default Home;
