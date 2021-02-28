import resume from './images/sample_resume.jpg';
const Resume = () => {
    return (
        <div class="bg-white w-9/12 m-auto">
        <br/>
    <div class="m-10 text-center text-gray-500 bg-white w-6/12 m-auto hover:text-white hover:bg-gray-500 2xl:w-3/12">
    <a href="https://cultivatedculture.com/wp-content/plugins/cultivated-culture-resume-builder/assets/img/templates/template2.jpg" download="ResumeExample" 
    class="text-3xl font-semibold">
     Download Resume
       </a>
    </div>
    <div class="flex justify-center">
    <img class="" src={resume}/>
    </div>
    </div>

    );
}

export default Resume;