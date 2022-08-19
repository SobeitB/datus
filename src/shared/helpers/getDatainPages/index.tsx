import {useEffect, useState} from "react";
import {watchedTokensState, contractIdsState, limitState} from '../../../features/form/inputs/model/state'
import {useRecoilValue} from "recoil";
import {SERVER_URL} from "../../config";

export function useGetDataInPages <T>(url:string, initialValue:T) {
   const [data, setData] = useState(initialValue);
   const limit = useRecoilValue(limitState);
   const contractIds:string = useRecoilValue(contractIdsState);
   const watchedTokens:string = useRecoilValue(watchedTokensState);

   useEffect(() => {
      async function getData() {
         const contract_ids = contractIds.replace(',', '').replace(' ', '').split(', ')
         const watched_tokens = watchedTokens.replace(',', '').replace(' ', '').split(', ')

         const body:any = {
            contract_ids,
            "from_timestamp": 1656633600000000000,
            "to_timestamp":Date.now()
         }

         if(url === '/totalAccountsInteracted') {
            body.limit = +limit;
         }

         if(url === '/deposits') {
            body.watched_tokens = watched_tokens;
         }

         const header = {
            method:'POST',
            body:JSON.stringify(body),
            headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json',
               'Access-Control-Allow-Origin':'*'
            },
         }

         const dataFetch = await fetch(SERVER_URL + url, header);
         const dataJson = await dataFetch.json();

         setData(dataJson)
      }

      getData()
   }, [ limit, contractIds])

   return {
      data
   }
}