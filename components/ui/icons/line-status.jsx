export const LineStatus = ({score=0, className="",id='', size=204}) => {

    return (
        <svg className={`w-${(size/4).toString()} h-2  transition-all duration-500 ease ${className}`} viewBox={`0 0 ${(size).toString()} 1`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1={((size)-0.5).toString()} y1="0.5" x2="0.5" y2="0.5" stroke={`url(#line${id})`} strokeLinecap="round" strokeDasharray="4 4"/>
            <defs>
                <linearGradient id={`line${id}`} x1={size.toString()} y1="0" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset={(score/100).toString()} stopColor="#417F56"/>
                    <stop offset={((score/100)).toString()} stopColor="#CBCBCB"/>
                </linearGradient>
            </defs>
        </svg>
    )
}
