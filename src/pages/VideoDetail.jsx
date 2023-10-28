import { useLocation } from "react-router-dom";
import Videos from "./Videos";
import OtherVideos from "../components/OtherVideos";
import ChannelImage from "../components/ChannelImage";

const VideoDetail = () => {
  const { state: vid } = useLocation();

  const { title, channelId, channelTitle, description } = vid.snippet;
  return (
    <section className="flex flex-col lg:flex-row font-sans text-youtubeBlack mx-20 gap-6">
      <article className="basis-4/6 pt-4 mt-1 ">
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="400px"
          src={`https://www.youtube.com/embed/${vid.id}`}
          title={title}
          className="border rounded-lg"
        />
        <div className="m-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <div className="flex items-center mt-3 mb-5">
            <ChannelImage id={channelId} name={channelTitle} />
            <h3 className="font-semibold">{channelTitle}</h3>
          </div>
          <pre className="whitespace-pre-wrap">{description}</pre>
        </div>
      </article>
      <section className="basis-2/6">
        <OtherVideos id={channelId} />
      </section>
    </section>
  );
};

export default VideoDetail;
