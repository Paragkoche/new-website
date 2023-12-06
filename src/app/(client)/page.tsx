import { getHomeData } from "@/src/backend";
import Hero from "@/src/components/home/hero/Hero";
import Services from "@/src/components/home/services/Services";
import Loader from "@/src/components/defaults/loader/Loader";
import Projects from "@/src/components/home/projects/Projects";
import WhyWebstack from "@/src/components/home/why-webstack/WhyWebstack";

export default async function Home() {
  const data = await getHomeData();
  //console.log(data);

  return (
    <>
      <Loader />
      <Hero {...data?.Home_Hero_setion} />
      <Services />
      <Projects />
      <WhyWebstack />
    </>
  );
}
