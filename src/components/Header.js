import Button from './Button'
import {useLocation} from 'react-router-dom'


const Header = ({title, onAdd, showAdd}) => {
  const location = useLocation()

  return(
    <header className='header'>
    <h1>{title}</h1>
    {location.pathname === '/' && (<Button color= {showAdd ? 'red' : 'blue'} text = {showAdd ? 'Close' : 'Add'} onClick = {onAdd}/>)}



    </header>
  )
}


Header.defaultProps = {
  title: 'Learning React',
}

// css in js
// <h1 style={headingStyle}>{title}</h1>
const headingStyle ={
  color: 'blue',
  backgroundColor : 'grey'
}

export default Header
