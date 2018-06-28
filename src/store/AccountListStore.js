import {observable,mobx,computed,action} from 'mobx';
import axios from 'axios';
class AccountListStore {
 
  @observable accountInfo={
    accountNoSearch:"1",
    data:[]
  }
  
  constructor() {
     //getAccountList
     axios.get("/api/getAccountList").then((response)=>{
      response=response.data;
       if(response.status===0){
          this.accountInfo.data=response.data;
       }
     });

    //mobx.autorun(() => console.log(this.accountInfo));
  }

  @action search(accountNo){
    this.accountInfo.accountNoSearch=accountNo;
  }

  @computed get accountList(){
    return this.accountInfo.data.filter((item)=>{
      return this.accountInfo.accountNoSearch==="" || 
      item.AccountNumber.indexOf(this.accountInfo.accountNoSearch)!=-1;
    });
  }


}

export default AccountListStore;