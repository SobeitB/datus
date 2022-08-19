import {RecoilRoot} from 'recoil';

export const withStateManagment = (component: () => React.ReactNode) => () => (
   <RecoilRoot>
      {component()}
   </RecoilRoot>
);