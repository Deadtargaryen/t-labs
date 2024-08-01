import { CheckCircle2, TrendingUpIcon } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <section id="workflow">

    <div className="mt-20">
      <h2 className="mt-6 text-3xl font-semibold tracking-tighter text-center sm:text-5xl lg:text-6xl">
        Join our{" "}
        <span className="text-transparent bg-gradient-to-r from-neutral-200 to-blue-800 bg-clip-text">
          coding workflow
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full p-2 lg:w-1/2">
          <img src={codeImg} alt="Coding" />
        </div>
        <div className="w-full pt-12 lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="items-center justify-center w-10 h-10 p-2 mx-6 text-green-400 rounded-full bg-neutral-900">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Workflow;
