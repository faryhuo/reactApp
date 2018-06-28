
import React from 'react';
import { Button} from '@progress/kendo-react-buttons';

import 'component/OrderEditFooter/OrderEditFooter.styl'


class OrderEditFooter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            age:12
        }
    }
    componentWillMount(){
    }
    
    save(){
        this.setState({
            age:this.state.age+1
        })
        alert(this.state.age);
    }
    

    render(){
        return (
            <div className="row OrderEditFooter">
                <div className="btnList">
                   <Button onClick={(e)=>{this.save(e)}}>Save</Button >
                   <Button primary={true}>Submit</Button >
                </div>
            </div>
        );
    }
}

export default OrderEditFooter;