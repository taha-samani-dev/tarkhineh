
import MainBoxProfile from "@/components/profile/MainBoxProfile"
import SidebarProfile from "@/components/profile/SidebarProfile"

export default function layout({children}) {
    return (
        <div className='lg:grid grid-cols-25 w-full gap-6 lg:my-12 px-4 md:px-8 justify-center'>
            <SidebarProfile/>
            <MainBoxProfile>
                {children}
            </MainBoxProfile>
        </div>
    )
}

