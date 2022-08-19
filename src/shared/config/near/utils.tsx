import getConfig from './config'
import {ENVIRONTMENT} from '../index'
import {ConnectConfig} from "near-api-js/lib/browser-connect";

export const nearConfig:ConnectConfig = getConfig(ENVIRONTMENT)
export function logout() {
   window.walletConnection.signOut()
   window.location.replace(window.location.origin + window.location.pathname)
}

export function login() {
   window.walletConnection.requestSignIn(nearConfig)
}