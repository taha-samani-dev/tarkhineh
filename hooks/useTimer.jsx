import { useEffect, useState } from "react";

const starter = { days: 0, hours: 0, minutes: 2, seconds: 0 };
const end = { days: 0, hours: 0, minutes: 0, seconds: 0 };

export function useTimer(timeStart = { ...starter }) {
    const [time, setTime] = useState(timeStart);
    const [stop, setStop] = useState(true);
    const restart = () => {
        setTime(timeStart);
    }
    useEffect(() => {
        if (stop) return;

        const timer = setInterval(() => {
            setTime(prev => {
                let { days, hours, minutes, seconds } = prev;

                if (seconds > 0) {
                    seconds -= 1;
                } else if (minutes > 0) {
                    minutes -= 1;
                    seconds = 59;
                } else if (hours > 0) {
                    hours -= 1;
                    minutes = 59;
                    seconds = 59;
                } else if (days > 0) {
                    days -= 1;
                    hours = 23;
                    minutes = 59;
                    seconds = 59;
                } else {
                    setStop(true);
                    clearInterval(timer);
                    return { ...end };
                }

                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [stop]);

    return {time,setTime,stop, setStop,restart};
}
