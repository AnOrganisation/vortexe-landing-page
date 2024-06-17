export default function Faqs() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 md:pb-20">
            <h2 className="h2 font-hkgrotesk">FAQs</h2>
          </div>
          {/* Columns */}
          <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">What is this AI application designed for?</h4>
                <p className="text-slate-500">
                Our AI application is designed to simplify and streamline your everyday tasks using the latest AI models. 
                It provides a familiar and user-friendly interface for building your own AI pipeline, 
                making powerful AI tools accessible without extensive learning.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">How does this application help with task automation?</h4>
                <p className="text-slate-500">
                With Vortexe, you can build customized pipelines that automate repetitive tasks, significantly enhancing your 
                production speed and efficiency. This allows you to focus more on creative and 
                strategic work rather than administrative tasks.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">Can I use this application for creative projects like artwork?</h4>
                <p className="text-slate-500">
                Absolutely! Our platform is perfect for creatives. You can store and manage your art concepts in one convenient 
                workspace, and let AI iterate and expand on your ideas, whether you're creating 
                mood boards or complete design documentation.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">Is there customer support available if I encounter any issues?</h4>
                <p className="text-slate-500">
                Yes, we offer comprehensive customer support to assist you with any questions or issues you might encounter. 
                Our support team is dedicated to helping you make the most out of our AI application.
                </p>
              </div>
            </div>
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">Is the application secure?</h4>
                <p className="text-slate-500">
                Yes, our platform ensures that all your AI tools and data are accessed within a secure, 
                unified workspace, providing you peace of mind while you work. Your data is yours which
                means we won't track or sell it.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">Can I upload and create content within the workspace?</h4>
                <p className="text-slate-500">
                Yes, users can upload, create, and let AI tools do the work for them within our unified workspace. 
                This feature allows you to effortlessly manage and enhance your projects. We accept all
                files types, from PDF, MP4, to WordDoc.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">What kind of tasks can AI perform within this application?</h4>
                <p className="text-slate-500">
                The AI within our application can help with a variety of tasks, from automating mundane administrative 
                tasks to enhancing creative processes such as generating design concepts, mood boards, and detailed project documentation.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">How do I get started with the AI application?</h4>
                <p className="text-slate-500">
                Getting started is easy. Simply sign up, log in, and start exploring the intuitive interface. 
                You can begin enabling your AI tools to simplify and enhance your workflow immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}