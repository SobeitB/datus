import {useGetDataInPages} from "../../shared/helpers/getDatainPages";
import {totalTransactions} from "../../shared/config/index.types";
import {Center, Heading} from "@chakra-ui/react";
import {STYLED_THEME} from "../../shared/config";

const Tokens = () => {
   const {data} = useGetDataInPages<totalTransactions>(`totalTransactions`, {
      total_transactions:0,
      viewed_contracts:[],
      total_transactions_per_contract:{},
   });
   console.log(
      data
   )

   return(
      <div>
         <Center flexDirection="column" mt={10}>
            {data?.total_transactions_per_contract !== undefined &&
            data?.total_transactions_per_contract !== null &&
            Object.keys(data?.total_transactions_per_contract).length ?
               Object.keys(data?.total_transactions_per_contract).map((trans:string, key:number) => (
                  <Heading key={trans} mt={1} color={STYLED_THEME.BG}>
                     {data.viewed_contracts[key]}
                     :
                     {data?.total_transactions_per_contract[trans]}
                  </Heading>
               ))
               :
               <Heading color={STYLED_THEME.BG}>No data available.</Heading>
            }
         </Center>
      </div>
   )
}

export default Tokens;