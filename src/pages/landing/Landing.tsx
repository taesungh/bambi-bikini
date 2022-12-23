import { Countdown, NewsletterForm } from "components";
import Intro from "./Intro";

import "./Landing.scss";

function Landing() {
	return (
		<div className="landing container">
			<Intro />
			<Countdown />
			<NewsletterForm />
		</div>
	);
}

export default Landing;
