/* eslint-disable react/prop-types */
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useNavigate } from "react-router-dom";
import ChannelImage from "./ChannelImage";

dayjs.extend(relativeTime);

const VideoItem = ({ vid, type }) => {
  const navigate = useNavigate();
  const isList = type === "list";

  return (
    <li
      className={
        isList ? "flex my-5 mr-3 cursor-pointer" : "cursor-pointer my-5 mr-3"
      }
      onClick={() => {
        navigate(`/videos/watch/${vid.id}`, { state: vid });
      }}
    >
      <img
        src={vid.snippet.thumbnails.high.url}
        className={isList ? "rounded-lg h-fit w-1/2" : "rounded-lg h-fit "}
        alt="thumnail image"
      />

      <div className="description flex mt-3 ml-2">
        {!isList && (
          <ChannelImage className="rounded-full" id={vid.snippet.channelId} />
        )}
        <div className="w-4/5 mr-3">
          <div className="title text-youtubeBlack font-semibold text-[16px] overflow-hidden text-ellipsis line-clamp-2">
            {vid.snippet.title}
          </div>

          <div className="author text-[#929191] pt-2 text-sm">
            {vid.snippet.channelTitle}
          </div>
          <div className="details text-[#929191] text-[13px]">
            <span className="views ">
              {Intl.NumberFormat("en", { notation: "compact" }).format(
                vid.statistics?.viewCount || 100
              ) + " views"}
            </span>
            <span className="mx-1 font-bold">{"·"}</span>
            <span className="publishedDate">
              {dayjs(vid.snippet.publishedAt).fromNow()}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
