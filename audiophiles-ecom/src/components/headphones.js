import React from "react";
import { Link } from "react-router-dom";

import speakersHero from "../assets/speakersmenu.svg";
import headphonesHero from "../assets/headphones.svg";
import earphonesHero from "../assets/earphonessvg.svg";
import HomeCategory from "./home-category";
import Productpreview from "./productpreview";
import SectionBanner from "./sectionBanner";
import Productdetail from "./productdetail";
export default function Headphones({data}) {
  

  let ourHeadphones = data.filter(item => item.category === "headphones" );
  let ourHeadphonesSorted = ourHeadphones.sort((a,b) =>a.new === true ? -1 : 1);
  console.log(ourHeadphones)
  return (
    <div>
      <SectionBanner sectionName={"headphones"} />
      {ourHeadphonesSorted.map((item, index) => {
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
