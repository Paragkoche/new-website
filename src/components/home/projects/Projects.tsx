"use client";

import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import "./style.scss";
import ProjectsBgSvg from "./svg/ProjectsBgSvg";
import ProjectsTitleSvg from "./svg/ProjectsTitleSvg";
import { projects } from "./db";
import Button from "../../defaults/buttons/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Projects = () => {
  const isMobile = useMediaQuery({ maxWidth: 820 });
  const router = useRouter();

  return (
    <section id="projects">
      {isMobile ? (
        "mobile"
      ) : (
        <div className="svg-container">
          <div className="title-container">
            <ProjectsTitleSvg />
            <h3>projects</h3>
          </div>
          <div className="data-main">
            {projects.map((project, index) => (
              <div key={index} className="data-container">
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
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
