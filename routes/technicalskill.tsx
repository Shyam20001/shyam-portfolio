// routes/technicalskill.tsx
import { useEffect, useState } from 'react';
import { fetchGitHubData } from "~/utils/fetchGitHubData.ts";

const AboutMe = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchGitHubData('technicalskill.json').then(setData).catch(console.error);
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <section className="p-4">
      <h1 className="text-2xl font-bold">{data.name}</h1>
      <p>{data.description}</p>
    </section>
  );
};

export default AboutMe;
