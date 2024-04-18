import { useState } from "react";
import { Question } from "../components/question";
import questions from "../questions.json";

export function Component(){
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(-1));

  function setAnswer(index: number, answer: number){
    setAnswers((c) => {
      const clone = [...c];
      clone[index] = answer;
      return clone;
    });
  }

  return (
    <>
      {questions.map((item, index) => (
        <Question
          key={index}
          question={item}
          selected={answers[index]}
          setSelected={(answer) => setAnswer(index, answer)}
        />
      ))}
    </>
  );
}