import React from "react";
import { Link } from "react-router-dom";
import HomeCategory from "./home-category";
import speakersHero from "../assets/speakersmenu.svg";
import headphonesHero from "../assets/headphones.svg";
import earphonesHero from "../assets/earphonessvg.svg";
import Productpreview from "./productpreview";
import SectionBanner from "./sectionBanner";
import Productdetail from "./productdetail";
export default function Speakers({data}) {

  let ourSpeakers = data.filter(item => item.category === "speakers" );
  let ourSpeakersSorted = ourSpeakers.sort((a,b) =>a.new === true ? -1 : 1);
  console.log(ourSpeakers)
  return (
    <div>
      <SectionBanner sectionName={"speakers"} />
      {ourSpeakersSorted.map((item, index) => {
       return  (
          <Productpreview ourItem={item} key={`${index + 1}key`} directionByKey={((index + 1) % 2) === 0 ? "row-reverse" :"row"} />
        )
      })}
      <ul className="home__categori">
        <li className="home__category-link">
          <Link to="/headphones">
            <HomeCategory
              className="home__categori-item"
              menuName={"Headphones"}
              src={headphonesHero}
            />
          </Link>
        </li>
        <li className="home__category-link">
          <Link to="/speakers">
            <HomeCategory
              className="home__categori-item"
              menuName={"Speakers"}
              src={speakersHero}
            />
          </Link>
        </li>
        <li className="home__category-link">
          <Link to="/earphones">
            <HomeCategory
              className="home__categori-item"
              menuName={"Earphones"}
              src={earphonesHero}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
