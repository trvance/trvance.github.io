import * as S from './Tab.styles'


const Tab = (props) => {

	return (
		<S.TabBackground ref={props.ref} href={props.href} onClick={props.onClick} backgroundColor={props.backgroundColor}>
			<S.TabText fontColor={props.fontColor}>
				{props.children}
			</S.TabText>
		</S.TabBackground>
	)
}

export default Tab