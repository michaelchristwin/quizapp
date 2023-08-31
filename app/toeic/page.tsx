import Link from "next/link";

function Start() {
  return (
    <div className="block w-[50%] mx-auto my-[9%] space-y-3">
      <h1 className="font-bold text-[26px]">Welcome to the TOEIC Quiz</h1>
      <p>
        Are you ready to test your English language skills? This TOEIC quiz is
        designed to help you assess your proficiency in English and prepare for
        the TOEIC exam. Here are the details you need to know before you begin:
      </p>
      <p>
        • <b>Quiz Duration: </b>60 minutes
      </p>
      <p>
        • <b>Number of Questions: </b>200
      </p>
      <p>
        • <b>Sections: </b>Listening Comprehension and Reading Comprehension
      </p>
      <p>
        • <b>Scoring: </b>Each question is worth one point. Your total score
        will be calculated at the end of the quiz.
      </p>
      <h1 className="font-semibold text-[17px]">Tips:</h1>
      <ul className="list-disc">
        <li>
          <p>Ensure a quiet environment during the quiz to focus better</p>
        </li>
        <li>
          <p>
            Read or listen to each question carefully before selecting your
            answer
          </p>
        </li>
        <li>
          <p>
            Manage your time wisely to complete the quiz within the allotted
            duration.
          </p>
        </li>
      </ul>
      <p>{`Click the "Start Quiz" button when you're ready to begin. Best of luck!`}</p>
      <Link href={"toeic/start"}>
        <button className="bg-blue-500 p-2 block rounded-[5px] mx-auto mt-4">
          Start Quiz
        </button>
      </Link>
    </div>
  );
}

export default Start;
