import icon_facebook from "assets/icons/facebook.svg";
import icon_instagram from "assets/icons/instagram.svg";
import icon_tiktok from "assets/icons/tiktok.svg";

import "./Footer.scss";

// const SURVEY_LINK = "https://forms.gle/oqP2Lua5w4wrV14X6";

interface SocialIconProps {
	icon: string;
	label: string;
}

function SocialIcon({ icon, label }: SocialIconProps) {
	return <img className="social-icon" width="32px" height="32px" src={icon} alt={label} />;
}

function Footer() {
	return (
		<footer className="container">
			<p>
				<a href="https://linktr.ee/bambibikini">
					Take our survey for a chance to win a <strong>FREE</strong> bikini!
				</a>
			</p>
			<div>
				<a href="https://www.facebook.com/shopbambibikini/">
					<SocialIcon icon={icon_facebook} label="Facebook" />
				</a>
				<a href="https://www.instagram.com/bambibikini/">
					<SocialIcon icon={icon_instagram} label="Instagram" />
				</a>
				<a href="https://www.tiktok.com/@bambibikini">
					<SocialIcon icon={icon_tiktok} label="TikTok" />
				</a>
			</div>
		</footer>
	);
}

export default Footer;
