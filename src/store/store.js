import {observable} from 'mobx';

class Store {
  @observable formData = {
      title:""
  }
 
  @observable searchInfo={
    accountSearch:""
  }
}

export default Store;