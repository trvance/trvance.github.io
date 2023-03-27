import * as S from './Tab.styles'
import HomeIcon from '../../../../assets/navIcons/home.png'


const Tab = ({selected, onClick, icon, children}) => {
  return (
		<S.Tab onClick={onClick} selected={selected}>
			<S.Icon src={icon} selected={selected} ></S.Icon>
			{children}
		</S.Tab>
	) 
}

export default Tab