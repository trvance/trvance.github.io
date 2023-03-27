import * as S from './AboutMePage.styles'
import { motion } from 'framer-motion'
import GithubIcon from '../../assets/socialIcons/GitHub.png'
import GmailIcon from '../../assets/socialIcons/Gmail Logo.png'
import InstagramIcon from '../../assets/socialIcons/Instagram.png'
import LinkedInIcon from '../../assets/socialIcons/LinkedIn.png'
import ResumeIcon from '../../assets/socialIcons/Resume.png'
import Resume from '../../assets/resume/Tyler_Vance_Resume.pdf'


const AboutMePage = () => {
	return (
		<S.AboutMePage id='about'>
			<S.HeaderContainer>
				<motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
					<S.Title>About Me</S.Title>
				</motion.div>

				<motion.div initial={{y: '-40px', opacity: 0}} animate={{y: '0px', opacity: 1}} transition={{delay: .5}}>
					<S.SubHeader>Nice to meet <span>you</span>.</S.SubHeader>
				</motion.div>
			</S.HeaderContainer>

			<S.MainContainer>
				<S.ContentContainer>
					<p><span>Hello</span>. I'm Tyler Vance (obviously). Just your friendly coder/developer/software engineer guy. After getting my computer science degree I decided to move to Atlanta to start my career as a software engineer. Over the two years since then, I've met my amazing fiance, collected more Lego sets than I want to admit, and even renovated our townhouse. </p>
					<p><span>If you haven't already</span>, you should checkout out my projects. I've picked some projects that demostrate my creativity and skills while avoiding showing ANOTHER to-do app or clone site... If you're curious about the creation of any of them or just want to know EVEN more about me, please feel free to contact me!</p>
				</S.ContentContainer>

				{/* Social Links */}
				<S.SocialContainer style={{borderRight: '5px solid #11998e', paddingRight: '.5rem'}}>
					{/* Github */}
					<S.SocialLink href='https://www.github.com/trvance'>
						<S.SocialTitle>Github</S.SocialTitle>
						<S.Icon src={GithubIcon} />
					</S.SocialLink>

					{/* Instgram */}
					<S.SocialLink href='https://www.instagram.com/t.r.vance'>
						<S.SocialTitle>Instagram</S.SocialTitle>
						<S.Icon src={InstagramIcon} />
					</S.SocialLink>

					{/* Gmail */}
					<S.SocialLink href='mailto:tylerrichardvance@gmail.com'>
						<S.SocialTitle >Gmail</S.SocialTitle>
						<S.Icon src={GmailIcon} />
					</S.SocialLink>

					{/* LinkedIn */}
					<S.SocialLink href='https://www.linkedin.com/in/tyler-vance-29853126b/'>
						<S.SocialTitle>Linked In</S.SocialTitle>
						<S.Icon src={LinkedInIcon} />
					</S.SocialLink>

					{/* Resume */}
					<S.SocialLink href={Resume} target="_blank">
						<S.SocialTitle>Resume</S.SocialTitle>
						<S.Icon src={ResumeIcon} />
					</S.SocialLink>

				</S.SocialContainer>
			</S.MainContainer>

		</S.AboutMePage>
	)
}

export default AboutMePage