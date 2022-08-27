import React from 'react';
import { withProviders } from "./providers";
import './index.css'
import {Router} from "../pages";
import {Header} from "../widgets/header";
import {Filtres} from "../widgets/filtres";

function App() {

   return (
      <div>
         <Header />
         <main>
            <Filtres />
            <Router />
         </main>
      </div>
   );
}

export default withProviders(App);
