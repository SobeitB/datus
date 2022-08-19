import { connect, WalletConnection } from 'near-api-js'
import {nearConfig} from './utils'
import {Near, } from "near-api-js/lib/near";

declare global {
   interface Window {
      walletConnection:any;
      accountId:string | undefined;
      nearInitPromise:Promise<void>;
      near:Near;
   }
}

export async function initContract() {
   window.near = await connect(nearConfig)

   window.walletConnection = new WalletConnection(window.near, 'my-app')

   window.accountId = window.walletConnection.getAccountId()
}