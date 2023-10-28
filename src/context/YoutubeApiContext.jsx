/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import Youtube from "../api/Youtube";
// import FakeApiClient from "../api/FakeApiClient";
import RealApiClient from "../api/RealApiClient";

export const YoutubeApiContext = createContext();

// const fake = new FakeApiClient();
// const youtube = new Youtube(fake);
const real = new RealApiClient();
const youtube = new Youtube(real);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
