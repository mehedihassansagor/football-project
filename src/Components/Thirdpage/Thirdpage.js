import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Thirdpage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [time, setTime] = useState(null);
  const [allInfo, setAllInfo] = useState([]);
  const [teamOneVenue, setTeamOneVenue] = useState("");
  const [teamTwoVenue, setTeamTwoVenue] = useState("");

  useEffect(() => {
    setTime(JSON.parse(localStorage.getItem("time")));
    setAllInfo(JSON.parse(localStorage.getItem("allInfo")));
  }, []);

  const onSubmitSchedule = (data) => {
    data.teamOneVenue = teamOneVenue;
    data.teamTwoVenue = teamTwoVenue;
    data.matchType = time.matchType;
    data.tournamentName = time.tournamentName;
    data.comment = time.comment;
    data.location = time.location;
    data.startTime = time.startTime;
    data.endTime = time.endTime;
    if (allInfo) {
      localStorage.setItem("allInfo", JSON.stringify([...allInfo, data]));
    } else {
      localStorage.setItem("allInfo", JSON.stringify([data]));
    }

    localStorage.removeItem("time");
    navigate("/page-5");
  };

  return (
    <div
      className="border border-dark m-auto"
      style={{ height: "70vh", width: "50%" }}
    >
      <section className="head-color">
        <p className="ms-5">Teams 3/3</p>
      </section>

      <form onSubmit={handleSubmit(onSubmitSchedule)} className="row px-5">
        <div className="col-md-5">
          <div className="mb-3">
            <input
              className="form-control"
              name="teamOneName"
              placeholder="Team 1 Name"
              type="text"
              {...register("teamOneName", { required: true })}
            />
          </div>

          <div className="py-5">
            <hr /> 
          </div>

          
          <div className="mb-3">
            <input
              className="form-control"
              name="teamTwoName"
              placeholder="Team 2 Name"
              type="text"
              {...register("teamTwoName", { required: true })}
            />
          </div>
        </div>
        <div className="col-md-2 ">
        <div className="d-flex justify-content-center align-items-center h-75">
          <p>VS</p>
        </div>
        </div>
        <div className="col-md-5">
          <div className="mb-3">
            <select
              className="form-select"
              onChange={(e) => setTeamOneVenue(e.target.value)}
            >
              <option> Home or Away </option>
              <option value="Home"> Home </option>
              <option value="Away"> Away</option>
            </select>
          </div>
          <div className="py-5">
            <hr />
          </div>

          <div className="mb-3">
            <select
              className="form-select"
              onChange={(e) => setTeamTwoVenue(e.target.value)}
            >
              <option> Home or Away </option>
              <option value="Home"> Home </option>
              <option value="Away"> Away</option>
            </select>
          </div>
          <div className="d-flex justify-content-end mt-5 pt-5">
            <span className="bty-style" onClick={() => navigate(-1)}>
              Back
            </span>
            <button className="bty-style" type="submit">
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Thirdpage;
