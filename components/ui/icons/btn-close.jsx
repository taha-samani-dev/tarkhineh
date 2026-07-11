export default function BtnClose({ className = "" }) {
  const classDefault =
    "bg-gray-7 rounded-2xl w-[2px] md:w-[4px] absolute md:h-8 lg:h-10 h-6";
  return (
    <>
      <div className={`rotate-45 ${classDefault} ${className}`}></div>
      <div className={`-rotate-45 ${classDefault} ${className}`}></div>
    </>
  );
}
