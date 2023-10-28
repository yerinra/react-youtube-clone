/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import React from "react";
import VideoItem from "./VideoItem";

const OtherVideos = ({ id }) => {
  const { youtube } = useYoutubeApi();

  const { error, isLoading, data } = useQuery({
    queryKey: [id, "channel", "videos"],
    queryFn: () => youtube.otherVideos(id),
    staleTime: 5 * 60 * 1000,
  });
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      {data && (
        <ul>
          {data.map((video) => (
            <VideoItem key={video.id} vid={video} type="list" />
          ))}
        </ul>
      )}
    </>
  );
};

export default OtherVideos;
