import minesweeper from './images/minesweeper_icon.png';
import pakman from './images/pakman_icon.png';
import pagerank from './images/pagerank_icon.jpeg';

const Projects = () => {
    return (
        <div>
        <br />
            <h1 class="text-center text-gray-500 text-2xl font-semibold">Projects</h1>
            <div class="flex flex-col justify-center items-center">
                <div class="inline-block align-top text-center mx-6 shadow">
                    <center>
                    <img class="h-28 rounded" src={minesweeper}/>
                            <span class="block text-gray-500 text-2xl font-semibold">
                                Minesweeper - C++
                            </span>
                            <span class="block text-gray-500 text-lg font-semibold break-words w-9/12">
                            Minesweeper was a course project I completed at the University of Florida. Through it, I learned
                            about pointers and used the Simple and Fast Multimedia Library for the first time.
                            </span>
                            </center>
                </div>
                <div class="inline-block align-top text-center mx-6 shadow">
                <center>
                    <img class="h-28 rounded" src={pakman}/>
                    <span class="block text-gray-500 text-lg font-semibold">Pakman - Java</span>
                    <span class="block text-gray-500 text-lg font-semibold break-words w-9/12">
                            Minesweeper was a course project I completed at the University of Florida. Through it, I learned
                            about pointers and used the Simple and Fast Multimedia Library for the first time.
                            </span>
                            </center>
                </div>
                <div class="inline-block align-top text-center mx-6 shadow">
                <center>
                    <img class="w-35 rounded" src={pagerank}/>
                    <span class="block text-gray-500 text-lg font-semibold">Page Rank - C++</span>
                    <span class="block text-gray-500 text-lg font-semibold break-words w-9/12">
                            Minesweeper was a course project I completed at the University of Florida. Through it, I learned
                            about pointers and used the Simple and Fast Multimedia Library for the first time.
                            </span>
                            </center>
                </div>
            </div>
        </div> 
    );
}
export default Projects;

function Minesweeper(){
    return(
        <div>
            <h2>Minesweeper</h2>
        </div>
    );
}