
import Logo from "@/components/layout/Header/Logo";
import LeftIconHeader from "./LeftIconHeader/LeftIconHeader";
import HeaderNav from "./nav/HeaderNav";
import SidebarIcon from "@/components/ui/icons/sidebar-icon";
import Link from "next/link";

export default function Header() {
  return (
    <>
    <header
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-70 w-full max-w-360 h-16 md:h-28.75 bg-white shadow-header flex items-center justify-between px-4 md:px-8 xl:px-27`}>
      {/* btn Header in mobile */}
      <SidebarIcon/>
      {/* logo */}
      <Link href={"/"}  className={`flex gap-2 w-25 min-[1140]:w-38.75! md:w-32 lg:w-21 h-8 md:h-10 lg:h-13`}>
        <Logo />
      </Link>
      {/* Header nav */}
      <HeaderNav />
      {/* left icon */}
      <LeftIconHeader />
    </header>
    <div className={`bg-transparent h-16 md:h-28.75 w-full  px-4 md:px-8 lg:px-4 xl:px-27 `}></div>
    </>
  );
}
