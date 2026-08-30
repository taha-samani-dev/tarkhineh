export default function FeatureItem({ Icon, text }) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mx-auto w-32 md:w-34 lg:w-46 h-16 md:h-24 lg:h-34" key={text}>
        <Icon className="fill-white w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12"/>
      <div className="w-full h-6 lg:h-8 font-estedad-regular text-[12px] md:text-sm lg:text-base text-center">
        {text}
      </div>
    </div>
  );
}
