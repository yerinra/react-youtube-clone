import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../context/YoutubeApiContext";

const ChannelImage = ({ id }) => {
  const { youtube } = useYoutubeApi();
  const { data } = useQuery({
    queryKey: [id, "channel"],
    queryFn: () => youtube.channelImageURL(id),
    staleTime: 5 * 60 * 1000,
  });

  return <img src={data} className="rounded-full w-[40px] h-[40px] mr-3" />;
};

export default ChannelImage;
