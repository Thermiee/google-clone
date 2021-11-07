import { useState } from "react";
import { Apps, AccountCircleOutlined } from "@material-ui/icons";
import user from "../assets/user.png";
import search from "../assets/google-search.png";
import map from "../assets/maps.png";
import youtube from "../assets/youtube.png";
import play from "../assets/play.png";
import mail from "../assets/mail.png";
import drive from "../assets/drive.png";
import calendar from "../assets/calendar.png";
import translate from "../assets/translate.png";
import business from "../assets/business.png";
import news from "../assets/news.jpeg";

// Gadget Data
const gadgetData = [
  {
    id: 1,
    image: user,
    name: "Account",
  },
  {
    id: 2,
    image: search,
    name: "Google",
  },
  {
    id: 3,
    image: map,
    name: "Maps",
  },
  {
    id: 4,
    image: youtube,
    name: "YouTube",
  },
  {
    id: 5,
    image: play,
    name: "Play",
  },
  {
    id: 6,
    image: mail,
    name: "SMail",
  },
  {
    id: 7,
    image: drive,
    name: "Drive",
  },
  {
    id: 8,
    image: calendar,
    name: "Calendar",
  },
  {
    id: 9,
    image: translate,
    name: "Translate",
  },
  {
    id: 10,
    image: business,
    name: "My Business",
  },
  {
    id: 11,
    image: news,
    name: "News",
  },
];

const Navbar = () => {
  // Toggle state to either open or close
  const [app, setApp] = useState(false);
  return (
    <div className="navbar">
      <span className="link">About</span>
      <span className="link">Store</span>
      <div className="navRight">
        <span className="link">mail</span>
        <span className="link">Images</span>
        <span
          onClick={() => setApp((previous) => !previous)} //Toggle App Icon
          className="link iconHover"
        >
          <Apps />
        </span>
        <span className="link iconHover">
          <AccountCircleOutlined />
        </span>
        <div className={app ? "appClick" : "appClick hidden"}>
          <div className="gadgets">
            {/* Map through and get each gadget data */}
            {gadgetData.map(({ id, image, name }) => (
              <div key={id} className="gadgetContainer">
                <div className="gadget">
                  <img className="gadgetImage" src={image} alt={name} />
                  <p>{name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
