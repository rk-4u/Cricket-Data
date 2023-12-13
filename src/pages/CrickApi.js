import { useEffect, useState } from "react";
import axios from "axios";

function CrickApi() {
  const [cricks, setCrick] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.cricapi.com/v1/currentMatches?apikey=e6f0c95e-49e4-4274-a903-6bda3a827edb&offset=0"
      )
      .then((res) => {
        console.log(res.data);
        setCrick(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
    <div className="d-flex flex-wrap gap-2 justify-content-evenly">

    {cricks.map((crick, index) => {
      return(
      <>
      <div className="card w-25 h-25">
        <div>
          <div className="card-body">
            <div className="row"><span className="col text-danger">{crick.status}</span></div>
            <div className="row"><span className="col">{crick.matchType}</span></div>
          </div>

          <div className="d-flex ms-1 me-1">
            <div className="d-flex justify-content-start">
              <img
                src={crick.teamInfo[0].img}
                className="figure-img w-25 rounded"
                alt=""
              />
              <div className="fs-6 mt-1">{crick.teamInfo[0].name}</div>
            </div>
            <div className="d-flex gap-3 justify-content-end">
              <span className="fs-6 mt-1">{crick.score[0].o}</span>
              <span className="fs-6 mt-1"> {crick.score[0].r}/{crick.score[0].w}</span>
            </div>
          </div>

          <div className="d-flex ms-1 me-1">
            <div className="d-flex justify-content-start">
              <img
                src={crick.teamInfo[1].img}
                className="figure-img w-25 rounded"
                alt=""
              />
              <div className="fs-6 mt-1">{crick.teamInfo[1].name}</div>
            </div>
            {/* <div className="d-flex gap-3 justify-content-end">
              <span className="fs-6 mt-1">{{crick.score[0].o}}</span>
              <span className="fs-6 mt-1"> 97/10</span>
            </div> */}
          </div>

          <p>
            <span className="ms-2">{crick.score[0].inning}</span>
          </p>
        </div>
      </div>
      </>)})}
    </div>
    </>
  );
}

export default CrickApi;