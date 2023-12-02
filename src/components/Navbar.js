import React from "react";
import astroStatsLogo from "../assets/astrostats.png";
import { Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";

function Navbar() {
	return (
		<nav className="py-4 bg-gradient-to-r from-indigo-900 via-purple-800 to-transparent">
			<div className="container mx-auto flex items-center justify-between px-5">
				<div className="flex items-center">
					<img src={astroStatsLogo} alt="AstroStats" className="h-8 mr-2" />
					<a href="/" className="text-purple-300 text-xl font-bold uppercase">
						AstroStats
					</a>
				</div>

				<div className="mx-4">
					{" "}
					{/* Add this div for spacing */}
					<Link to="/commands" className="text-purple-300 text-xl uppercase">
						Commands
					</Link>
				</div>

				<div className="flex space-x-4">
					<a
						href="https://discord.gg/ruvGB8fwSn"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white rounded-lg px-4 py-2 flex items-center bg-blue-600 hover:bg-blue-700"
					>
						<FaDiscord className="mr-2" />
						Join our Discord
					</a>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
