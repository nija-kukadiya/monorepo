"use client";

import { useEffect, useState } from "react";
import {
  createNewDeployment,
  createNewProject,
  getDeployments,
  getRepo
} from "./api/generate-app/vercel";

export default function Home() {
  const [slug, setSlug] = useState(null);
  useEffect(() => {
    const pageInit = async () => {
      const data = await getDeployments();
      const repo = await getRepo();
      if(repo){
        setSlug(repo.slug);
      }
    };
    pageInit();
  }, []);

  const generateClientApp = async () => {
    const data = await createNewProject({ slug });
  };

  return (
    <div className="text-center text-3xl pt-8">
      <h1>Welcome to Product App</h1>
      <button
        className="text-lg font-medium rounded p-6 mt-8 bg-orange-300"
        onClick={() => generateClientApp()}
      >
        Generate client
      </button>
    </div>
  );
}
