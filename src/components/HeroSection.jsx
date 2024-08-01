import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl font-bold tracking-tight text-center sm:text-6xl lg:text-7xl">
      Tech Solutions
        <span className="text-transparent bg-gradient-to-r from-blue-500 to-neutral-100 bg-clip-text">
          {" "}
           for Digital Talent
        </span>
      </h1>
      <p className="max-w-4xl mt-10 text-lg text-center text-neutral-500">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="px-4 py-3 mx-3 rounded-md bg-gradient-to-r from-blue-800 to-neutral-600"
        >
          Start for free
        </a>
        <a href="#" className="px-4 py-3 mx-3 border rounded-md">
          Documentation
        </a>
      </div>
      <div className="flex justify-center mt-10">
        <video
          autoPlay
          loop
          muted
          className="w-1/2 mx-2 my-4 border border-blue-700 rounded-lg shadow-sm shadow-blue-400"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="w-1/2 mx-2 my-4 border border-blue-700 rounded-lg shadow-sm shadow-blue-400"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
