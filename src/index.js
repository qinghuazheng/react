import React from 'react';

import ReactDOM from 'react-dom';

let names=['react','redux','','react-router'];
let style={backgroundColor:'pink'};
//区分html代码和js表达式 <>  {}
ReactDOM.render(
    <div>
        {names.map(function(item,index){return item.length>0? <p style={style} className="red" key={index}>{item}</p>:null})}
    </div>,
    document.querySelector('#root')
);
