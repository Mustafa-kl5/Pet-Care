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

const routes = [
  {
    path: "/",
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
    path: "/Login",
    element: <Login />,
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
    path: "/Registration",
    element: <Registration />,
  },
  {
    path: "/InfoAndTreatData",
    element: <InfoAndTreatData />,
  },
];

export default routes;
