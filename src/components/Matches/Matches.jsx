import React from "react";
import Container from "../Container/Container";
import "./Matches.scss";
import { useGlobalCtx } from "../Context";

const Matches = () => {
  const { matches, matLoading } = useGlobalCtx();

  return (
    <div className="matches">
      <Container>
        <h1 dir="rtl">المباريات التي تم لعبها</h1>
        <div className="matches-container">
          {matLoading ? (
            <h1>Loading...</h1>
          ) : (
            matches.length &&
            matches.map((item, index) => {
              const {
                utcDate,
                time,
                group,
                home,
                away,
                homeName,
                homeImg,
                awayName,
                awayImg,
              } = item;

              return (
                <div className="match" key={index}>
                  <div className="team home">
                    <img src={homeImg} alt={homeName} />
                    <span>{homeName}</span>
                  </div>
                  <div className="stat">
                    <div className="score home">{home}</div>
                    <div className="info">
                      <span>{group}</span>
                      <span>x</span>
                      <span>
                        {utcDate.slice(0, 10)}
                        {time.slice(15, 21)}
                      </span>
                    </div>
                    <div className="score away">{away}</div>
                  </div>
                  <div className="team away">
                    <img src={awayImg} alt={awayName} />
                    <span>{awayName}</span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </Container>
    </div>
  );
};

export default Matches;
