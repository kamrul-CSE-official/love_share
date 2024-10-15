import { Route, Routes, HashRouter } from "react-router-dom";
import NotFoundPage from "./pages/notFoundPage.jsx";
import WelcomePage from "./pages/welcomePage.jsx";
import SendFilePage from "./pages/sendFile.jsx";
import ReceiveFile from "./pages/receiveFile.jsx";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/send" element={<SendFilePage />} />
        <Route path="/receive" element={<ReceiveFile />} />

        {/* Use MainLayout for all other routes */}
        {/* <Route element={<MainLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/update" element={<UpdateNote />} />
        </Route> */}

        {/* Add the 404 route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}