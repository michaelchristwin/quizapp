function Home() {
  return (
    <div className="mt-[80px] flex justify-center">
      <div className="p-5 space-y-3 w-[50%]">
        <h1 className="font-bold text-[26px]">
          Welcome to TOEIC Test Preparation
        </h1>
        <h2 className="font-bold text-[19px]">*About the TOEIC Test</h2>
        <p className="mt-3">
          The Test of English for International Communication (TOEIC) is a
          globally recognized language proficiency exam that assesses your
          ability to understand and communicate effectively in English. It is
          widely used by universities, employers, and organizations to measure
          your English language skills for academic and professional purposes.
        </p>
        <h2 className="font-bold text-[19px]">Test Format and Sections</h2>
        <p>The TOEIC test consists of two main sections:</p>
        <ol className="list-decimal">
          <li>
            <p>
              <span className="font-bold">Listening Comprehension: </span>
              This section evaluates your ability to understand spoken English
              in various contexts, such as conversations, lectures, and
              discussions.
            </p>
          </li>
          <li>
            <p>
              <span className="font-bold">Reading Comprehension: </span>
              The reading section assesses your understanding of written English
              through passages, articles, and documents on different topics.
            </p>
          </li>
        </ol>
        <h2 className="font-bold text-[19px]">Test Duration and Scoring</h2>
        <ul className="list-disc">
          <li>
            <p>
              The total test duration is approximately{" "}
              <span className="font-bold">2 hours and 30 minutes</span>.
            </p>
          </li>
          <li>
            <p>
              The maximum score for the TOEIC test is{" "}
              <span className="font-bold">990 points</span>, with separate
              scores provided for listening and reading comprehension.
            </p>
          </li>
        </ul>
        <h2 className="font-bold text-[19px]">Test Preparation Resources</h2>
        <p>{`We're here to help you succeed on the TOEIC test. Our comprehensive study materials and resources include:`}</p>
        <ul className="list-disc">
          <li>
            <p>Practice tests with real TOEIC questions</p>
          </li>
          <li>
            <p>Interactive study modules for listening and reading</p>
          </li>
          <li>
            <p>Tips and strategies for each test section</p>
          </li>
          <li>
            <p>Sample responses for the speaking and writing sections</p>
          </li>
          <li>
            <p>Study guides and downloadable PDFs</p>
          </li>
        </ul>
        <h2 className="font-bold text-[19px]">Register for the TOEIC Test</h2>
        <p>
          Ready to take your language skills to the next level? Register for the
          upcoming TOEIC test to showcase your proficiency to universities and
          employers worldwide. Create an account to access personalized study
          plans and track your progress.
        </p>
        <h2 className="font-bold text-[19px]">Latest Updates and News</h2>
        <p>
          {`Stay informed about the latest news, updates, and changes related to
          the TOEIC test. We're committed to providing you with accurate and
          timely information to help you succeed.`}
        </p>
      </div>
    </div>
  );
}

export default Home;
