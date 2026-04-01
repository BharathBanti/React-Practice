function NotFound() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-89px)] max-w-6xl items-center px-6 py-16">
      <div className="w-full max-w-4xl rounded-[2.5rem] border border-black bg-white p-8 shadow-[10px_10px_0_0_rgba(0,0,0,1)] md:p-12">
        <p className="text-xs uppercase tracking-[0.3em] text-black/45">Error</p>
        <div className="mt-6 grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-start">
          <p className="text-6xl font-medium leading-none tracking-tight md:text-8xl">404</p>
          <div className="space-y-4">
            <h2 className="text-3xl font-medium tracking-tight md:text-5xl">Page Not Found</h2>
            <p className="max-w-xl text-base leading-8 text-black/65 md:text-lg">
              The page you&apos;re looking for doesn&apos;t exist, was moved, or the route was typed incorrectly.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound
