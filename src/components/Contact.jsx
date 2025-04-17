import React from "react";

const Connect = () => {
  return (
    <section id="connect" className="py-16 bg-gray-100 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Let's Connect
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Feel free to reach out to me via any of the following platforms.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Email */}
          <div className="w-full sm:w-auto text-gray-700 hover:text-blue-600 transition-colors cursor-pointer mb-4 sm:mb-0">
            <a
              href="mailto:sushantaryal7@gmail.com?subject=Let's Connect&body=Hi Sushant,"
              className="text-xl"
            >
              📧 Email
            </a>
          </div>

          {/* Phone Number (Mobile Clickable) */}
          <div className="w-full sm:w-auto text-gray-700 hover:text-blue-600 transition-colors cursor-pointer mb-4 sm:mb-0">
            <a href="tel:+917042123418" className="text-xl">
              📱 Call Me
            </a>
          </div>

          {/* LinkedIn */}
          <div className="w-full sm:w-auto text-gray-700 hover:text-blue-600 transition-colors cursor-pointer mb-4 sm:mb-0">
            <a
              href="https://www.linkedin.com/in/sushant-aryal-557339217/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
              💼 LinkedIn
            </a>
          </div>

          {/* GitHub */}
          <div className="w-full sm:w-auto text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
            <a
              href="https://github.com/SushantAryal7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
              🐙 GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
