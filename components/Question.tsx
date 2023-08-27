"use client";
import { QuestionProps } from "@/hooks/fetchData";
import Popup from "./Popup";
import Image from "next/image";
import { useState } from "react";

interface Qprops {
  Data: QuestionProps[];
}

function Question({ Data }: Qprops) {
  const initialValue = localStorage.getItem("index") || "0";
  const initialScore = localStorage.getItem("score") || "0";

  const scr = parseInt(initialScore as string);
  const lol = parseInt(initialValue as string);
  const [index, setIndex] = useState<number>(lol);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState<number>(scr);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  console.log(`${index} out of ${Data.length}`);
  console.log(`Correct answer is ${Data[index].correct_answer}`);
  console.log(`Your Score is ${score}`);

  const next = (ind: number) => {
    if (index >= 0) {
      setIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        localStorage.setItem("index", newIndex.toString());
        return newIndex;
      });
      setSelectedOption(null);
      mark(ind);
      localStorage.setItem("score", score.toString());
    }
    setIndex((prevIndex) => prevIndex);
    localStorage.setItem("score", score.toString());
  };

  const prev = (currindex: number) => {
    if (index > 0) {
      setIndex((prevIndex) => {
        const newindex = prevIndex - 1;
        localStorage.setItem("index", newindex.toString());
        return newindex;
      });
      const boy = currindex - 1;
      const useranswers: [] | never[] = Object.values(answers);
      setSelectedOption(useranswers[boy]);
      unMark(boy);
      localStorage.setItem("score", score.toString());
    }
    setIndex((prevIndex) => prevIndex);
    localStorage.setItem("score", score.toString());
  };

  const handleAnswerSelect = (index: number, selectedAnswer: number) => {
    const question = index + 1;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: selectedAnswer,
    }));
    setSelectedOption(selectedAnswer);
  };

  const mark = (ind: number) => {
    const allanswers = Data.map((qtn) => qtn.correct_answer);
    const useranswers = Object.values(answers);
    if (allanswers[ind] === useranswers[ind]) {
      setScore((prevScore) => {
        const newscore = prevScore + 1;
        localStorage.setItem("score", newscore.toString());
        return newscore;
      });
    }

    setScore((prevScore) => prevScore);
  };

  const unMark = (ind: number) => {
    const allanswers = Data.map((qtn) => qtn.correct_answer);
    const useranswers = Object.values(answers);
    if (allanswers[ind] === useranswers[ind]) {
      setScore((prevScore) => {
        const newscore = prevScore - 1;
        localStorage.setItem("score", newscore.toString());
        return newscore;
      });
    }

    setScore((prevScore) => prevScore);
  };

  const handleSubmit = (ind: number) => {
    mark(ind);
  };

  return (
    <div className="rounded-[20px] bg-neutral-900 w-[50vw] h-[90%] p-5 pb-[50px] mt-[80px] mb-[50px] space-y-3">
      <h1 className="text-[30px] font-[500] mt-2 text-center">
        TOIEC Practice Test
      </h1>
      <p className="text-[19px] font-[400]">200 Questions</p>
      <p>Section 1: Listening Test (Part One: Photographs)</p>

      <Image
        width={350}
        className="block mx-auto !w-[400px] !h-[500px] rounded"
        height={200}
        src={Data[index].imageUrl}
        alt="img"
      />
      <audio
        src={Data[index].audios}
        controls
        className="w-[80%] block mx-auto bg-white text-blue-600 rounded-[20px]"
      ></audio>
      <p className="text-[20px] font-[500]">Question {index + 1}</p>
      <p>Listen to the recording and choose the best answer</p>

      <div className="block">
        {Data[index].choices.map((choice, place) => (
          <label key={choice}>
            <input
              type="radio"
              name="option"
              value={index}
              checked={selectedOption === place}
              onChange={() => handleAnswerSelect(index, place)}
              className="cursor-pointer border before:rounded-[50%] before:w-[20px] before:h-[20px]"
            />
            {choice}
          </label>
        ))}
      </div>
      <div className="flex justify-end">
        {index != Data.length - 1 ? (
          <>
            <button
              className={
                index > 0
                  ? "bg-blue-700 hover:opacity-75 p-1 rounded mr-1"
                  : "hidden"
              }
              onClick={() => prev(index)}
            >
              Prev
            </button>
            <button
              className="bg-blue-700 hover:opacity-75 p-1 rounded disabled:bg-neutral-500"
              onClick={() => next(index)}
              disabled={selectedOption != null ? false : true}
            >
              Next
            </button>
          </>
        ) : (
          <>
            <button
              className={
                index > 0
                  ? "bg-blue-700 hover:opacity-75 p-1 rounded mr-1"
                  : "hidden"
              }
              onClick={() => prev(index)}
            >
              Prev
            </button>
            <Popup score={score} total={Data.length}>
              <button
                type="button"
                className="bg-blue-700 hover:opacity-75 p-1 rounded disabled:bg-neutral-500"
                disabled={selectedOption != null ? false : true}
                // onClick={() => handleSubmit(index)}
              >
                Submit
              </button>
            </Popup>
          </>
        )}
      </div>
    </div>
  );
}

export default Question;
