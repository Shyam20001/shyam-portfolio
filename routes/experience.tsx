// routes/experience.tsx
import { useEffect, useState } from 'react';
import { fetchGitHubData } from "~/utils/fetchGitHubData.ts";

const Experience = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchGitHubData('experience.json').then(setData).catch(console.error);
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <section className="p-4">
      <h1 className="text-2xl font-bold">Experience</h1>
      <div>
        {data.experiences.map((experience: any, index: number) => (
          <div key={index} className="mb-4 border-b border-gray-300 pb-4">
            <h2 className="text-xl font-semibold">{experience.title}</h2>
            <p className="text-md font-medium">{experience.company}</p>
            <p className="text-sm text-gray-600">{experience.dates}</p>
            <p>{experience.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
