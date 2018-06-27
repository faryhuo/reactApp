/*
* @Author: Rosen
* @Date:   2018-01-13 11:27:21
* @Last Modified by:   Rosen
* @Last Modified time: 2018-02-05 14:02:20
*/  

import React            from 'react';
import ReactDOM         from 'react-dom';


let style={
    color:'red',
    fontSize:'30px'
}

let name="frary";
var flag=false;
let names=["Fary","User","Reson"];
let jex=(
      <div className="" style={style}>
          {flag?<span>jsx....{name}</span>:
              <span>{name}</span>}
      </div>


    );

ReactDOM.render(
    jex,
    document.getElementById('app')
);