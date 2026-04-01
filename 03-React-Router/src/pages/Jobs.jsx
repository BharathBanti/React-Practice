import { useLoaderData, Link } from 'react-router-dom';

function Jobs() {
  const jobsData = useLoaderData();

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {jobsData.map((job) => {
        return (
          <Link key={job.id} to={`${job.id}`} className="jobs-card">
            <p className="text-[11px] uppercase tracking-[0.28em] text-black/45">
              Position
            </p>
            <h4 className="mt-4 text-2xl font-medium tracking-tight text-black md:text-3xl">
              {job.title}
            </h4>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="jobs-chip">
                {job.location}
              </span>
              <span className="jobs-chip">
                ${job.salary.toLocaleString()}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Jobs;

// eslint-disable-next-line react-refresh/only-export-components
export const jobsLoader = async () => {
  const res = await fetch(`http://localhost:3001/jobs`);
  if (!res.ok) {
    throw new Response('Failed to load jobs', { status: res.status });
  }
  return res.json();
};
