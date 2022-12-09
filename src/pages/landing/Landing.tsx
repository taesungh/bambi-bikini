import { Countdown, NewsletterForm } from "components";
import Intro from "./Intro";

import "./Landing.css";

function Landing() {
	return (
		<div className="landing">
			<Intro />
			<Countdown />
			<NewsletterForm />
		</div>
	);
}

export default Landing;
