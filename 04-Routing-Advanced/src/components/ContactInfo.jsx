
function ContactInfo() {
  const details = [
    {
      title: 'Address',
      content: (
        <p className="text-sm leading-7 text-slate-600 sm:text-base">
          Kurlapalli Village, KanaganaPalli Mandal, Sri Sathya Sai District -
          515641
        </p>
      ),
    },
    {
      title: 'Contact Details',
      content: (
        <ul className="space-y-3 text-sm text-slate-600 sm:text-base">
          <li>7989668448</li>
          <li>9603563469</li>
          <li>6281585067</li>
          <li>9705446128</li>
        </ul>
      ),
    },
    {
      title: 'Social links',
      content: (
        <ul className="space-y-3 text-sm text-slate-600 sm:text-base">
          <li>WhatsApp</li>
          <li>Instagram</li>
          <li>LinkedIn</li>
          <li>Twitter</li>
          <li>facebook</li>
        </ul>
      ),
    },
    {
      title: 'Agents',
      content: (
        <ul className="space-y-3 text-sm text-slate-600 sm:text-base">
          <li>Naveen Kumar - 9873753499</li>
          <li>Venkat - 7965896412</li>
          <li>Rajesh Krision - 9685253745</li>
          <li>Steve Jouson - 6258963510</li>
        </ul>
      ),
    },
  ]

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {details.map((section) => (
        <div
          key={section.title}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h2 className="mb-4 text-xl font-semibold text-slate-950">
            {section.title}
          </h2>
          {section.content}
        </div>
      ))}
    </div>
  )
}

export default ContactInfo
