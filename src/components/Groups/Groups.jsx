import React from "react";
import Container from "../Container/Container";

import "./Groups.scss";
import { useGlobalCtx } from "../Context";
const Groups = () => {
  const { standings, staLoading } = useGlobalCtx();
  return (
    <div className="groups">
      <Container>
        <h1 dir="rtl">المجموعات</h1>
        {staLoading ? (
          <h1 style={{ textAlign: "center" }}>Loading...</h1>
        ) : (
          <div className="groups-table">
            {standings.length &&
              standings.map((item, index) => {
                const { group, arrTable } = item;
                return (
                  <table key={index}>
                    <caption>{group}</caption>
                    <thead>
                      <tr>
                        <th>team</th>
                        <th>p</th>
                        <th>w</th>
                        <th>l</th>
                        <th>d</th>
                        <th>pts</th>
                      </tr>
                    </thead>
                    {arrTable.map((item, index) => {
                      const {
                        name,
                        img,
                        won,
                        lost,
                        draw,
                        points,
                        playedGames,
                      } = item;
                      return (
                        <tbody key={index}>
                          <tr>
                            <td>
                              <div className="team">
                                <img src={img} alt="" />
                                <span>{name}</span>
                              </div>
                            </td>
                            <td>{playedGames}</td>
                            <td>{won}</td>
                            <td>{lost}</td>
                            <td>{draw}</td>
                            <td>{points}</td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                );
              })}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Groups;
