import React from "react";
import { Link } from "react-router-dom";
import HomeBanner from "./home-banner";
import speakersHero from "../assets/speakersmenu.svg";
import headphonesHero from "../assets/headphones.svg";
import earphonesHero from "../assets/earphonessvg.svg";

import HomeCategory from "./home-category";
import HomeZx9hero from "./home-zx9hero";
import HomeZx7hero from "./home-zx7hero";
import HomeYx1hero from "./home-yx1hero";

export default function Home(props) {
  return (
    <div className="home">
      <HomeBanner ourData={props.data} />
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
      <HomeZx9hero ourImg={speakersHero} ourData={props.data} />
      <HomeZx7hero ourData={props.data}/>
      <HomeYx1hero ourData={props.data}/>
    </div>
  );
}
