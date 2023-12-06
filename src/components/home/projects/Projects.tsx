"use client";

import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import "./style.scss";
import ProjectsBgSvg from "./svg/ProjectsBgSvg";
import ProjectsTitleSvg from "./svg/ProjectsTitleSvg";
import { projects } from "./db";
import Button from "../../defaults/buttons/Button";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
  const isMobile = useMediaQuery({ maxWidth: 820 });

  return (
    <section id="projects">
      {isMobile ? (
        <div className="projects-mobile">
          <h3>projects</h3>

          <Swiper
            effect={"fade"}
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              //pauseOnMouseEnter: true,
            }}
            loop={true}
            modules={[EffectFade, Navigation, Autoplay]}
            className="mySwiper"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="swiperSlide-card">
                <p className="srno">{project.srno}</p>
                <h4>{project.title}</h4>
                <p>{project.desc}</p>
                <div className="image-main">
                  <div className="img-container">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 600px, (max-width: 1200px) 1000px, 2000px"
                      loading="lazy"
                    />
                  </div>
                  <Link href={project.link} target="_blank">
                    <Button>Visit</Button>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="svg-container">
          <div className="title-container">
            <ProjectsTitleSvg />
            <h3>projects</h3>
          </div>
          <div className="data-main">
            <Swiper
              effect={"fade"}
              navigation={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
                //pauseOnMouseEnter: true,
              }}
              loop={true}
              modules={[EffectFade, Navigation, Autoplay]}
              className="mySwiperDesktop"
            >
              {projects.map((project, i) => (
                <SwiperSlide key={i}>
                  <ProjectsBgSvg />
                  <div className="data">
                    <div className="text-container">
                      <p className="srno">{project.srno}</p>
                      <div className="info">
                        <h4>{project.title}</h4>
                        <p>{project.desc}</p>
                        <Link href={project.link} target="_blank">
                          <Button>Visit</Button>
                        </Link>
                      </div>
                    </div>
                    <div className="img-container">
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 600px, (max-width: 1200px) 1000px, 2000px"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
