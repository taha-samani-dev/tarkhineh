
export default function StarRate({ className = "", score = 0, numberStar = 5 }) {
    const rateStar = 100 / numberStar
    const countComplateStar = Math.floor(score/rateStar)
    const checkRate = (i) => {
        const s = (i < countComplateStar )?"100":(i===countComplateStar)?((score%rateStar)*numberStar).toString():"0"
        return s
    }
  return (
    <div dir="ltr" className={`flex`}>
    {Array.from({length:numberStar}).map((s, i)=>{
        return <svg
        key={i}
        className={className}
        viewBox="0 0 16 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.67676 5.56641L9.70508 5.65332H15.2236L10.833 8.84277L10.7588 8.89648L10.7871 8.98242L12.4639 14.1445L8.07324 10.9551L8 10.9014L7.92676 10.9551L3.53516 14.1445L5.21289 8.98242L5.24121 8.89648L5.16699 8.84277L0.776367 5.65332H6.29492L6.32324 5.56641L8 0.405273L9.67676 5.56641Z"
        fill={`url(#star-fill-${i})`}
        stroke="#CBCBCB"
        strokeWidth="0.25"
      />
      <defs>
        <linearGradient id={`star-fill-${i}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset={`${checkRate(i)}%`} stopColor="#F4B740" />
          <stop offset={`${checkRate(i)}%`} stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
    })}
    </div>

  );
}

