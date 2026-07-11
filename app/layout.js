import "@/app/globals.css";
import "@/app/swiperCustom.css"

import Header from "@/components/layout/Header/Header";
import SideBar from "@/components/layout/SideBar";
import Footer from "@/components/layout/Footer";
import LogIn from "@/components/layout/modals/login/LogIn";
import SelectBranch from "@/components/layout/modals/SelectBranch";
import AllPhotoBranch from "@/components/layout/modals/AllPhotoBranch";
import SearchModal from "@/components/layout/modals/SearchModal";

export const metadata = {
    title: "tarkhineh",
    description: "food shop tarkhineh",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fa" dir="rtl">
        <body>
        <div className="max-w-360 mx-auto relative text-gray-8 min-w-74 overflow-hidden">
            <Header />
            <main className="leading-[180%]">{children}</main>
            <Footer />
            {/* ---------global modals--------- */}
            <SideBar />
            <SearchModal />
            <LogIn />
            <SelectBranch />
            <AllPhotoBranch  />
            {/* ------------------------------- */}
        </div>
        </body>
        </html>
    );
}
