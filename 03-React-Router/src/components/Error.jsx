import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="jobs-card">
          <p className="text-xs uppercase tracking-[0.3em] text-black/45">Route Error</p>
          <h3 className="mt-4 text-4xl font-medium tracking-tight md:text-6xl">
            An error occurred.
          </h3>
          <p className="mt-6 max-w-2xl text-base leading-8 text-black/65 md:text-lg">
            Something went wrong while loading this job route. The request may have failed or the selected item may not exist anymore.
          </p>
          <div className="mt-8 rounded-[1.75rem] border border-black/10 bg-stone-100 p-5">
            <p className="text-[11px] uppercase tracking-[0.28em] text-black/45">Details</p>
            <p className="mt-3 text-sm leading-7 text-black/75">
              {error?.message || error?.statusText || 'Unexpected route error'}
            </p>
          </div>
        </div>
        <aside className="rounded-4xl border border-black/15 bg-black p-8 text-white shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
          <p className="text-sm uppercase tracking-[0.25em] text-white/60">Recovery</p>
          <p className="mt-4 text-sm leading-7 text-white/75">
            Head back home and try the route again after confirming the local jobs server is running.
          </p>
          <button
            onClick={() => navigate('/')}
            className="mt-8 w-full rounded-full border border-white bg-white px-6 py-3 text-sm uppercase tracking-[0.2em] text-black transition-colors duration-200 hover:bg-black hover:text-white"
          >
            Back to Home
          </button>
        </aside>
      </div>
    </section>
  )
}

export default Error
