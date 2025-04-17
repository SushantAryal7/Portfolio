import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-200 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* React */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold">React</h3>
            <p>Building interactive UIs with React.js.</p>
          </div>

          {/* JavaScript */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold">JavaScript</h3>
            <p>Mastering JavaScript for dynamic web applications.</p>
          </div>

          {/* Firebase */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold">Firebase</h3>
            <p>Building scalable backends with Firebase services.</p>
          </div>

          {/* Redux */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold">Redux</h3>
            <p>Managing global state in React apps using Redux.</p>
          </div>

          {/* Redux Thunk */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold">Redux Thunk</h3>
            <p>Handling asynchronous operations with Redux Thunk.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
