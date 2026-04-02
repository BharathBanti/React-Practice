import { useNavigate } from 'react-router-dom'

function Error() {
  const navigate = useNavigate();

  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
          Error 404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
          Hey, it&apos;s look like the page you are looking for doesn&apos;t exist.
        </p>
        <button
          className="mt-8 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-600"
          onClick={() => navigate('/')}
        >
          Go back to Home
        </button>
      </div>
    </section>
  )
}

export default Error
