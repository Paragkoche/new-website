import { Home } from "@prisma/client";
import DB from "./DB";

interface HomeType extends Home {}

export const getHomeData = async () =>
  await DB.home.findFirst({
    include: {
      client_reviwes_section: {
        include: {
          reviwes: true,
        },
      },
      Home_Hero_setion: {
        include: {
          programing_laguage_slider: true,
        },
      },
      Home_project_section: {
        include: {
          projects: true,
        },
      },
      Home_services_section: {
        include: {
          boxs: true,
        },
      },
      home_why_webstack: {
        include: {
          statment: true,
        },
      },
    },
  });
