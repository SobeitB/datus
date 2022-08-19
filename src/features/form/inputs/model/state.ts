import {atom} from "recoil";

export const watchedTokensState = atom({
   key: 'watchedTokens',
   default: '',
});

export const contractIdsState = atom({
   key: 'contractIds',
   default: '',
});

export const limitState = atom({
   key: 'limit',
   default: '10',
});