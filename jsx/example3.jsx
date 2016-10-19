 var CountCharIndex=React.createClass({
        	render:function(){
        		return <p>The number of words:{this.props.value}</p>
        	}
        });

        var CountChar=React.createClass({
        	getInitialState:function(){
        		return {value:''};
        	},
        	HowManyWordInString:function(text){
        		var text=text.split('');
        		var isWord=false;
        		var num=0;
        		for(var i=0;i<text.length;i++){
        			
        		};
        		text.forEach(function(value,index){
        			if(value!=' '){
        				isWord=true;
        			}else if(isWord==true){
        				isWord=false;
        				num++;
        			}
        			if(index==text.length-1 && isWord==true){
        				num++;
        			}
        		})
        		return num;
        	},
        	handleChange:function(event){
        		var text=event.target.value.split ('');
        		var num=0;
        		var re=/[a-zA-Z\\-\\'\s]/;
        		var isChar=false;
        		var start=-1;
        		for(var i=0;i<text.length;i++){
        			if(re.test(text[i])&&isChar==false){
        				isChar=true;
        				start=i;
        			}else if(!re.test(text[i])&&isChar==true){
        				isChar=false;
        				num=num + this.HowManyWordInString(text.join('').slice(start,i));
        			}
        			if(i==text.length-1 && isChar==true ){
        				num=num + this.HowManyWordInString(text.join('').slice(start,i+1));
        			}
        		};
        		this.setState({value:num});
        	},
        	render:function(){
        		return <div>
                    <h1>The word count calculator</h1>
        			<textarea onChange={this.handleChange}></textarea>
        			<CountCharIndex value={this.state.value}></CountCharIndex>
        		</div>
        	},
        });

        React.render(<CountChar></CountChar>,document.getElementById('example3'));