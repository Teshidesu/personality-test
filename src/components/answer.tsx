import { FC } from "react";

/* eslint-disable linebreak-style */
export interface AnswerProps{
  index:number,
  answer:string,
  selected:boolean,
  onClick:(
    index:number,
    answer:string,
  )=>void
}

const Answer:FC<AnswerProps> = ({index,answer, onClick, selected}) => {
  return (
    <div onClick={()=>onClick(index,answer)} style={{
      backgroundColor: selected ?"#51bbfe": "#327ad2",
      color:"white",
      fontFamily:"monospace",
      fontWeight:"600",
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      border:"solid 2px gray",
      borderRadius:"1rem",

    }}>{answer}</div>
  );
};

export default Answer;