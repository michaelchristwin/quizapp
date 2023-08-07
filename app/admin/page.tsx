import Data from "../../data.json";

function Admin() {
  return (
    <table className="table w-[90%] float-right">
      <thead>
        <tr className="">
          <th className="border border-gray-400">Question Type</th>
          <th className="border border-gray-400">Question</th>
          <th className="border border-gray-400">Choices</th>
          <th className="border border-gray-400">Correct Answer</th>
          <th className="border border-gray-400">Image</th>
          <th className="border border-gray-400">Audio</th>
        </tr>
      </thead>
      <tbody>
        {Data.map((data) => (
          <tr key={data.image}>
            <td className="border border-gray-400 px-3 py-2">{data.qType}</td>
            <td className="border border-gray-400 px-3 py-2">
              {data.question}
            </td>
            <td className="border border-gray-400 px-3 py-2">{data.choices}</td>
            <td className="border border-gray-400 px-3 py-2">
              {data.correctAnswer}
            </td>
            <td className="border border-gray-400 px-3 py-2">{data.image}</td>
            <td className="border border-gray-400 px-3 py-2">{data.audio}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Admin;
