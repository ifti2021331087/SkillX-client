import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorElement from "../components/ErrorElement";
import Home from "../pages/Home";
import Tutors from "../pages/Tutors";
import CategoryTutors from "../components/TutorCard";
import TutorDetails from "../pages/TutorDetails";
import MyTutors from "../pages/MyTutors";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "tutors",
                element: <Tutors></Tutors>,
                loader: () => fetch('http://localhost:5001/tutors')
            },
            {
                path: "tutors/:category",
                element: <Tutors></Tutors>,
                loader: ({ params }) => fetch(`http://localhost:5001/tutors/${params.category}`)
            },
            {
                path: "/tutorDetails/id/:ID",
                element: <TutorDetails></TutorDetails>

            },
        ]
    },
    {
        path:"/myTutors",
        element:<MyTutors></MyTutors>,
        loader:()=>fetch('http://localhost:5001/myTutors')
    }
]);
export default Router;