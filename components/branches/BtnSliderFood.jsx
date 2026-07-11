import ArrowLeft from "@/components/ui/icons/arrow-left";

export function BtnSliderFood({
  className = "",
  classNameArrow = "",
  disabled = false,
  handleClick = () => {},
}) {
  return (
    <>
      {disabled || (
        <div
          className={`w-10 z-10 bg-white  -translate-y-1/2 h-10 border border-gray-4 rounded-lg ${className}`}
          onClick={handleClick}
        >
          <ArrowLeft className={`w-8 h-8 fill-primary m-1 ${classNameArrow}`} />
        </div>
      )}
    </>
  );
}
