export default function ProjectDetails({ params }: any) {
  return (
    <div>
      <h1 className="h1-bold">Project {params.name}</h1>
    </div>
  );
}

// dynamic route
