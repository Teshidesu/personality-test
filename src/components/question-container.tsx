import Answer from "./answer"

export interface IAnswer{
  text: string
}

export interface IQuestion{
  question: string
  answers: IAnswer[]
}

export interface QuestionContainerProps{
  question: IQuestion
  selected: number
  setSelected: (n: number) => unknown
}

export function QuestionContainer({question, selected, setSelected}: QuestionContainerProps){
  return (
    <div style={{
      width:"20%",
      minHeight:"20rem",
      maxHeight:"20rem",
      padding:"1rem",
      backgroundColor:"rgba(255,255,255, 0.3)",
      backdropFilter:"blur(10px)",
      border:"solid 1px gray",
      borderRadius:"1rem",
      display: "flex",
      flexDirection: "column",
      gap:"1rem",
      justifyContent:"start",
      alignItems:"center",
      boxShadow:"8px 8px rgba(0, 0, 0, 0.5)",
      overflowY:"auto",

    }} >
      <div>{question.question}</div>
      {question.answers.map(
        (item, index) => (
          <div key={index} style={{
            display: "flex",
            flexDirection: "row",
            gap:"1rem",
            justifyContent:"start",
            alignItems:"center",
          }}>
            <Answer
              index={index}
              answer={question.question}
              selected={index === selected}
              onClick={() => setSelected(index)}
            />
            <br/>
          </div>
        )
      )}
    </div>
  );
}