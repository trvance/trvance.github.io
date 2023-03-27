import './styles.css'
import { useState } from 'react'


const MenuButton = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = (event) => {
		setIsOpen(!isOpen)
	}

  return (
		<div class={isOpen ? 'toggle active' : 'toggle'} onClick={handleClick}>
			<span></span>
			<span></span>
			<span></span>
		</div>
	)
}

export default MenuButton