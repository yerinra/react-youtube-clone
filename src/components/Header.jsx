/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiFillYoutube, AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const handleKeywordChange = (e) => {
    setText(e.target.value);
  };

  const handleKeywordSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
    setText("");
  };

  return (
    <header className="flex justify-between py-5 px-28 items-center">
      <Link to="/" className="hidden sm:flex items-center mr-10">
        <AiFillYoutube className="text-3xl text-youtubeRed" />
        <div className="text-xl font-sans font-semibold text-youtubeBlack">
          {"YouTube"}
        </div>
      </Link>

      <form onSubmit={handleKeywordSubmit} className="flex w-4/5">
        <input
          type="text"
          value={text}
          placeholder="Search"
          onChange={handleKeywordChange}
          className="border rounded-l-[20px] px-3.5 py-2.5 font-sans text-md font-light text-youtubeDarkGray w-full max-w-[500px] focus:text-youtubeBlack"
        />

        <button
          type="submit"
          className="border rounded-r-[20px] border-l-0 px-5 py-2.5 text-xl font-light text-youtubeDarkGray bg-youtubeLightGray w-[60px]"
        >
          <AiOutlineSearch className="text-youtubeBlack" />
        </button>
      </form>

      <div className="border rounded-full border-youtubeBlack bg-youtubeLightGray w-10 h-10 ml-5 flex-shrink-0" />
    </header>
  );
};

export default Header;
