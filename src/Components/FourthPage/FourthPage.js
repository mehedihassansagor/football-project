import { useEffect, useState } from "react";

const FourthPage = () => {
  const [allInfo, setAllInfo] = useState([]);

  useEffect(() => {
    setAllInfo(JSON.parse(localStorage.getItem("allInfo")));
  }, []);

  return (
    <div className="container">
      <table className="table table-striped text-center">
        <thead>
          <tr>
            <th scope="col">Team 1</th>
            <th scope="col">Team 2</th>
            <th scope="col">Match Type</th>
            <th scope="col">Tournament Name</th>
            <th scope="col">Start Time & Date</th>
            <th scope="col">End Time & Date</th>
            <th scope="col">Location</th>
            <th scope="col">Comment</th>
          </tr>
        </thead>
        <tbody>
          {allInfo ?
            allInfo.map((info, index) => (
              <tr key={index}>
                <td>
                  {info.teamOneName} - {info.teamOneVenue}
                </td>
                <td>
                  {info.teamTwoName} - {info.teamTwoVenue}
                </td>
                <td>{info.matchType}</td>
                <td>{info.tournamentName ? info.tournamentName : "-"}</td>
                <td>{info.startTime}</td>
                <td>{info.endTime}</td>
                <td>{info.location}</td>
                <td>{info.comment}</td>
              </tr>
            )) : (
              <tr>
                <td colSpan={8}>No Data</td>
              </tr>
            )}
        </tbody>
      </table>
    </div>
  );
};

export default FourthPage;
