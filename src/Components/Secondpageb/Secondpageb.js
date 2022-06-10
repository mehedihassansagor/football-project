import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Secondpageb = () => {
  const navigate = useNavigate();
  const [matchType, setMatchType] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setMatchType(JSON.parse(localStorage.getItem("matchType")));
  }, []);

  const onSubmits = (data) => {
    data.matchType = matchType.matchType;
    localStorage.setItem("time", JSON.stringify(data));
    localStorage.removeItem("matchType");
    navigate("/page-4");
  };

  return (
    <div
      className="border border-dark m-auto"
      style={{ height: "70vh", width: "50%" }}
    >
      <section className="head-color">
        <p className="ms-5">General 2/3</p>
      </section>

      <form onSubmit={handleSubmit(onSubmits)} className="row px-5">
        <div className="col-md-6">
          <div className="mb-5">
            <input
              className="form-control"
              name="startTime"
              placeholder="Start Date & Time"
              type="datetime-local"
              {...register("startTime",{required:true})}
            />
          </div>

          <div className="mb-5">
            <input
              className="form-control"
              name="location"
              placeholder="Match Location"
              {...register("location",{required:true})}
              type="text"
            />
          </div>

          <div className="mb-3">
            <input
              className="form-control"
              name="tournamentName"
              placeholder="Tounament Name"
              {...register("tournamentName",{required:true})}
              type="text"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <input
              className="form-control"
              name="endTime"
              placeholder="End Date & Time"
              type="datetime-local"
              {...register("endTime",{required:true})}
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              {...register("comment",{required:true})}
              placeholder="Comments"
              rows="10"
            ></textarea>
          </div>
          <div className="d-flex justify-content-end mt-5">
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

export default Secondpageb;
