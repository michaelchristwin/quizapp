"use client";
import { QuestionProps } from "@/hooks/fetchData";
import Popup from "./Popup";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Qprops {
  Data: QuestionProps[];
}

function Question({ Data }: Qprops) {
  const [index, setIndex] = useState<number>(0);
  const [answers, setAnswers] = useState({} as object);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  console.log(`${index} out of ${Data.length}`);
  console.log(`Correct answer is ${Data[index].correct_answer}`);
  console.log(answers);

  useEffect(() => {
    if (index != 0 || selectedOption != null) {
      window.addEventListener("beforeunload", function (event) {
        event.preventDefault();
        event.returnValue =
          "This page is asking you to confirm that you want to leave — information you've entered will not be saved.";
      });
    }
    return;
  }, [index, selectedOption]);

  const next = (ind: number) => {
    if (index >= 0) {
      setIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        return newIndex;
      });
      setSelectedOption(null);
    }
    setIndex((prevIndex) => prevIndex);
  };

  const prev = (currindex: number) => {
    if (index > 0) {
      setIndex((prevIndex) => {
        const newindex = prevIndex - 1;

        return newindex;
      });
      const boy = currindex - 1;
      const useranswers = Object.values(answers);
      setSelectedOption(useranswers[boy]);
    }
    setIndex((prevIndex) => prevIndex);
  };

  const handleAnswerSelect = (index: number, selectedAnswer: number) => {
    const question = index + 1;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: selectedAnswer,
    }));
    setSelectedOption(selectedAnswer);
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
            <Popup total={Data.length}>
              <button
                type="button"
                className="bg-blue-700 hover:opacity-75 p-1 rounded disabled:bg-neutral-500"
                disabled={selectedOption != null ? false : true}
                onClick={() => next(index)}
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
