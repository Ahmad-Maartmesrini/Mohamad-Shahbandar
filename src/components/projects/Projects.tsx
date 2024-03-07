import { SparklesPreview } from "../ui/sparkles/Sparkle";
import { mo2 } from "./imports";

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col my-8">
      <SparklesPreview />
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 gap-10 px-10">
          <div>
            <img src={mo2} className="rounded-lg" alt="" />
          </div>
          <div>
            <img src={mo2} className="rounded-lg" alt="" />
          </div>
          <div>
            <img src={mo2} className="rounded-lg" alt="" />
          </div>
          <div>
            <img src={mo2} className="rounded-lg" alt="" />
          </div>
          <div>
            <img src={mo2} className="rounded-lg" alt="" />
          </div>
          <div>
            <img src={mo2} className="rounded-lg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
