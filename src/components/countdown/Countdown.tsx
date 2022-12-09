import { useTimer } from "reactjs-countdown-hook";

import "./Countdown.css";

const LAUNCH_DATE = new Date("2023-03-17T09:00:00");

function Countdown() {
	const remainingSeconds = Math.floor((LAUNCH_DATE.getTime() - Date.now()) / 1000);
	const { days, hours, minutes, seconds } = useTimer(remainingSeconds);
	return (
		<div className="countdown">
			<CountdownCell value={days} label="days" />
			<CountdownCell value={hours} label="hours" />
			<CountdownCell value={minutes} label="minutes" />
			<CountdownCell value={seconds} label="seconds" />
		</div>
	);
}

interface CountdownCellProps {
	value: Number;
	label: string;
}

function CountdownCell({ value, label }: CountdownCellProps) {
	return (
		<div className="countdown-cell">
			<span className="countdown-value">{value.toString()}</span>
			<span className="countdown-label">{label}</span>
		</div>
	);
}

export default Countdown;
