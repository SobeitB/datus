import {login, logout} from "../../shared/config/near/utils";
import {Button} from "@chakra-ui/react";

export const ConnectWallet = () => {
   const userName = window.accountId;

   if(
      typeof userName === 'string' &&
      userName.length > 0
   ) {
      return (
         <Button
            variant="outline"
            _hover={{ bg: "teal.600", borderColor: "teal.800" }}
            onClick={logout}
            title={userName}
         >
            {userName.length > 15 ? userName.slice(0, 15) + '...' : userName}
         </Button>
      )
   }

   return(
      <Button
         variant="outline"
         _hover={{ bg: "teal.600", borderColor: "teal.800" }}
         onClick={login}
      >
         Connect wallet
      </Button>
   )
}