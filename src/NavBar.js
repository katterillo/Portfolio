const NavBar = () => {
    return (
    <div className="Navigation Bar">
        <div class="grid grid-cols-3 gap-4 text-center bg-gray-200 divide-x-4 divide-gray-300 divide-double"> 
            <div class="font-medium">Home</div>
            <div class="font-medium">About Me</div>
            <div class="font-medium">Projects</div>
        </div>
    </div>
    );
}

export default NavBar;