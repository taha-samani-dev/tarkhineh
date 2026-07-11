import FeatureItem from "./FeatureItem";
import {data} from "@/constans/constans";

export default function Features() {
  const features = data.features
  return (
      <div className="gap-x-2 gap-y-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 fill-white m-auto px-10 w-full md:w-180 lg:w-110 md:h-24 lg:h-70">
        {features.map(({Icon, text}, index) => (
            <FeatureItem
                key={index}
                Icon={Icon}
                text={text}
            />
        ))}
      </div>
  );
}
