import { Fragment } from "react/jsx-runtime";

export interface IAnswer{
  text: string
}

export interface IQuestion{
  question: string
  answers: IAnswer[]
}

export interface QuestionProps{
  question: IQuestion
  selected: number
  setSelected: (n: number) => unknown
}

export function Question({question, selected, setSelected}: QuestionProps){
  return (
    <div>
      <div>{question.question}</div>
      {question.answers.map(
        (item, index) => (
          <Fragment key={index}>
            <input
              id={index.toString()}
              type="radio"
              name={question.question}
              checked={index === selected}
              onClick={() => setSelected(index)}
              onChange={() => {}}
            />
            <label htmlFor={index.toString()}>
              {item.text}
            </label>
            <br/>
          </Fragment>
        )
      )}
    </div>
  );
}