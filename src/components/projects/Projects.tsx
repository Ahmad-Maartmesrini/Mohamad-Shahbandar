import { SmartImage } from "../ui/image/SmartImage";
import { SparklesPreview } from "../ui/sparkles/Sparkle";
import { mo2 } from "./imports";

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col my-8">
      <SparklesPreview />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white m-5">Placeholder images!</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 gap-10 px-10">
          <div>
            <SmartImage url={mo2} />
          </div>
          <div>
            <SmartImage url={mo2} />
          </div>
          <div>
            <SmartImage url={mo2} />
          </div>
          <div>
            <SmartImage url={mo2} />
          </div>
          <div>
            <SmartImage url={mo2} />
          </div>
          <div>
            <SmartImage url={mo2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
