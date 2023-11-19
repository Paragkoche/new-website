"use client";

import "./style.scss";
import Background from "./Background";
import { useMediaQuery } from "react-responsive";
import Button from "@/src/components/defaults/buttons/Button";
import Image from "next/image";
import heroImg from "@/public/assets/images/Hero/hero-img.png";
import heroImgMob from "@/public/assets/images/Hero/hero-img-mob.png";
import { HomeProps } from "@/src/types/Hero";
import Marquee from "react-fast-marquee";
import Icons from "./Icons";

const Hero = (props: HomeProps) => {
  const isMobile = useMediaQuery({ maxWidth: 820 });

  return (
    <section id="hero">
      {isMobile ? (
        <div className="mobile-main">
          <p>
            {props.upper_sub_text ||
              "Unleash your imagination and join us on this journey."}
          </p>
          <h3
            dangerouslySetInnerHTML={{
              __html:
                props.main_text ||
                "Where Imagination \
              <br /> \
              Meets Innovation",
            }}
          ></h3>
          <div className="hero-info">
            <p>
              {props.sub_text ||
                `At Webstack, we're more than just a web design and development
                agency; we're digital storytellers. Dive into the world of
                limitless possibilities where we craft digital experiences that
                leave a lasting impression.`}
            </p>
            <Button>{props.button_text || "Learn More"}</Button>
          </div>

          <div className="img-container">
            <Image
              src={heroImgMob}
              alt="hero image"
              fill
              sizes="(max-width: 768px) 600px, (max-width: 1200px) 1000px, 2000px"
              loading="lazy"
            />
          </div>
          <div className="programing-languages">
            <Marquee>
              <Icons />
            </Marquee>
          </div>
        </div>
      ) : (
        <>
          <div className="hero-main">
            <p>
              {props.upper_sub_text ||
                "Unleash your imagination and join us on this journey."}
            </p>
            <h3
              dangerouslySetInnerHTML={{
                __html:
                  props.main_text ||
                  "Where Imagination \
              <br /> \
              Meets Innovation",
              }}
            ></h3>
            <div className="hero-info">
              <p>
                {props.sub_text ||
                  `At Webstack, we're more than just a web design and development
                agency; we're digital storytellers. Dive into the world of
                limitless possibilities where we craft digital experiences that
                leave a lasting impression.`}
              </p>
              <Button>{props.button_text || "Learn More"}</Button>
            </div>
          </div>
          <div className="img-container">
            <Image
              src={heroImg}
              alt="hero image"
              fill
              sizes="(max-width: 768px) 600px, (max-width: 1200px) 1000px, 2000px"
            />
            <div className="programming-languages">
              <Marquee pauseOnHover={true}>
                <Icons />
                <Icons />
              </Marquee>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Hero;
