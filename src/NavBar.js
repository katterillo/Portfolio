import {Link} from 'react-router-dom'; 
const NavBar = () => {
    return (
    <div className="Navigation Bar">
        <div class="grid grid-cols-4 gap-4 text-center bg-gray-200 divide-x-4 divide-gray-300 divide-double"> 
            <Link to='/'> <div class="font-medium">Home</div></Link>
            <Link to='/Projects'> <div class="font-medium">Projects</div></Link>
            <Link to='/Resume'><div class="font-medium">Resume</div></Link>
            <Link to='/ContactMe'> <div class="font-medium">Contact Me</div></Link>
        </div>
    </div>
    );
}

export default NavBar;