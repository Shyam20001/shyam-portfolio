// routes/education.tsx
import { useEffect, useState } from 'react';
import { fetchGitHubData } from "~/utils/fetchGitHubData.ts";

const Education = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchGitHubData('education.json').then(setData).catch(console.error);
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <section className="p-4">
      <h1 className="text-2xl font-bold">Education</h1>
      <div>
        {data.education.map((item: any, index: number) => (
          <div key={index} className="mb-4 border-b border-gray-300 pb-4">
            <h2 className="text-xl font-semibold">{item.degree}</h2>
            <p className="text-md font-medium">{item.institution}</p>
            <p className="text-sm text-gray-600">Graduated: {item.graduationYear}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
