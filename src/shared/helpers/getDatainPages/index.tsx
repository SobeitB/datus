import {useEffect, useState} from "react";
import {
   watchedTokensState,
   contractIdsState,
   limitState,
   toTimestampState, fromTimestampState
} from '../../../features/form/inputs/model/state'
import {useRecoilValue} from "recoil";
import {SERVER_URL} from "../../config";

interface body {
   contract_ids:string[],
   from_timestamp: number,
   to_timestamp: number,

   limit?:number,
   watched_tokens?:string[]
}

export function useGetDataInPages <T>(url:string, initialValue:T) {
   const [data, setData] = useState(initialValue);
   const limit = useRecoilValue(limitState);
   let contractIds:string = useRecoilValue(contractIdsState);
   let watchedTokens:string = useRecoilValue(watchedTokensState);
   let to = useRecoilValue(fromTimestampState);
   let from = useRecoilValue(toTimestampState);

   useEffect(() => {
      async function getData() {
         contractIds = contractIds === '' ? 'contract.main.burrow.near' : contractIds;
         watchedTokens = watchedTokens === '' ? 'wrap.near' : watchedTokens;
         const contract_ids = contractIds.split(', ')
         const watched_tokens = watchedTokens.split(', ')

         const body:body = {
            contract_ids,
            "from_timestamp": from.toString() !== '' ? +(new Date(from)) : 1656633600,
            "to_timestamp":to.toString() !== '' ? +(new Date(to)) : +(+(Date.now()) / 1000).toFixed(0)
         }

         console.log(body)

         if(url === 'totalAccountsInteracted') {
            limit === '' ? body.limit = 1000000 : body.limit = +limit;
         }

         if(url === 'deposits') {
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
   }, [ limit, contractIds, to, from])

   return {
      data
   }
}