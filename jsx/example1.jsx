var ReverseIndex = React.createClass({
            render: function () {
                return  <p>reverse : {this.props.name}</p>;
            }
        });

var ReverseString=React.createClass({
        	getInitialState:function(){
        		return {value:''};
        	},
        	handleChange:function(event){
        		this.setState({value:event.target.value.split('').reverse().join('')});
        	},
        	render:function(){
        		return <div>
                    <h1>Reserse a string</h1>
        			<input type="text" onChange={this.handleChange} />
        			<ReverseIndex name={this.state.value}></ReverseIndex>
        		</div>;
        	}
        });

        React.render(<ReverseString></ReverseString>
        ,document.getElementById('example1'));        
