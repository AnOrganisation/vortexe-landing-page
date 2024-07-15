import Image from "next/image";

export const metadata = {
  title: "Legal - Vortexe",
  description: "VortexeAI Terms and Conditions",
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
              VortexeAI Terms and Conditions
            </h1>
            <div className="overflow-x-hidden overflow-y-auto">
              <h2 className="text-3xl">Introduction</h2>
              <p className="max-w-3xl text-left">
                Welcome to Vortexe. These terms and conditions outline the rules
                and regulations for the use of Vortexe's website and services.
                By accessing this website and using our services, you accept
                these terms and conditions in full. Do not continue to use
                Vortexe's website if you do not accept all of the terms and
                conditions stated on this page.
              </p>
              <div className="mb-5"></div>
              <h2 className="text-3xl">Services Provided</h2>
              <p className="max-w-3xl text-left">
                Vortexe provides a simplified AI platform for small businesses,
                offering an intuitive workspace that requires no training. Our
                services include data management, task automation, and
                innovative solutions to streamline your business operations.
                Users can upload data, select tasks, and receive results within
                seconds.
              </p>
              <div className="mb-5"></div>
              <h2 className="text-3xl">Subscription and Payment</h2>
              <p className="max-w-3xl text-left">
                Vortexe operates on a tier-based subscription model, available
                monthly or yearly. By subscribing to our services, you agree to
                pay the subscription fees associated with the chosen tier.
                Payments are processed through secure payment gateways, and you
                are responsible for maintaining accurate and up-to-date payment
                information.
              </p>
              <div className="mb-5"></div>
              <h2 className="text-3xl">User Responsibilities</h2>
              <div className="text-left">
                As a user of Vortexe, you agree to:{" "}
                <ul>
                  <li className="max-w-3xl text-left">
                    • Use the platform in compliance with all applicable laws
                    and regulations.
                  </li>{" "}
                  <li className="max-w-3xl text-left">
                    • Provide accurate and truthful information during the
                    registration and use of our services.
                  </li>{" "}
                  <li className="text-left max-w-[1000px]">
                    • Maintain the confidentiality of your account credentials
                    and notify Vortexe immediately of any unauthorized use of
                    your account.
                  </li>{" "}
                  <li className="max-w-3xl text-left">
                    • Not use the platform for any unlawful or prohibited
                    activities.
                  </li>
                </ul>
              </div>
              <div className="mb-5"></div>
              <h2 className="text-3xl">Data and Privacy</h2>
              <p className="max-w-3xl text-left">
                Vortexe is committed to protecting your privacy. By using our
                services, you agree to the collection and use of your data as
                described in our Privacy Policy. We implement robust security
                measures to safeguard your data and ensure its confidentiality.
              </p>
              <div className="mb-5"></div>
              <h2 className="text-3xl">Intellectual Property</h2>
              <p className="max-w-3xl text-left">
                All content, including but not limited to text, graphics, logos,
                and software, is the property of Vortexe and is protected by
                copyright and other intellectual property laws. You are granted
                a limited license to use the content for personal and business
                purposes, but you may not reproduce, distribute, or create
                derivative works without explicit permission from Vortexe.
              </p>
              <div className="mb-5"></div>
              <h2 className="text-3xl">Limitation of Liability</h2>
              <p className="max-w-3xl text-left">
                Vortexe is not liable for any indirect, incidental, or
                consequential damages arising from the use or inability to use
                our services. We do not guarantee the accuracy, completeness, or
                reliability of the results generated by our platform. Your use
                of the services is at your own risk.
              </p>
              <div className="mb-5"></div>
              <h2 className="text-3xl">Termination</h2>
              <p className="max-w-3xl text-left">
                Vortexe reserves the right to terminate or suspend your account
                and access to our services at any time, without prior notice, if
                you violate these terms and conditions. Upon termination, your
                right to use the services will immediately cease.
              </p>
              <div className="mb-5"></div>
              <h2 className="text-3xl">Modifications to Terms</h2>
              <p className="max-w-3xl text-left">
                Vortexe may revise these terms and conditions at any time. Any
                changes will be posted on this page, and it is your
                responsibility to review the terms periodically. Continued use
                of the services after changes are made constitutes acceptance of
                the revised terms.
              </p>
              <div className="mb-5"></div>
              <h2 className="text-3xl">Contact Information</h2>
              <p className="max-w-3xl text-left">
                If you have any questions or concerns regarding these terms and
                conditions, please contact us at: Email: support@vortexe.com
                Address: Vortexe Inc., 123 Innovation Drive, Tech City, DE 19901
              </p>
              <div className="mb-5"></div>
              <h2 className="text-3xl">Governing Law</h2>
              <p className="max-w-3xl text-left">
                These terms and conditions are governed by and construed in
                accordance with the laws of the State of Delaware, and you
                irrevocably submit to the exclusive jurisdiction of the courts
                in that State.
              </p>
              <div className="mb-5"></div>
              <h2 className="text-3xl">Entire Agreement</h2>
              <p className="max-w-3xl text-left">
                These terms and conditions constitute the entire agreement
                between you and Vortexe regarding the use of our services and
                supersede any prior agreements or understandings, whether
                written or oral. By using Vortexe, you acknowledge that you have
                read, understood, and agree to be bound by these terms and
                conditions.
              </p>
              <div className="mb-5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
