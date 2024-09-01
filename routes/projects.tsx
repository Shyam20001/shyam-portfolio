// routes/projects.tsx
import { Head } from "aleph/react";
import { useEffect, useState } from "react";
import { fetchGitHubData } from "~/utils/fetchGitHubData.ts";

const Projects = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchGitHubData("projects.json").then(setData).catch(console.error);
  }, []);

  if (!data) return <div className="p-4 text-center">Loading...</div>;

  return (
    <div className="w-screen flex flex-col items-center justify-center">
      <Head>
        <title>Projects - Shyam. M</title>
        <meta
          name="description"
          content="Explore the projects developed by Shyam. M, showcasing skills in Node.js and web development."
        />
        {/* Preload the JSON file */}
        <link rel="preload" href="https://raw.githubusercontent.com/Shyam20001/shyam-portfolio/main/projects.json" as="fetch" crossOrigin="anonymous" />
        {/* Preload any fonts or key assets */}
      </Head>
      <section className="p-4 w-full max-w-screen-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Projects</h1>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.projects.map((project: any, index: number) => (
            <div
              key={index}
              className="bg-white border rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200"
              role="region"
              aria-labelledby={`project-title-${index}`}
            >
              <h2
                id={`project-title-${index}`}
                className="text-xl font-semibold mb-2"
              >
                {project.title}
              </h2>
              <p className="text-sm mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View project: ${project.title}`}
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;

