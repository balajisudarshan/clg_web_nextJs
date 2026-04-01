import NavBar from "@/components/NavBar";
import TopBar from "@/components/TopBar";
import NotificationsScroll from "@/app/components/NotificationsScroll";
import Hero from "@/app/components/Hero";
import Image from "next/image";
import StatusBar from "./components/StatusBar";

export default function Home() {
  return (
    <>
      <NotificationsScroll/>
      <Hero/>
      <StatusBar/>
    </>
  );
}
