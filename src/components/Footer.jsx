import Facebook from "../assets/Facebook";
import Insta from "../assets/Insta";
import Pinterest from "../assets/Pinterest";
import SnapChat from "../assets/SnapChat";
import Tumb from "../assets/Tumb";
import Twitter from "../assets/Twitter";
import Youtube from "../assets/Youtube";
import FooterLogo from "../assets/png/logo2.png"; 


export default function Footer() {
  return (
    <div className="bg-main-dark w-full flex justify-center py-16">
      <div className="max-w-7xl w-full flex justify-between text-white">
        {/* 1. 로고파트 */}
        <div className="flex space-x-8">
          {/* 로고 */}
          <div>
            <img src={FooterLogo} alt="footer-logo"/>
          </div>
          {/* 2 */}
          <div className="text-sm font-semibold space-y-2">
            <p>ABOUT MARVEL</p>
            <p>HELP/FAQS</p>
            <p>CAREERS</p>
            <p>INTERNSHIPS</p>
          </div>
          {/* 3 */}
          <div className="text-sm font-semibold space-y-2">
            <p>ADVERTISING</p>
            <p>DISNEY+</p>
            <p>MARVELHQ.COM</p>
            <p>REDEEM DIGITAL</p>
          </div>
        </div>
        {/* 2. ads */}
        <div className="space-y-8">
          {/* 1.위 */}
          <div className="flex space-x-4">
            {/* image */}
              <div className="h-8">
                <img className="h-full" src="https://cdn.marvel.com/content/1x/marvel_insider-topnav-logo-large2x.png" alt="insider_image"/>
              </div>
            {/* description */}
            <div>
              <h2 className="font-semibold">MARVEL INSIDER</h2>
              <p className="text-gray-500 text-sm">Get Rewarded for Being a Marvel Fan</p>
            </div>
          </div>
          {/* 2.아래 */}
          <div className="flex space-x-4">
            {/* image */}
              <div className="h-8">
                <img className="h-full" src="https://cdn.marvel.com/content/1x/mu-logo-w-nav-2x-2021-02.png" alt="insider_image"/>
              </div>
            {/* description */}
            <div>
              <h2 className="font-semibold">MARVEL INSIDER</h2>
              <p className="text-gray-500 text-sm">Get Rewarded for Being a Marvel Fan</p>
            </div>
          </div>
        </div>
        {/* 3.아이콘 */}
        <div className="space-y-6">
          <h3 className="uppercase font-semibold">follow Marvel</h3>
          <div className="grid grid-cols-4 grid-rows-2 gap-x-7 gap-y-4">
            <p><Facebook/></p>
            <p><Twitter/></p>
            <p><Insta/></p>
            <p><Tumb/></p>
            <p><Youtube/></p>
            <p><SnapChat/></p>
            <p><Pinterest/></p>
          </div>
        </div>
      </div>
    </div>
  )
}
