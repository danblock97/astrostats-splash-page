import React from "react";
import nexusBotLogo from "../assets/nexusbot.png";
import { Link } from "react-router-dom";

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
            href="https://discord.com/api/oauth2/authorize?client_id=1088929834748616785&permissions=277025639488&scope=bot"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 hover:bg-red-600 text-white rounded-lg px-4 py-2 text-lg"
          >
            Invite NexusBot
          </a>
          <a
            href="https://github.com/danblock97/NexusBot"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2 text-lg"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
