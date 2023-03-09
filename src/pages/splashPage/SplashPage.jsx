import * as S from './SplashPage.styles'
import Me from '../../assets/Me.png'
import TextButton from '../../components/buttons/textButton/TextButton'
import { motion } from 'framer-motion'


const SplashPage = () => {
	return(
		<S.SplashPage id='splash'>
			{/* Name and Picture Row */}
			<S.FlexRow>
				<S.Name>Tyler</S.Name>
				<S.Me src={Me}/>
				<S.Name>Vance</S.Name>
			</S.FlexRow>

			{/* Catch Phrase */}
			<S.OverlappingText>
				<p><S.GradientText>Incredible</S.GradientText>Developer</p>
				<p><S.GradientText>Incredibler</S.GradientText>Person</p>
			</S.OverlappingText>

			{/* Scroll Indicator/Button */}
				<S.ButtonContainer 
					as={motion.div} 
					initial={{ opacity: 0 }} 
					animate={{ opacity: 1 }} 
					transition={{duration: 2}}
				>
					<TextButton>Scroll down to see why!</TextButton>
				</S.ButtonContainer>
		</S.SplashPage>
	)
}

export default SplashPage