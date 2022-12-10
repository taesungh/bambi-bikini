import { useState, FormEvent } from "react";
import jsonp from "jsonp";

import "./NewsletterForm.scss";

const MAILCHIMP_SIGNUP_URL =
	"https://mc.us17.list-manage.com/signup-form/subscribe?u=6c795d6733fe0e6940234b0fe&id=003347e0f0";

function NewsletterForm() {
	const [emailAddress, setEmailAddress] = useState("");
	const [status, setStatus] = useState<string>();
	const [message, setMessage] = useState<string>();

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		// XHR cannot be used since that would cause a cross-origin request
		// instead, used JSONP endpoint, adapted from react-mailchimp-subscribe/src/index.js
		const params = new URLSearchParams(Object.entries({ EMAIL: emailAddress }));
		jsonp(MAILCHIMP_SIGNUP_URL, { param: `${params}&c` }, (error, data) => {
			if (error) {
				setStatus("error");
				setMessage(error.toString());
			} else if (data.result !== "success") {
				setStatus("error");
				setMessage(data.msg);
			} else {
				setStatus("success");
				setMessage(data.msg);
			}
		});
	};

	if (status === "success" && message !== "") {
		return (
			<div className="success-message">
				Thank you for signing up! Get ready for the best bikinis ever on March 17, 2023 :)
			</div>
		);
	}

	return (
		<div className="waitlist-signup">
			<p>Don&apos;t worry, we won&apos;t spam! Be the first to know when we launch 💖</p>
			<hr />
			<form
				action="//mc.us17.list-manage.com/signup-form/subscribe?u=6c795d6733fe0e6940234b0fe&amp;id=003347e0f0"
				acceptCharset="UTF-8"
				method="post"
				encType="multipart/form-data"
				onSubmit={handleSubmit}
			>
				<div className="form-row">
					<label htmlFor="mc-EMAIL" className="form-label">
						Email Address
					</label>
					<input
						type="email"
						className="form-input"
						name="EMAIL"
						id="mc-EMAIL"
						value={emailAddress}
						onChange={(e) => setEmailAddress(e.target.value)}
						required
					/>
				</div>
				<button className="btn-submit" type="submit">
					Join the Waitlist
				</button>
			</form>
			{status === "error" && (
				<div className="error-message">
					<p>Sorry, there was an issue processing your request. Please try again.</p>
				</div>
			)}
		</div>
	);
}

export default NewsletterForm;
