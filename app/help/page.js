
import privacy from "@/public/help/privacy.jpg"
import rules from "@/public/help/rules.jpg"
import faq from "@/public/help/faq.jpg"
import { redirect } from "next/navigation";
import  {Accordion, ContentAccordion, HeaderAccordion, ItemAccordion } from "@/app/help/Accordion";
import data from "@/app/help/data";
import { TabBox, TabItem } from "./Tab";
import AccordionBox from "./AccordionBox";
import HeaderPicture from "./HeaderPicture";

const tabItems = [
    {id:0, label: "سوالات متداول",headerLabel:"سوالات متداول از ترخینه", name:"faq", picture:faq },
    {id:1, label: "قوانین ترخینه",headerLabel:"قوانین ترخینه", name: "rules", picture:rules},
    {id:2, label: "حریم خصوصی",headerLabel:"حریم شخصی کاربران", name: "privacy", picture:privacy},
];
const tabNames = tabItems.map((item)=>item.name)

export async function generateMetadata({ searchParams }) {
  const { category } = await searchParams;
  const tab = tabItems.find((t) => t.name === category) || tabItems[0];

  return {
    title: tab.label + " | ترخینه",
    description: `صفحه ${tab.label} سایت ترخینه، اطلاعات کامل درباره ${tab.label} را ارائه می‌دهد.`
  };
}

export default async function page({searchParams}) {
    const paramName = "category"
    const {category } = await searchParams
    if(!category || !tabNames.includes(category)) {
        redirect(`/help?${paramName}=faq`)
        return null
    }
    const categoryTarget = tabItems.find((i)=> i.name === category) || tabItems[0]
    const categoryIndex = categoryTarget.id
    const categoryName = categoryTarget.name
    const content = data[categoryName]
    return (
        <div>
            <HeaderPicture tabItems={tabItems} categoryIndex={categoryIndex} />
            <TabBox activeTab={categoryName} paramName={paramName} >
                 {tabItems.map(({label,name})=>{
                    return (
                    <TabItem key={name} name={name} >
                        {label}
                    </TabItem>
                    )
                 })}
            </TabBox>
            <AccordionBox>
                <Accordion>
                    {content.map(({title,content},index)=>{
                        return (
                        <div className={`${index?"border-t border-gray-4":""}`} key={`${categoryName}-${index}`}>
                            <ItemAccordion id={`${categoryName}-${index}`}>
                                <HeaderAccordion>
                                    {title}
                                </HeaderAccordion>
                                <ContentAccordion>
                                    {content}
                                </ContentAccordion>
                            </ItemAccordion>
                        </div>
                        )
                    })}
                </Accordion>
            </AccordionBox>
        </div>
    )
}
