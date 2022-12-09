import { Countdown, NewsletterForm } from "components";

import "./Landing.css";

function Landing() {
	return (
		<div className="landing">
			<Countdown />
			<NewsletterForm />
		</div>
	);
}

export default Landing;
