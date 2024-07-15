import Image from "next/image";

export const metadata = {
  title: "Legal - Vortexe",
  description: "VortexeAI Privacy Policy",
};

export default function Terms() {
  return (
    <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="lg:flex lg:space-x-20">
          {/* Left side */}
          <div className="flex flex-col items-center mb-12 grow lg:mt-20 lg:mb-0 lg:items-start">
            {/* Headline */}
            <h1 className="mb-8 text-center h1 font-hkgrotesk lg:text-left">
              VortexeAI Privacy Policy
            </h1>
            <div className="overflow-x-hidden overflow-y-auto">
              <h2 className="text-3xl">1. Introduction</h2>
              <p className="max-w-3xl text-left">
                At Vortexe, we value your privacy and are committed to
                protecting your personal information. This Privacy Policy
                outlines how we collect, use, and protect your data when you use
                our VortexeAI product and visit our website. By using our
                services, you consent to the practices described in this policy.
              </p>
              <div className="mb-5"></div>
              <h2 className="text-3xl">2. Information We Collect</h2>
              <p className="max-w-3xl text-left">
                We collect various types of information to provide and improve
                our services:
              </p>
              <div className="mb-5"></div>

              <h2 className="text-3xl">2.1 Personal Information</h2>
              <div className="text-left">
                <ul>
                  <li className="max-w-3xl text-left">
                    • Account Information: When you register for VortexeAI, we
                    collect personal information such as your name, email
                    address, and payment details.
                  </li>{" "}
                  <li className="max-w-3xl text-left">
                    • Contact Information: If you contact us for support or
                    inquiries, we may collect your name, email address, and any
                    other information you provide.
                  </li>
                </ul>
              </div>
              <div className="mb-5"></div>
              <h2 className="text-3xl">2.2 Usage Data</h2>
              <div className="text-left">
                <ul>
                  <li className="max-w-3xl text-left">
                    • Website Activity: We collect information about your
                    interactions with our website, including pages visited,
                    links clicked, and time spent on each page.
                  </li>{" "}
                  <li className="max-w-3xl text-left">
                    • Application Usage: We collect data on how you use
                    VortexeAI, such as tasks performed, commands used, and
                    frequency of use.
                  </li>
                </ul>
              </div>
              <div className="mb-5"></div>
              <h2 className="text-3xl">2.3 Technical Information</h2>
              <div className="text-left">
                <ul>
                  <li className="max-w-3xl text-left">
                    • Device Information: We collect information about the
                    device you use to access our services, including IP address,
                    browser type, operating system, and device identifiers.
                  </li>{" "}
                  <li className="max-w-3xl text-left">
                    • Log Data: Our servers automatically record information
                    when you use our services, including your IP address,
                    browser type, and access times.
                  </li>
                </ul>
              </div>
              <div className="mb-5"></div>
              <h2 className="text-3xl">3. How We Use Your Information</h2>
              <div className="text-left">
                We use the collected information for the following purposes:
                <ul>
                  <li className="max-w-3xl text-left">
                    • To Provide and Improve Services: We use your information
                    to deliver, maintain, and enhance VortexeAI and our website.
                  </li>{" "}
                  <li className="max-w-3xl text-left">
                    • To Communicate with You: We may use your contact
                    information to send you updates, notifications, and support
                    messages.
                  </li>{" "}
                  <li className="max-w-3xl text-left">
                    • To Personalize Your Experience: We use usage data to
                    tailor our services to your preferences and provide
                    personalized recommendations.
                  </li>{" "}
                  <li className="max-w-3xl text-left">
                    • To Ensure Security: We use technical information to
                    protect against unauthorized access, detect fraudulent
                    activities, and ensure the integrity of our services.
                  </li>{" "}
                  <li className="max-w-3xl text-left">
                    • To Analyze and Improve: We analyze usage data to
                    understand how our services are used and to identify areas
                    for improvement.
                  </li>
                </ul>
              </div>
              <div className="mb-5"></div>
              <h2 className="text-3xl">4. Data Sharing and Disclosure</h2>
              <div className="text-left">
                We do not sell, trade, or otherwise transfer your personal
                information to outside parties, except as described below:
                <ul>
                  <li className="max-w-3xl text-left">
                    • Service Providers: We may share your information with
                    third-party service providers who assist us in operating our
                    services, conducting business, or serving you. These parties
                    are obligated to keep your information confidential.
                  </li>{" "}
                  <li className="max-w-3xl text-left">
                    • Legal Requirements: We may disclose your information if
                    required by law or in response to valid requests by public
                    authorities.
                  </li>{" "}
                  <li className="max-w-3xl text-left">
                    • Business Transfers: In the event of a merger, acquisition,
                    or sale of assets, your information may be transferred to
                    the acquiring entity.
                  </li>
                </ul>
              </div>
              <div className="mb-5"></div>
              <h2 className="text-3xl">5. Data Security</h2>
              <p className="max-w-3xl text-left">
                We implement robust security measures to protect your
                information from unauthorized access, alteration, disclosure, or
                destruction. These measures include encryption, access controls,
                and regular security assessments.
              </p>
              <div className="mb-5"></div>
              <h2 className="text-3xl">6. Data Retention</h2>
              <p className="max-w-3xl text-left">
                We retain your personal information for as long as necessary to
                provide our services and fulfill the purposes outlined in this
                policy. We may also retain and use your information to comply
                with legal obligations, resolve disputes, and enforce our
                agreements.
              </p>
              <div className="mb-5"></div>
              <h2 className="text-3xl">7. Your Rights</h2>
              <div className="text-left">
                You have the following rights regarding your personal
                information:
                <ul>
                  <li className="max-w-3xl text-left">
                    • Access and Correction: You can access and update your
                    personal information by logging into your account or
                    contacting us directly.
                  </li>{" "}
                  <li className="max-w-3xl text-left">
                    • Deletion: You can request the deletion of your personal
                    information, subject to certain legal obligations.
                  </li>{" "}
                  <li className="max-w-3xl text-left">
                    • Opt-Out: You can opt-out of receiving marketing
                    communications from us by following the unsubscribe
                    instructions provided in the emails.
                  </li>
                </ul>
              </div>
              <div className="mb-5"></div>
              <h2 className="text-3xl">8. Third-Party Links</h2>
              <p className="max-w-3xl text-left">
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices or content of these
                external sites. We encourage you to review the privacy policies
                of those websites before providing any personal information.
              </p>
              <div className="mb-5"></div>
              <h2 className="text-3xl">9. Changes to This Privacy Policy</h2>
              <p className="max-w-3xl text-left">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page, and the revised policy will
                indicate the date of the latest update. Your continued use of
                our services after any changes signifies your acceptance of the
                revised policy.
              </p>
              <div className="mb-5"></div>
              <h2 className="text-3xl">10. Contact Us</h2>
              <p className="max-w-3xl text-left">
                If you have any questions or concerns about this Privacy Policy,
                please contact us at: Email: vortexeai@outlook.com Address:
                Vortexe Inc., 123 Innovation Drive, Tech City, DE 19901. By
                using VortexeAI and our website, you acknowledge that you have
                read, understood, and agree to this Privacy Policy.
              </p>
              <div className="mb-5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
