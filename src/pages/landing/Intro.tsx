import logo from "assets/bambi-bikini-logo.png";

function Intro() {
	return (
		<div className="intro">
			<img className="logo" src={logo} alt="Bambi Bikini Logo" />
			<h1>Join the Waitlist</h1>
			<span className="subtitle">Coming Soon 2023</span>
		</div>
	);
}

export default Intro;
