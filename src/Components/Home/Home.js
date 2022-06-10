import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [matchType, setMatchType] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitMatch = (data) => {
    data.matchType = matchType;
    localStorage.setItem("matchType", JSON.stringify(data));
    if (matchType === "Friendly") {
      navigate("/page-2");
    } else {
      navigate("/page-3");
    }
  };

  return (
    <div
      className="border border-dark m-auto"
      style={{ height: "70vh", width: "50%",}}
    >
      <section className="head-color">
        <p className="ms-5">Type 1/3</p>
      </section>

      <form onSubmit={handleSubmit(onSubmitMatch)} className="row px-5">
        <div className="mb-3">
          <select
            className="form-select w-50"
            onChange={(e) => setMatchType(e.target.value)}
          >
            <option>Match type</option>
            <option value="Friendly"> Friendly </option>
            <option value="Tournament"> Tournament</option>
          </select>
        </div>

        <div className="d-flex justify-content-end mt-5 pt-5">
          <button className="bty-style" type="submit" style={{marginTop:"150px"}}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
