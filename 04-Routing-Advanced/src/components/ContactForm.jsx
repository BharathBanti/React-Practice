function ContactForm() {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <form className="space-y-5">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-800" htmlFor="name">
            Name
          </label>
          <input
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white"
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-800" htmlFor="email">
            Email
          </label>
          <input
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white"
            type="email"
            name="email"
            id="email"
            placeholder="iamPrabhas@gmail.com"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-800" htmlFor="message">
            Message
          </label>
          <textarea
            className="min-h-[180px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white"
            name="message"
            id="message"
            
            placeholder="Write your message here..."
          ></textarea>
        </div>
        <button className="w-full rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-600 sm:w-auto">
          Post This
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
