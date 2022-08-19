export interface ItemsI {
   data:{
      totalAccountsInteracted:totalAccountsInteracted;
      totalTransactions:totalTransactions;
      totalFTDeposits:totalFTDeposits;
   };
}

export interface totalAccountsInteracted{
   total_interacted_accounts:number;
   viewed_contracts:string[];
   interacted_accounts:string[];
}

export interface totalTransactions{
   total_transactions:number;
   viewed_contracts:string[];
   total_transactions_per_contract:Record<string, number>;
}

export interface totalFTDeposits{
   interacted_accounts: string[],
   total_interacted_accounts: number,
   viewed_contracts: string[]
}