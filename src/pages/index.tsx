import {Suspense, lazy} from "react";
import { Route, Routes} from "react-router-dom";
import {LayoutLoader} from "../shared/ui/Loader/Layout";

const Home = lazy(() => import ('./Home'));
const Tokens = lazy(() => import ('./Tokens'));
const Deposits = lazy(() => import ('./Deposits'));
const Contracts = lazy(() => import ('./Contracts'));

export const Router = () => (
   <div className="container">
      <Routes>
         <Route
            path="/"
            element={
               <Suspense fallback={ <LayoutLoader /> }>
                  <Home />
               </Suspense>
            }
         />

         <Route
            path="/contracts"
            element={
               <Suspense fallback={ <LayoutLoader /> }>
                  <Contracts />
               </Suspense>
            }
         />

         <Route
            path="/tokens"
            element={
               <Suspense fallback={ <LayoutLoader /> }>
                  <Tokens />
               </Suspense>
            }
         />

         <Route
            path="/deposits"
            element={
               <Suspense fallback={ <LayoutLoader /> }>
                  <Deposits />
               </Suspense>
            }
         />
      </Routes>
   </div>
)