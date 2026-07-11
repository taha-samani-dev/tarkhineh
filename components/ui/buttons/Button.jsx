"use client";

const data = [
  {
    color: "primary",
    style: "fill",
    className: "text-white bg-primary hover:bg-shade-2 active:bg-shade-3",
  },
  {
    color: "primary",
    style: "stroke",
    className:
      "text-primary border bg-white border-primary hover:text-shade-2 hover:bg-tint-1 active:bg-tint-2 active:text-shade-3",
  },
  {
    color: "primary",
    style: "textBTN",
    className:
      "text-primary hover:text-shade-2 hover:bg-tint-1 active:bg-tint-2 active:text-shade-3",
  },
  {
    color: "white",
    style: "fill",
    className: "text-primary bg-tint-1 hover:bg-tint-2 active:bg-tint-3",
  },
  {
    color: "white",
    style: "stroke",
    className:
      "text-tint-1 border border-tint-2 hover:bg-gray-1 hover:text-shade-2 active:text-tint-3",
  },
  {
    color: "white",
    style: "textBTN",
    className: "text-tint-1 hover:text-tint-2 active:text-tint-3",
  },
  {
    color: "black",
    style: "fill",
    className: "text-white bg-gray-7 hover:bg-gray-8 active:bg-black",
  },
  {
    color: "black",
    style: "stroke",
    className:
      "text-gray-7 border border-gray-7 hover:text-gray-8 active:text-black",
  },
  {
    color: "black",
    style: "textBTN",
    className: "text-gray-7 hover:text-gray-8 active:text-black",
  },
  {
    color: "error",
    style: "fill",
    className:
      "text-error bg-error-extralight hover:bg-error-light hover:text-error-extralight active:bg-error active:text-error-extralight",
  },
  {
    color: "error",
    style: "stroke",
    className:
      "text-error-light border border-error-light hover:text-error active:text-error",
  },
  {
    color: "error",
    style: "textBTN",
    className: "text-error hover:text-error-light active:text-error",
  },
];

export default function Button({
  children,
  color = "primary",
  style = "fill",
  iconLeft = null,
  iconRight = null,
  onClick = (e) => {},
  type = "text",
    className=""
}) {
  const targetStyle = data.find((i) => i.color === color && i.style === style);
  return (
    <button
      type={type}
      className={`cursor-pointer select-none active:scale-95 flex justify-center items-center gap-1 md:gap-2 py-2 rounded-sm  ${className} ${targetStyle.className}`}
      onClick={(e) => {
        onClick(e);
      }}
    >
      <div className="">{iconRight}</div>
      <p className={``}>{children}</p>
      <div className="">{iconLeft}</div>
    </button>
  );
}
