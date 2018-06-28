import {observable,mobx,computed,action} from 'mobx';
import axios from 'axios';
class InstrunmentStore {
 
  @observable instrunmentInfo={
    instrunmentSearch:"",
    data:[]
  }
  
  constructor() {
     //getAccountList
     axios.get("/api/getInstrunmentList").then((response)=>{
      response=response.data;
       if(response.status===0){
          this.instrunmentInfo.data=response.data;
       }
     });

    //mobx.autorun(() => console.log(this.instrunment));
  }

  @action search(instrunmentName){
    this.instrunmentInfo.instrunmentSearch=instrunmentName;
  }

  @computed get accountList(){
    return this.instrunmentInfo.data.filter((item)=>{
      return this.instrunmentInfo.instrunmentSearch==="" || 
      item.InstrumentName.indexOf(this.instrunmentInfo.instrunmentSearch)!=-1;
    });
  }


}

export default InstrunmentStore;