import DB from "./DB";
export const getNavData = async () =>
  await DB.nav_bar.findFirst({
    include: {
      manu: true,
    },
  });
