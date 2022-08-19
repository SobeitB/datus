import {useEffect, useState} from "react";
import {useDebounce} from "./debounce";
import {useRecoilState} from "recoil";
import {contractIdsState, limitState, watchedTokensState} from "../model/state";

export const useImplementation = (type:string) => {
   const [tokens, setTokens] = useState('');
   const [contracts, setContracts] = useState('');
   const [limit, setLimit] = useState('10');

   const tokensThrottle = useDebounce(tokens);
   const contractsThrottle = useDebounce(contracts);
   const limitThrottle= useDebounce(limit);

   const [tokenStateValue, setTokensState] = useRecoilState(watchedTokensState);
   const [contractStateValue, setContractsState] = useRecoilState(contractIdsState);
   const [limitStateValue, setLimitState] = useRecoilState(limitState);

   useEffect(() => {
      setTokensState(tokensThrottle)
   }, [tokensThrottle])

   useEffect(() => {
      setContractsState(contractsThrottle)
   }, [contractsThrottle])

   useEffect(() => {
      setLimitState(limitThrottle)
   }, [limitThrottle])

   const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
      const valueInp = event.target.value

      if(type === 'tokens') {
         setTokens(valueInp);
         return;
      }

      if(type === 'limit') {
         setLimit(valueInp);
         return;
      }

      setContracts(valueInp);
   }

   return {
      tokens,
      contracts,
      limit,

      setTokens,
      setContracts,
      setLimit,

      setTokensState,
      setContractsState,
      setLimitState,

      onChange
   }
}