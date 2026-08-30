import DocumentNormal from "../ui/icons/document-normal";

export default function OrderDescription() {
  return (
    <div className={`relative flex h-36 lg:h-42 w-full border border-gray-4 rounded-lg p-4`}>
        <textarea className={`w-full h-full font-estedad-regular outline-none resize-none`} placeholder=""/>
        <div className="z-10 absolute flex items-center gap-1 w-full font-estedad-regular">
            <DocumentNormal className={`w-4 md:w-6 fill-primary font-estedad-regular`}/>
            <p className={`md: md:text-base text-sm`}>توضیحات سفارش</p>
            <p className={`text-[10px] md:text-xs`}>(اختیاری)</p>
        </div>
    </div>
  )
}
