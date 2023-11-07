import React from "react";
import astroStatsLogo from "../assets/astrostats.png";
import { Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";

function Navbar() {
	const botColor = "#dd4f7a"; // Define the bot color

	return (
		<nav
			className="py-4"
			style={{
				background: `linear-gradient(135deg, ${botColor}, transparent)`,
			}}
		>
			<div className="container mx-5 flex items-center justify-between gap-4">
				<div className="flex items-center">
					<img src={astroStatsLogo} alt="AstroStats" className="h-8 mr-2" />
					<a
						href="/"
						className="text-white text-xl font-bold uppercase"
						style={{ color: "white" }}
					>
						AstroStats
					</a>
				</div>
				<Link
					to="/commands"
					className="text-white text-xl uppercase mr-auto"
					style={{ color: "white" }}
				>
					Commands
				</Link>
				<div className="flex space-x-4">
					<a
						href="https://discord.gg/ruvGB8fwSn"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white rounded-lg px-4 py-2 flex items-center"
						style={{ backgroundColor: botColor, color: "white" }}
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
