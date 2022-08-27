import {useEffect, useState} from "react";
import {useDebounce} from "./debounce";
import {useRecoilState} from "recoil";
import {
   contractIdsState,
   fromTimestampState,
   limitState,
   toTimestampState,
   watchedTokensState
} from "../model/state";

export const useImplementation = (type:string) => {
   const [tokens, setTokens] = useState('');
   const [contracts, setContracts] = useState('');
   const [limit, setLimit] = useState('10');
   const [toTimestamp, setToTimestamp] = useState<any>('');
   const [fromTimestamp, setFromTimestamp] = useState<any>('');

   const tokensThrottle = useDebounce(tokens);
   const contractsThrottle = useDebounce(contracts);
   const limitThrottle= useDebounce(limit);
   const toTimestampThrottle= useDebounce(toTimestamp);
   const fromTimestampThrottle= useDebounce(fromTimestamp);

   const [tokenStateValue, setTokensState] = useRecoilState(watchedTokensState);
   const [contractStateValue, setContractsState] = useRecoilState(contractIdsState);
   const [limitStateValue, setLimitState] = useRecoilState(limitState);
   const [toTimestampValue, setToTimestampValue] = useRecoilState(toTimestampState);
   const [fromTimestampValue, setFromTimestampValue] = useRecoilState(fromTimestampState);

   useEffect(() => {
      setTokensState(tokensThrottle)
   }, [tokensThrottle])

   useEffect(() => {
      setContractsState(contractsThrottle)
   }, [contractsThrottle])

   useEffect(() => {
      setLimitState(limitThrottle)
   }, [limitThrottle])

   useEffect(() => {
      setToTimestampValue(toTimestampThrottle)
   }, [toTimestampThrottle])

   useEffect(() => {
      setFromTimestampValue(fromTimestampThrottle)
   }, [fromTimestampThrottle])

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

      if(type === 'from') {
         setFromTimestamp(valueInp);
         return;
      }

      if(type === 'to') {
         setToTimestamp(valueInp);
         return;
      }

      setContracts(valueInp);
   }

   return {
      tokens,
      contracts,
      limit,
      toTimestamp,
      fromTimestamp,

      setTokens,
      setContracts,
      setLimit,

      setTokensState,
      setContractsState,
      setLimitState,

      onChange
   }
}