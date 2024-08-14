// import React, { useEffect, useState } from "react";
// import useAuth from "../hooks/UseAuth";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ element }) => {
//   let { getUser, ...auth } = useAuth();
//   const [isUserLoaded, setUserLoaded] = useState(false);

//   const init = async () => {
//     await getUser();
//     setUserLoaded(true);
//   };

//   useEffect(() => {
//     init();
//   }, []);

//   if (!isUserLoaded) {
//     return null;
//   }

//   return auth.user ? element : <Navigate to="/login" replace />;
// };

// export default ProtectedRoute;
