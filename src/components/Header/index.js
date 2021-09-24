import './header.css';
import { Link } from "react-router-dom";

export default function Heard() {
 return (
   <header>
       <Link className="button" to="/">Problema 1</Link>
       <Link className="button" to="/problem-two">Problema 2</Link>
       <Link className="button" to="/problem-three">Problema 3</Link>
   </header> 
 );
}