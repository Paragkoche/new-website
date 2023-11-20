import { getHomeData } from "@/src/backend";
import Hero from "../../components/home/hero/Hero";
import Services from "../../components/home/services/Services";
import Loader from "../../components/defaults/loader/Loader";

export default async function Home() {
  const data = await getHomeData();
  //console.log(data);

  return (
    <>
      <Loader />
      <Hero {...data?.Home_Hero_setion} />
      <Services />
    </>
  );
}
