import github from './images/github_logo.png';
import linkedin from './images/linkedin_logo.png';
import mail from './images/mail_logo.png';

const ContactMe = () => {
    return (
        <div class="bg-white w-10/12 m-auto mt-6">
        <div>
        <br/>
        <h1 class="text-center text-3xl text-gray-500 font-semibold">Get in Touch</h1>
        <h2 class="text-center text-xl text-gray-500">Feel free to message me about anything. </h2>
        <div class="grid grid-cols-3 gap-0 place-items-center p-28">
        <a href="https://github.com/katterillo/Portfolio">
        <div class="w-32 hover:opacity-70 transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out">
          <img class="rounded" src={github}/>
          </div>
          </a>
          <a href="https://www.linkedin.com/in/danielle-silfa/">
          <div class="w-32 hover:opacity-70 transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out">
          <img class="rounded" src={linkedin}/>
          </div>
          </a>
          <a href="mailto:hello@hello.com?subject=Email Subject&body=Contents of email">
          <div class="w-32 hover:opacity-70 transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out">
          <img class="rounded" src={mail}/>
          </div>
          </a>
        </div>
        </div>
        </div>       
    );
}

export default ContactMe;