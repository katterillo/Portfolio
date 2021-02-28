import minesweeper from './images/minesweeper_icon.png';
import pakman from './images/pakman_icon.png';
import pagerank from './images/pagerank_icon.jpeg';
const Projects = () => {
    return (
        <div>
            <h1 class="text-center  text-gray-500 text-lg font-semibold">Projects</h1>
            <div class="grid grid-cols-3 gap-4">
                <div class="inline-block align-top text-center mx-8">
                    <img class="w-35 rounded hover:opacity-70" src={minesweeper}/>
                    <div>
                            <span class="block text-gray-500 text-lg font-semibold">Minesweeper - C++</span>
                    </div>
                </div>
                <div class="inline-block align-top text-center mx-8">
                    <img class="w-35 rounded  hover:opacity-70" src={pakman}/>
                    <span class="block text-gray-500 text-lg font-semibold">Pakman - Java</span>
                </div>
                <div class="inline-block align-top text-center mx-8">
                    <img class="w-35 rounded  hover:opacity-70" src={pagerank}/>
                    <span class="block text-gray-500 text-lg font-semibold">Page Rank - C++</span>
                </div>
            </div>
        </div>
    );
}
export default Projects;