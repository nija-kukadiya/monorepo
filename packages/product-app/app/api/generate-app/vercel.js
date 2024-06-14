import { newDeployment, newProject } from "@/app/lib/const";

const token = process.env.NEXT_PUBLIC_VERCEL_ACCESS_TOKEN;
const teamId = process.env.NEXT_PUBLIC_VERCEL_TEAM_ID;

export const getDeployments = async (req, res) => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_BASE_URL}/v6/deployments?teamId=${teamId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      },
      method: "GET"
    }
  );
  const data = await result.json();
  return data;
};

export const createNewProject = async (req, res) => {
    const slug = req.slug;
    const result = await fetch(
        `${process.env.NEXT_PUBLIC_VERCEL_BASE_URL}/v10/projects?slug=${slug}&teamId=${teamId}`,
        {
        headers: {
            Authorization: `Bearer ${token}`
        },
        method: "POST",
        body: JSON.stringify(newProject)
        }
    );
    const data = await result.json();
    await createNewDeployment({ slug });
    return data;
    
}

export const createNewDeployment = async (req, res) => {
    const slug = req.slug;
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_VERCEL_BASE_URL}/v13/deployments?forceNew=0&skipAutoDetectionConfirmation=0&slug=${slug}&teamId=${teamId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
        method: "POST",
        body: JSON.stringify(newDeployment)
      }
    );
    const data = await result.json();
    res.status(200).json(data);
  };

  export const getRepo = async (req, res) => {
    const url = 'https://github.com/sagar-vaghela/product-monorepo-poc';
    const params = new URLSearchParams({ url });
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_VERCEL_BASE_URL}/v1/integrations/get-repo?${params}`,
      {
        headers: {
            Authorization: `Bearer ${token}`
        },
        method: "GET",
        // mode: 'no-cors'
      }
    );
    const data = await result.json();
    return data;
  }
