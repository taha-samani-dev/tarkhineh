
import Link from "next/link";
import Input from "../ui/inputs/Input";
import Button from "../ui/buttons/Button";
import {data} from "@/constans/constans";
import {ImageContainer} from "@/components/ui/image/ImageContainer";
import {AppImage} from "@/components/ui/image/AppImage";
import TextArea from "../ui/inputs/TextArea";

export default function Footer() {
  const {
    easyAccess,
    contactInputs,
    messageBox,
    contactSocialMedia
  } = data.footerData;
  const branches = data.branches;

  return (
      <ImageContainer className={`w-full xl:h-80 lg:h-130 h-185 relative`} >
        <AppImage className={`object-cover absolute inset-0 -z-10`} alt={`tarkhineh`} publicId={'/home_photo/footer.jpg'} />
        <div className="absolute inset-0 bg-[#000000]/65 -z-10" />
        <div className="grid grid-cols-2 w-full h-full gap-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="h-full text-white flex flex-col gap-4 w-37 md:w-43 pt-8 mx-auto">
            <h6 className="md:text-xl text-lg font-estedad-bold select-none">
              {"دسترسی آسان"}
            </h6>
            <div className="w-full h-full flex flex-col gap-4">
              {easyAccess.map(({href,label}, index) => (
                  <Link
                      key={index}
                      href={href}
                      className="text-sm select-none font-estedad-regular md:font-estedad-medium text-gray-3 hover:text-primary"
                  >
                    {label}
                  </Link>
              ))}
              <div className="flex gap-4">
                {contactSocialMedia.map(({Icon, href}, index) => (
                    <Link href={href} className="w-4 select-none md:w-6 h-4 md:h-6 [&_svg]:fill-gray-3 [&_svg]:hover:fill-primary " key={index}>
                      <Icon />
                    </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="h-full text-white flex flex-col gap-4 w-37 lg:w-43 pt-8 mx-auto">
            <h6 className="md:text-xl select-none text-lg font-estedad-bold">
              {"شعبه های ترخینه"}
            </h6>
            <div className="w-full h-full flex flex-col gap-4">
              {branches.map(({label,href}, index) => (
                  <Link
                      key={index}
                      href={href}
                      className="text-sm select-none font-estedad-regular md:font-estedad-medium text-gray-3 hover:text-primary"
                  >
                    {"شعبه" + " " + label}
                  </Link>
              ))}
            </div>
          </div>
          <div className="xl:col-span-2 lg:col-span-1 col-span-2 mx-auto w-73 xl:w-146 text-white pt-8">
            <h5 className="font-estedad-bold text-xl select-none">{'پیام به ترخینه'}</h5>
            <form
                action={""}
                method="POST"
                className="xl:w-146 w-73 flex pt-4 gap-6 flex-wrap"
            >
              <div className="flex flex-col gap-3 items-center w-69">
                {contactInputs.map((input, index) => (
                    <div key={index} className="w-69">
                      <Input
                          placeholder={input.placeholder}
                          id={input.id}
                          type={input.type}
                          name={input.name}
                      />
                    </div>
                ))}
              </div>

              <div className="w-69 flex flex-col gap-2">
                <TextArea id={messageBox.id} maxLength={200} name={messageBox.name} className={"w-69 h-37 p-4"} showCounter>{messageBox.placeholder}</TextArea>
                <div className="flex justify-center lg:justify-end">
                    <Button className="w-46 h-10 text-sm" style="stroke" color="white">
                      {messageBox.submitText}
                    </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </ImageContainer>
  );
}
