import * as S from './Tab.styles'
import HomeIcon from '../../../../assets/navIcons/homefilled.png'


const Tab = (props) => {

	return (
		<S.TabBackground ref={props.ref} href={props.href} onClick={props.onClick} backgroundColor={props.backgroundColor}>
			<S.TabText fontColor={props.fontColor}>
				{props.children}
			</S.TabText>
			<S.Icon isSelected={props.isSelected} src={props.icon}/>
		</S.TabBackground>
	)
}

export default Tab