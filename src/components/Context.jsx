import React, { createContext, useContext, useEffect, useState } from "react";
export const AppCtx = createContext();
export const AppProvider = ({ children }) => {
  const myHeaders = new Headers();
  myHeaders.append("X-Auth-Token", "dfedcf6d5ac64d2294accc82027332ad");
  const [standings, setStandings] = useState([]);
  const [matches, setMatches] = useState([]);
  const [staLoading, setStaLoading] = useState(false);
  const [matLoading, setMatLoading] = useState(false);
  const convertTimeZone = (date, timezone) => {
    if (typeof date === "string") {
      return new Date(new Date(date).toLocaleString("en-US", { timezone }));
    }
    return new Date(
      date.toLocaleString("en-US", {
        timezone,
      })
    );
  };
  const getData = async () => {
    setStaLoading(true);
    try {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://api.football-data.org/v4/competitions/WC/standings",
        {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        }
      );
      const data = await response.json();
      setStandings(
        data.standings.map((item) => {
          const { group, table } = item;
          const arrTable = table.map((item) => {
            const {
              draw,
              won,
              lost,
              points,
              playedGames,
              team: { tla: name, crest: img },
            } = item;
            return { draw, won, lost, points, name, img, playedGames };
          });
          return { group, arrTable };
          u;
        })
      );
      setStaLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const getMatches = async () => {
    setMatLoading(true);
    try {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://api.football-data.org/v4/competitions/WC/matches	",
        {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        }
      );
      const data = await response.json();
      setMatches(
        data.matches
          .filter((item) => item.status === "FINISHED")
          .map((item) => {
            const {
              utcDate,
              group,
              homeTeam: { shortName: homeName, crest: homeImg },
              awayTeam: { shortName: awayName, crest: awayImg },
              score: {
                fullTime: { home, away },
              },
            } = item;
            const time = convertTimeZone(utcDate, "Africa/Algiers").toString();
            return {
              utcDate,
              time,
              group,
              homeName,
              homeImg,
              awayName,
              awayImg,
              home,
              away,
            };
          })
      );
      setMatLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
    getMatches();
  }, []);
  return (
    <AppCtx.Provider value={{ standings, staLoading, matches, matLoading }}>
      {children}
    </AppCtx.Provider>
  );
};
export const useGlobalCtx = () => {
  return useContext(AppCtx);
};
