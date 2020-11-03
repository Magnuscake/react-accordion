import React, { useState } from "react";

import SingleQuestion from "./Question";

import data from "../data";

const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Login and Account FAQ</h3>
        <section className="info">
          {questions.map((question) => {
            return (
              <SingleQuestion
                key={question.id}
                title={question.title}
                info={question.info}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default App;
