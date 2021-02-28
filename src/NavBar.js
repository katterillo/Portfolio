import {Link} from 'react-router-dom'; 
const NavBar = () => {
    return (
    <div className="Navigation Bar">
       <Link to='/'><h1 class="text-blue-500 text-center text-7xl font-sans m-6"> Danielle Silfa </h1></Link>
        <div class="grid grid-cols-4 gap-4 text-center bg-gray-200 divide-x-4 divide-gray-300 divide-double"> 
            <Link to='/'> <div class="font-medium hover:bg-gray-300">Home</div></Link>
            <Link to='/Projects'> <div class="font-medium hover:bg-gray-300">Projects</div></Link>
            <Link to='/Resume'><div class="font-medium hover:bg-gray-300">Resume</div></Link>
            <Link to='/ContactMe'> <div class="font-medium hover:bg-gray-300">Contact Me</div></Link>
        </div>
    </div>
    );
}

export default NavBar;