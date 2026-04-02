import NavBar from "@/components/NavBar";
import TopBar from "@/components/TopBar";
import NotificationsScroll from "@/app/components/NotificationsScroll";
import Hero from "@/app/components/Hero";
import Image from "next/image";
import StatusBar from "./components/StatusBar";
import Achievements from "./components/Achievements";
import Slider from "./components/Slider";
import Departments_Programs from "./components/Departments_Programs";

export default function Home() {
  return (
    <>
      <NotificationsScroll/>
      <Hero/>
      <StatusBar/>
      <Achievements/>
      {/* <Slider/> */}
      <Departments_Programs/>
    </>
  );
}
