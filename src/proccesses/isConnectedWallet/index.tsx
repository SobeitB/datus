import {Center, Heading} from "@chakra-ui/react";
import {STYLED_THEME} from "../../shared/config";


export const IsConnectedWallet = ({children}: {children: React.ReactNode}) => {

   if(window.accountId !== '') {
      return <>{children}</>
   } else {
      return (
         <Center mt={'150px'}>
            <Heading
               color={STYLED_THEME.BG}
               textAlign='center'
            >Please connect near wallet</Heading>
         </Center>
      )
   }
}