import { SparklesPreview } from "./ui/sparkles/Sparkle";

const Projects = () => {
  return (
    <div className="flex flex-col">
      <SparklesPreview />
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 gap-10 px-10">
          <div>
            <img src="/public/mo1.webp" className="rounded-lg" alt="" />
          </div>
          <div>
            <img src="/public/mo1.webp" className="rounded-lg" alt="" />
          </div>
          <div>
            <img src="/public/mo1.webp" className="rounded-lg" alt="" />
          </div>
          <div>
            <img src="/public/mo1.webp" className="rounded-lg" alt="" />
          </div>
          <div>
            <img src="/public/mo1.webp" className="rounded-lg" alt="" />
          </div>
          <div>
            <img src="/public/mo1.webp" className="rounded-lg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
