import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Videos from "./pages/Videos";
import Error from "./pages/Error";
import VideoDetail from "./pages/VideoDetail";

const queryClient = new QueryClient();
function App() {
  return (
    <Router>
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Routes>
            <Route path="/" element={<Videos />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/videos/:keyword" element={<Videos />} />
            <Route path="/videos/watch/:videoId" element={<VideoDetail />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </QueryClientProvider>
      </YoutubeApiProvider>
    </Router>
  );
}

export default App;
