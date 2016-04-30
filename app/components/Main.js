var React=require('react');
var ReactDom=require('react-dom');

var Main= React.createClass({
    render:function(){
        return (
            <div> 
                hello my first react2
            </div>
        )
    }
});

ReactDom.render(<Main/>,document.getElementById('app'));