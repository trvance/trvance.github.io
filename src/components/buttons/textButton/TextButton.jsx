import * as S from './TextButton.styles'


const TextButton = (props) => {
	return(
		<S.TextButton onClick={props.onClick}>
			{props.children}
		</S.TextButton>
	)
}

export default TextButton