const namesWeek = [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
];

const jalaliMonth = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
]
// ==== Leap Year Checks ====

// Check if a Gregorian year is leap
export function isGregorianLeap(gregorianYear) {
    return gregorianYear % 4 === 0 && (gregorianYear % 100 !== 0 || gregorianYear % 400 === 0);
}

// Check if a Jalali year is leap
export function isJalaliLeap(jalaliYear) {
    const yearIn33YearCycle = jalaliYear % 33;
    return [1, 5, 9, 13, 17, 22, 26, 30].includes(yearIn33YearCycle);
}

// Check if a Hijri year is leap
export function isHijriLeap(hijriYear) {
    return [2, 5, 7, 10, 13, 16, 18, 21, 24, 26, 29].includes(hijriYear % 30);
}

// ==== Conversion export Functions ====
const getGregorianDaysInMonth = (year) => {
    const gregorianDaysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    if (isGregorianLeap(year)) gregorianDaysInMonth[1] = 29;
    return gregorianDaysInMonth
}
// [-------------------------------------------------------------]
const getGregorianDayOfYear = (year, month, day) =>{
    return day + getGregorianDaysInMonth(year).slice(0, month-1).reduce((totalDay, days) => totalDay + days, 0);
}
// [-------------------------------------------------------------]
const getJalaliDaysInMonth = (year) => {
    const jalaliDaysInMonth = [31,31,31,31,31,31,30,30,30,30,30,29];
    if (isJalaliLeap(year)) jalaliDaysInMonth[11] = 30;
    return jalaliDaysInMonth
}
// [-------------------------------------------------------------]
const getJalaliDayOfYear = (year, month, day) => {
    return day + getJalaliDaysInMonth(year).slice(0, month-1).reduce((totalDay, days) => totalDay + days, 0);
}
// [-------------------------------------------------------------]
const getOffsetDayJalali = (year) =>{
    const jDate = convertJalaliToGregorian(year,1,1)
    const gDate = new Date(jDate.year, jDate.month-1, jDate.day,12,0,0)
    return (gDate.getDay()+1)%7
}
const getNumberWeek = (year, month, day) =>{
    const totalDay = getJalaliDayOfYear(year, month, day)
    const offset = getOffsetDayJalali(year)
    let numberWeek = Math.floor((totalDay+offset)/7)
    if ((totalDay+offset)%7!==0) ++numberWeek
    return numberWeek
}
getNumberWeek(1404,12,29)
// [-------------------------------------------------------------]
export function convertGregorianToJalali(inputGregorianYear, inputGregorianMonth, inputGregorianDay) {
    // [-------------------------------------------------------------]
    const gregorianDate = new Date(inputGregorianYear, inputGregorianMonth-1, inputGregorianDay)
    const weekNumber = (gregorianDate.getDay() +1) % 7
    let outputJalaliYear = inputGregorianYear - 621;
    // [-------------------------------------------------------------]
    const gregorianDayOfYear = getGregorianDayOfYear(inputGregorianYear, inputGregorianMonth, inputGregorianDay)
    const marchStartOffset = isGregorianLeap(inputGregorianYear) ? 20 : 21;
    const gregorianDaysInMonth = getGregorianDaysInMonth(inputGregorianYear)
    const jalaliDaysInMonth = getJalaliDaysInMonth(outputJalaliYear)
    let jalaliDayOfYear = gregorianDayOfYear - gregorianDaysInMonth[0] - gregorianDaysInMonth[1] - marchStartOffset;
    if (jalaliDayOfYear < 0) {
        outputJalaliYear -= 1;
        jalaliDayOfYear += isJalaliLeap(outputJalaliYear) ? 366 : 365;
    }
    // [-------------------------------------------------------------]
    let outputJalaliMonth = 0;
    while (outputJalaliMonth < 11 && jalaliDayOfYear >= jalaliDaysInMonth[outputJalaliMonth]) {
        jalaliDayOfYear -= jalaliDaysInMonth[outputJalaliMonth];
        outputJalaliMonth++;
    }
    const outputJalaliDay = jalaliDayOfYear + 1;
    return { year: outputJalaliYear, month: outputJalaliMonth + 1, day: outputJalaliDay, weekDayName:namesWeek[weekNumber], weekNumber , monthName:jalaliMonth[outputJalaliMonth] };
}

// Convert Jalali to Gregorian
export function convertJalaliToGregorian(inputJalaliYear, inputJalaliMonth, inputJalaliDay) {
    // [-------------------------------------------------------------]
    let approximateGregorianYear = inputJalaliYear + 621;
    let outputGregorianYear = approximateGregorianYear;
    // [-------------------------------------------------------------]
    let gregorianMonthDays = getGregorianDaysInMonth(outputGregorianYear)
    // [-------------------------------------------------------------]
    const marchStartOffset = isGregorianLeap(approximateGregorianYear) ? 19 : 20;
    const jalaliDayOfYear = getJalaliDayOfYear(inputJalaliYear, inputJalaliMonth, inputJalaliDay)
    let gregorianDayOfYear = jalaliDayOfYear + marchStartOffset + gregorianMonthDays[0] + gregorianMonthDays[1];
    const totalJalaliDaysInYear = isJalaliLeap(inputJalaliYear) ? 366 : 365;
    if (gregorianDayOfYear > totalJalaliDaysInYear) {
        gregorianDayOfYear -= totalJalaliDaysInYear;
        outputGregorianYear += 1;
        gregorianMonthDays = getGregorianDaysInMonth(outputGregorianYear)
    }
    // [-------------------------------------------------------------]
    let outputGregorianMonth = 0;
    while (outputGregorianMonth < 12 && gregorianDayOfYear > gregorianMonthDays[outputGregorianMonth]) {
        gregorianDayOfYear -= gregorianMonthDays[outputGregorianMonth];
        outputGregorianMonth++;
    }
    const outputGregorianDay = gregorianDayOfYear;
    return { year: outputGregorianYear, month: outputGregorianMonth + 1, day: outputGregorianDay };
}


export function getWeekInMonthJlali(jalaliYear, jalaliMonth){
    const jalaliDaysInMonth = getJalaliDaysInMonth(jalaliYear)
    const jalaliDaysInMonthPre = getJalaliDaysInMonth(jalaliYear-1)
    const lenghtPreMonth = jalaliMonth===1?jalaliDaysInMonthPre[11]:jalaliDaysInMonth[jalaliMonth-2]
    const lenghtCurrentMonth = jalaliDaysInMonth[jalaliMonth-1]
    const lenghtProMonth = jalaliDaysInMonth[jalaliMonth===12?1:jalaliMonth]
    let sDay = 1
    let sProDay = 1
    const preMonth = jalaliMonth===1 ? 12 : jalaliMonth-1
    const proMonth = jalaliMonth===12 ? 1 : jalaliMonth+1
    let weeks = []
    let sWeek = 1
    while(sWeek<7){
        // [-------------------------------------------------------------]
        const date = convertJalaliToGregorian(jalaliYear,jalaliMonth,sDay)
        const gStartDate = new Date(date.year, date.month-1, date.day)
        let numWeekDay = (gStartDate.getDay()+1)%7
        let week = []
        // [-------------------------------------------------------------]
        if (numWeekDay>0 && sWeek===1){
            let preMonthDay = -numWeekDay
            let startJalaliDayInPreMonthInWeek = lenghtPreMonth+preMonthDay 
            const numberWeek = getNumberWeek(jalaliYear,jalaliMonth,1)
            while (preMonthDay<0){
                startJalaliDayInPreMonthInWeek++
                week.push({
                    year:jalaliMonth===1?jalaliYear-1:jalaliYear,
                    month:preMonth,
                    day:startJalaliDayInPreMonthInWeek,
                    numberWeekDay:preMonthDay+numWeekDay,
                    nameWeekDay:namesWeek[preMonthDay+numWeekDay],
                    numberWeek,
                })
                preMonthDay++
            }
            while(numWeekDay<7){
                week.push({
                    year:jalaliYear,
                    month:jalaliMonth,
                    day:sDay,
                    numberWeekDay:numWeekDay,
                    nameWeekDay:namesWeek[numWeekDay],
                    numberWeek,
                })
                sDay++
                numWeekDay++
            }
            weeks.push(week)
        }
        // [-------------------------------------------------------------]
        if(numWeekDay===0 && lenghtCurrentMonth-sDay+1>=7 && sDay<=lenghtCurrentMonth){
            const numberWeek = getNumberWeek(jalaliYear,jalaliMonth,sDay)
            while(numWeekDay<7){
                week.push({
                    year:jalaliYear,
                    month:jalaliMonth,
                    day:sDay,
                    numberWeekDay:numWeekDay,
                    nameWeekDay:namesWeek[numWeekDay],
                    numberWeek,
                })
                sDay++
                numWeekDay++
            }
            weeks.push(week)
        }
        // [-------------------------------------------------------------]
        if (numWeekDay===0 && !(lenghtCurrentMonth-sDay+1>=7)){
            let _countDayToEndMonth = lenghtCurrentMonth-sDay+1
            let countDayInWeekInProMonth = 7-(lenghtCurrentMonth-sDay+1)
            const numberWeek = getNumberWeek(jalaliYear,proMonth,sProDay)
            while(_countDayToEndMonth>0){
                week.push({
                    year:jalaliYear,
                    month:jalaliMonth,
                    day:sDay,
                    numberWeekDay:numWeekDay,
                    nameWeekDay:namesWeek[numWeekDay],
                    numberWeek,
                })
                sDay++
                numWeekDay++
                _countDayToEndMonth--
            }
            while(countDayInWeekInProMonth>0){
                week.push({
                    year:jalaliMonth===12?jalaliYear+1:jalaliYear,
                    month:proMonth,
                    day:sProDay,
                    numberWeekDay:numWeekDay,
                    nameWeekDay:namesWeek[numWeekDay],
                    numberWeek,
                })
                sProDay++
                numWeekDay++
                countDayInWeekInProMonth--
            }
            weeks.push(week)
        }
        sWeek++
    } 
    return weeks
}

// console.log(getWeekInMonthJlali(1404,9))



// // ==== Test Runner ====
// export function runConversionTest(inputGregorianYear, inputGregorianMonth, inputGregorianDay) {
//     const jalaliResult = convertGregorianToJalali(inputGregorianYear, inputGregorianMonth, inputGregorianDay);
//     const backToGregorianResult = convertJalaliToGregorian(jalaliResult.year, jalaliResult.month, jalaliResult.day);

//     console.log("------------------------------------------------");
//     console.log(`Gregorian Input: ${inputGregorianYear}-${inputGregorianMonth}-${inputGregorianDay}`);
//     console.log(`→ Jalali Output: ${jalaliResult.year}-${jalaliResult.month}-${jalaliResult.day}`);
//     console.log(`→ Back to Gregorian: ${backToGregorianResult.year}-${backToGregorianResult.month}-${backToGregorianResult.day}`);
// }

// console.log("=== CLEAN TEST RUN ===");

// [
//     [2025,11,15],
//     [2025,1,1],
//     [2024,3,20],
//     [2024,3,21],
//     [2020,2,29],
//     [2023,3,21],
//     [2023,3,20],
//     [2030,3,20],
//     [2030,3,21],
//     [2000,1,1],
//     [1996,2,29],
//     [1980,3,20],
//     [1980,3,21],
//     [1900,3,21],
//     [1600,3,21]
// ].forEach(date => runConversionTest(...date));