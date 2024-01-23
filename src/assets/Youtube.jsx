import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";

export default function Youtube() {
  return (
    <Link to="https://www.youtube.com/">
        <div className="w-5 h-5 duration-500 text-gray-500 hover:text-gray-600 cursor-pointer ">
            <FaYoutube size="full" />
        </div>
    </Link>
  )
}