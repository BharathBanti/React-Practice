function WelcomeScreen({ userData }) {
  return (
    <section className="mt-8 flex w-full justify-center">
      <div className="w-full max-w-2xl rounded-3xl border border-blue-100 bg-white p-8 shadow-sm sm:p-10">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Welcome
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Hello, {userData?.name || 'there'}
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-500">
            You are successfully logged in. This is your welcome screen, kept
            clean and simple to match the rest of the project.
          </p>

          <div className="mt-8 rounded-2xl bg-slate-50 p-5 text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Signed in as
            </p>
            <p className="mt-2 text-lg font-medium text-slate-800">
              {userData?.email || 'No email available'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeScreen;
