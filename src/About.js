const About = () => {
    return (
    <div className="Home">
    <h1 class="text-center"> About Me </h1>
        <div class="flex grid gap-8 grid-cols-2 gap-30 space-x-9">
            <div class="border-solid border-4 border-black bg-gray-300">Hi! My name is Danielle. I am a second-year CpE major at the University of Florida. In my free time, I like to create 
            applications that create world peace. I am the best coder in the world and you should hire me :)
            I enjoy _____ and ____ in my free time. I also have particpated in organizations like _______. I am 
            studying to make an impact on the world. Tesla, Inc. is an American electric vehicle and clean energy 
            company based in Palo Alto, California. Tesla's current products include electric cars, battery energy 
            storage from home to grid scale, solar panels and solar roof tiles, as well as other related products 
            and services. Source: Wikipedia</div>
            <img class="w-32 h-32 md:w-90 md:h-auto ml-35" src="https://rehrealestate.com/wp-content/uploads/2015/08/facebook-default-no-profile-pic-girl.jpg"/>

        </div>
    </div>
    );
}

export default About;