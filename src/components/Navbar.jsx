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
import ads from "../assets/ads-logo.png";
import chat from "../assets/chat-logo.png";
import podcast from "../assets/google-podcast-logo.png";
import classroom from "../assets/google-classroom-logo.png";
import forms from "../assets/google-forms.png";
import meet from "../assets/google-meet-logo.png";
import lens from "../assets/google-lens.png";
import one from "../assets/one-logo.png";
import travel from "../assets/travel-logo.png";
import photo from "../assets/photo-logo.png";

// Gadget Data
const gadgetData = [
  {
    id: 1,
    image: user,
    name: "Arryn",
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
  {
    id: 12,
    image: chat,
    name: "Google Chat",
  },
  {
    id: 13,
    image: podcast,
    name: "Podcast",
  },
  {
    id: 14,
    image: classroom,
    name: "Google Classroom",
  },
  {
    id: 15,
    image: forms,
    name: "Form",
  },
  {
    id: 16,
    image: meet,
    name: "Google Meet",
  },
  {
    id: 17,
    image: lens,
    name: "Google Lens",
  },
  {
    id: 18,
    image: one,
    name: "Google One",
  },
  {
    id: 19,
    image: travel,
    name: "Travel",
  },
  {
    id: 20,
    image: photo,
    name: "Google Photo",
  },
  {
    id: 21,
    image: ads,
    name: "Google Ads",
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
