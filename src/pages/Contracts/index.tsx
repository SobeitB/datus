import {useGetDataInPages} from "../../shared/helpers/getDatainPages";
import {Center, Heading} from "@chakra-ui/react";
import {totalAccountsInteracted} from "../../shared/config/index.types";
import {STYLED_THEME} from "../../shared/config";

const Contracts = () => {
   const {data} = useGetDataInPages<totalAccountsInteracted>(`totalAccountsInteracted`, {
      interacted_accounts: [],
      total_interacted_accounts:0,
      viewed_contracts:[]
   });

   return(
      <div>
         <Center flexDirection="column" mt={10}>
            {
               data.interacted_accounts.length > 0 ?
                  data.interacted_accounts.map((data:string) => (
                     <Heading
                        key={data}
                        mt={1}
                        color={STYLED_THEME.BG}
                     >{data}</Heading>
                  ))
                  :
                  <Heading color={STYLED_THEME.BG}>No data available.</Heading>
            }
         </Center>
      </div>
   )
}

export default Contracts;