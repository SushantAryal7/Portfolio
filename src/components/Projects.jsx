import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg p-5">
            <h3 className="text-xl font-semibold">Gmail Clone</h3>
            <p className="text-gray-600">
              A Gmail clone built using React.js and Firebase.
            </p>
            <a
              href="https://github.com/SushantAryal7/GmailClone"
              className="text-blue-500"
            >
              View on GitHub
            </a>
          </div>
          <div className="bg-white shadow-md rounded-lg p-5">
            <h3 className="text-xl font-semibold">E-Commerce Website</h3>
            <p className="text-gray-600">
              A full-fledged e-commerce site built with React.js and Firebase.
            </p>
            <a
              href="https://github.com/SushantAryal7/Ecommerce_Projects"
              className="text-blue-500"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
