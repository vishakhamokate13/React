import { createRoot } from 'react-dom/client';
import './index.css';
import profile from './assets/profile.jpg';
const root = createRoot(document.getElementById('root'));

function Introduction(props){
  const {name, age, city , sub} = props
  return(
    <div className="card">
    <div className="mainContanier">
  
      <h1 className="funcHeading">Hi, I am {name} from {city}.
        I am {age} years old.<br/>I'm currently learning {sub}.
        <br/>I enjoy building projects and improving my programming skills.</h1>
    </div>
     <div className="img">
        <img src={profile} alt="Profile" />
    </div>


    </div>
  )
}
root.render( <Introduction name="Vishakha" city="Ahilyanagar" age="20" sub="React"/>)