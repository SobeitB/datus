import {useGetDataInPages} from "../../shared/helpers/getDatainPages";
import {totalFTDeposits} from "../../shared/config/index.types";
import {Center, Heading} from "@chakra-ui/react";
import {STYLED_THEME} from "../../shared/config";

const Deposits = () => {
   const {data} = useGetDataInPages<totalFTDeposits>(`total_deposits_per_contract`, {
      interacted_accounts: [],
      total_interacted_accounts: 0,
      viewed_contracts: []
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
                  <Heading color={STYLED_THEME.BG} >No data available.</Heading>
            }
         </Center>
      </div>
   )
}

export default Deposits;