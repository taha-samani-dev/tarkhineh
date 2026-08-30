
import Link from "next/link";

export default function Popup({ className = "", data }) {
  return (
    <div
      className={className}
    >
      <ul className="flex flex-col bg-white rounded-sm">
        {data.map(({label,href,Icon}, index) => {
          return (
            <li key={index} className="">
              {index !== 0 && (
                <div className="px-2 py-px w-full h-0.75">
                  <div className="bg-gray-3 rounded-full w-full h-full"></div>
                </div>
              )}
              <button className="w-full active:scale-90 transition-all duration-300 ease-in-out">
                <Link
                  href={href}
                  className="flex items-center gap-1 hover:bg-gray-2 hover:fill-primary px-2 py-2 hover:border-tint-1 hover:rounded-sm w-full h-full hover:text-primary transition-all duration-400 hover:[&_svg]:fill-primary ease"
                >
                  {Icon && <Icon className={`w-4 h-4 fill-gray-8`}/>}
                  <span className="h-6.5 body-sm">{label}</span>
                </Link>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
