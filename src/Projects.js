import minesweeper from './images/minesweeper_icon.png';
import pakman from './images/pakman_icon.png';
import pagerank from './images/pagerank_icon.jpeg';
 
const Projects = () => {
    return (
        <div class="bg-white border-t border-gray-300">
             <h1 class="text-center text-gray-500 text-lg font-semibold">Projects</h1>
             <section class="px-3 pt-12 pb-0 mx-auto">
                 <div class="flex justify-center">
                    <div class="text-gray-800">
                        <div class="w-60">
                            <img class="rounded" src={minesweeper}/>
                        </div>
                        <div>
                            <h4 class="text-2xl font-bold font-header">Minesweeper</h4>
                            <p class="block">Built a minsweeper game. Learned about pointers and memory allocation in C++.</p>
                            <div class="flex flex-wrap">
                                <span class="px-2 py-1 mb-2 text-gray-700 bg-gray-200 rounded">Course Project </span>
                                <span class="mx-1"></span><span class="px-2 py-1 mb-2 text-gray-700 bg-gray-200 rounded">Game </span>
                                <span class="mx-1"></span><span class="px-2 py-1 mb-2 text-gray-700 bg-gray-200 rounded">C++ </span>
                                <span class="mx-1"></span><span class="px-2 py-1 mb-2 text-gray-700 bg-gray-200 rounded">SFML </span>
                            </div>
                        </div>
                        <div>
                    <div class="text-gray-800">
                        <div class="w-60">
                            <img class="rounded" src={pakman}/>
                        </div>
                        <div>
                            <h4 class="text-2xl font-bold font-header">Pakman</h4>
                            <p class="block mb-6"> Learned about object-oriented programming.</p>
                            <div class="flex flex-wrap">
                                <span class="px-2 py-1 mb-2 text-gray-700 bg-gray-200 rounded">Course Project </span>
                                <span class="mx-1"></span><span class="px-2 py-1 mb-2 text-gray-700 bg-gray-200 rounded">Game </span>
                                <span class="mx-1"></span><span class="px-2 py-1 mb-2 text-gray-700 bg-gray-200 rounded">Java </span>
                            </div>
                        </div>
                    </div>
                    <div class="text-gray-800">
                        <div class="w-60">
                            <img class="rounded" src={pagerank}/>
                        </div>
                        <div>
                            <h4 class="text-2xl font-bold font-header">PageRank</h4>
                            <p class="block"> Learned about the page rank algorithm and data structures.</p>
                            <div class="flex flex-wrap">
                                <span class="px-2 py-1 mb-2 text-gray-700 bg-gray-200 rounded">Course Project </span>
                                <span class="mx-1"></span><span class="px-2 py-1 mb-2 text-gray-700 bg-gray-200 rounded">Data Structures </span>
                                <span class="mx-1"></span><span class="px-2 py-1 mb-2 text-gray-700 bg-gray-200 rounded">C++ </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
         );
}
export default Projects;
 

