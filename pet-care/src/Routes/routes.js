import Home from "../pages/HomePage";
import AdoptionPost from "../pages/AdoptionPost";
import InformationTreatment from "../pages/InformationandTreatmentPage";
import Login from "../pages/LoginPage";
import Payment from "../pages/Paymentpage";
import Post from "../pages/PostPage";
import Profile from "../pages/ProfilePage";
import Store from "../pages/StorePage";
import Registration from "../pages/RegistrationPage";
import InfoAndTreatData from "../pages/InfoAndTreatData";
import InformationBreed from "../pages/InformationBreedPage";
import InformationBreedPage from "../pages/InformationBreedPage";
import InformationandTreatmentMainPage from "../pages/InformationandTreatmentMainPage";
import NormalPostData from "../pages/NormalPostData";
import AdoptionPostData from "../pages/AdoptionPostData";
const routes = [
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/AdoptionPost",
    element: <AdoptionPost />,
  },
  {
    path: "/InformationTreatment",
    element: <InformationTreatment />,
  },
  {
    path: "/Payment",
    element: <Payment />,
  },
  {
    path: "/Posts",
    element: <Post />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path: "/Store",
    element: <Store />,
  },
  {
    path: "/InformationBreedPage/:type/:src",
    element: <InformationBreedPage />,
  },
  {
    path: "/InformationandTreatmentMainPage/:breed/:type/:src",
    element: <InformationandTreatmentMainPage />,
  },
  {
    path: "/postData/:postID",
    element: <NormalPostData />,
  },
  {
    path: "/adoptionPostData/:postID",
    element: <AdoptionPostData />,
  },
];

export default routes;
