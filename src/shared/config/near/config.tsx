import {NEAR_ADDRESS} from '../index'
import { keyStores } from 'near-api-js'
import {ConnectConfig} from "near-api-js/lib/browser-connect";
const CONTRACT_NAME = NEAR_ADDRESS

function getConfig(env:string = 'testnet'):ConnectConfig {
   switch (env) {

      case 'production':
      case 'mainnet':
         return {
            networkId: 'mainnet',
            nodeUrl: 'https://rpc.mainnet.near.org',
            // contractName: CONTRACT_NAME,
            walletUrl: 'https://wallet.near.org',
            helperUrl: 'https://helper.mainnet.near.org',
            // explorerUrl: 'https://explorer.mainnet.near.org',
            deps: {
               keyStore: new keyStores.BrowserLocalStorageKeyStore()
            },
            headers:{

            },
         }
      case 'development':
      case 'testnet':
         return {
            networkId: 'testnet',
            nodeUrl: 'https://rpc.testnet.near.org',
            // contractName: CONTRACT_NAME,
            walletUrl: 'https://wallet.testnet.near.org',
            helperUrl: 'https://helper.testnet.near.org',
            // explorerUrl: 'https://explorer.testnet.near.org',
            deps: {
               keyStore: new keyStores.BrowserLocalStorageKeyStore()
            },
            headers:{

            },
         }
      default:
         throw Error(`Unconfigured environment '${env}'. Can be configured in src/config.js.`)
   }
}

export default getConfig
