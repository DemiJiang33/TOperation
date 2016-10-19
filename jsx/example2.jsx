 var PigLatinIndex=React.createClass({
        	render: function () {
                return  <p>result : {this.props.name}</p>;
        	}
        });

        var PigLatin=React.createClass({
        	getInitialState:function(){
				return {value:''};
        	},
        	handleBlur:function(event){
        		var first=-1;
        		var firstvalue='';
        		var content=event.target.value.split('');
        		for(var i=0;i<content.length;i++){
        			if('aeiou'.indexOf(content[i].toLowerCase())<0){
        				firstvalue=content.splice(i,1,'').join('');
        				first=i;
        				break;
        			}
        		}
        		if(first>=0){
        			content.push('-'+firstvalue+'ay');
        		}
        		this.setState({value:content.join('')});
        	},
        	render:function(){
        		return <div>
                    <h1>Pig latin Translator</h1>
                    <p>Pig Latin is a constructed language game in which words in English are altered according to a simple set of rules. Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an ay.(For example, “banana” will be “anana-bay”）</p>
        			<input type="text" onBlur={this.handleBlur} />
        			<PigLatinIndex name={this.state.value}></PigLatinIndex>
                    <input type="button" value="Translate now!" onClick={this.handleClick} />
        		</div>;
        	}
        });

React.render(<PigLatin></PigLatin>,document.getElementById('example2'));
