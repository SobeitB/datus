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

export const fromTimestampState = atom({
   key: 'fromTimestamp',
   default: new Date(1661610004042),
});

export const toTimestampState = atom({
   key: 'toTimestamp',
   default: new Date(),
});