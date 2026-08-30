import { data } from "@/constans/constans";
import { Slider } from "@/components/common/Slider";
import FilterBox from "@/components/menu/FilterBox";
import FoodBoxes from "@/components/menu/FoodBoxes";

const items = [
  { name: "غذاهای ایرانی", tag: "persian-food" },
  { name: "غذاهای غیر ایرانی", tag: "non-persian-food" },
  { name: "پیتزاها", tag: "pizzas" },
  { name: "ساندویچ‌ها", tag: "sandwiches" },
  { name: "پر فروش ترین ها", tag: "best-sellers" },
  { name: "اقتصادی ترین ها", tag: "cheapest" },
];

export default async function page() {
  const slides = data.slides
  return (
    <div className="relative">
      {/* slider */}
      <Slider className={'w-full h-44 md:h-64 lg:h-84 relative'} data={slides}/>
      {/* FilterBox */}
      <FilterBox data={items} />
      {/* foods */}
      <FoodBoxes data={items} />
    </div>
  );
}
