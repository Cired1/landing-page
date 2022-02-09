import { Routes, Route } from "react-router-dom";
import { Navbar, Footer, ScrollToTop } from "./components";
import { AboutPage, ContactPage, HomePage, Layout, NotFoundPage, PortfolioPage, ServicesPage } from "./routes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ScrollToTop>
      <Footer />
    </div>
  );
}

export default App;
