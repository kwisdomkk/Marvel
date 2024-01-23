import { TiSocialInstagram } from "react-icons/ti"
import { Link } from "react-router-dom";

export default function Insta() {
  return (
    <Link to="https://www.instagram.com/">
    <div className="w-5 h-5 duration-500 text-gray-500
     hover:text-gray-600 cursor-pointer">
      <TiSocialInstagram size="full" />
    </div>
    </Link>
  )
}
