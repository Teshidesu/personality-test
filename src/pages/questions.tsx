import { useState } from "react";
import { QuestionContainer } from "../components/question-container";
import questions from "../questions.json";

export function Component() {
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(-1));

  function setAnswer(index: number, answer: number) {
    setAnswers((c) => {
      const clone = [...c];
      clone[index] = answer;
      return clone;
    });
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      flexWrap:"wrap",
      gap:"1rem",
      justifyItems:"center",
      alignItems:"center",
      backgroundColor:"#0e2238"
    }} >
      {questions.map((item, index) => (
        <QuestionContainer
          key={index}
          question={item}
          selected={answers[index]}
          setSelected={(answer) => setAnswer(index, answer)}
        />
      ))}
    </div>
  );
}