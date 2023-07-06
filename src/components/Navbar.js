import React from "react";
import nexusBotLogo from "../assets/nexusbot.png";
import { Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-black py-4">
      <div className="container mx-5 flex items-center justify-between gap-4">
        <div className="flex items-center">
          <img src={nexusBotLogo} alt="NexusBot" className="h-8 mr-2" />
          <a href="/" className="text-white text-xl font-bold uppercase">
            NexusBot
          </a>
        </div>
        <Link to="/commands" className="text-white text-xl uppercase mr-auto">
          Commands
        </Link>
        <div className="flex space-x-4">
          <a
            href="https://discord.gg/ruvGB8fwSn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white rounded-lg px-4 py-2 flex items-center"
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
