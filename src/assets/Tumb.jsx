import { Link } from "react-router-dom";
import { FaTumblr } from "react-icons/fa";

export default function Tumb() {
  return (
    <Link to="https://www.tumblr.com/">
        <div className="w-5 h-5 duration-500 text-gray-500 hover:text-gray-600 cursor-pointer ">
            <FaTumblr size="full" />
        </div>
    </Link>
  )
}