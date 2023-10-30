import { useQuery } from "@tanstack/react-query";

import VideoItem from "../components/VideoItem";
import { useParams } from "react-router-dom";
import { useYoutubeApi } from "../context/YoutubeApiContext";

const Videos = () => {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();

  // const { error, isLoading, data } = useQuery([keyword, "videos"], () =>
  //   youtube.search(keyword)
  // );

  const { error, isLoading, data } = useQuery({
    queryKey: [keyword, "videos"],
    queryFn: () => youtube.search(keyword),
    staleTime: 5 * 60 * 1000,
  });

  /*
각각의 v.id 
v.snippet.publishedAt
v.snippet.channelId
v.snippet.title
v.snippet.description

*/
  return (
    <>
      {isLoading && <p className="flex justify-center">Loading...</p>}
      {error && (
        <p className="flex justify-center text-youtubeRed font-bold text-3xl">
          Error! {error.message}
        </p>
      )}
      {data && (
        <ul className="min-w-[500px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 font-sans text-sm px-20 pb-20 mx-">
          {data.map((vid) => (
            <VideoItem key={vid.id} vid={vid} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Videos;
