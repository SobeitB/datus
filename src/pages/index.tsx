import {Suspense, lazy} from "react";
import { Route, Routes} from "react-router-dom";
import {LayoutLoader} from "shared/ui/Loader/Layout";
import {IsConnectedWallet} from "proccesses/isConnectedWallet";

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
                  <IsConnectedWallet>
                     <Contracts />
                  </IsConnectedWallet>
               </Suspense>
            }
         />

         <Route
            path="/tokens"
            element={
               <Suspense fallback={ <LayoutLoader /> }>
                  <IsConnectedWallet>
                     <Tokens />
                  </IsConnectedWallet>
               </Suspense>
            }
         />

         <Route
            path="/deposits"
            element={
               <Suspense fallback={ <LayoutLoader /> }>
                  <IsConnectedWallet>
                     <Deposits />
                  </IsConnectedWallet>
               </Suspense>
            }
         />
      </Routes>
   </div>
)