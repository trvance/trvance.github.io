import * as S from './Tab.styles'


const Tab = (props) => {
	const handleClick = () => {

	}

	return (
		<S.Tab ref={props.ref} href={props.href}>
			{props.children}
		</S.Tab>
	)
}

export default Tab