import {Link} from 'react-router-dom'


const Footer = ({}) => {
  return(
    <footer>
      <p> My first react application </p>
      <p> copyright &copy; 2022 </p>
      <Link to= '/about'> About </Link>
    </footer>

  )
}

export default Footer
