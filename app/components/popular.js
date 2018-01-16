import React, { Component } from 'react';



class Popular extends Component{
    constructor(props){
        super(props);
       this.state = {
           selectedLanguage: 'ALL'
       };
       this.updateLanguage= this.updateLanguage.bind(this);
    }
    updateLanguage(lang){
        console.log(lang)
        this.setState(function(){
            return {
                selectedLanguage: lang
            }
        });
       }
       
    
    render() {
        var languages = ['ALL', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
        return (
        <div className="container">
         <ul className="languages">
             { languages.map((lang)=>{
                 return (
                 <li 
                 style={lang === this.state.selectedLanguage ?  {color : '#d0021b'}: null}
                 onClick={this.updateLanguage.bind(null, lang)} key={lang}> 
                 {lang} 
                 </li>
                 )
             },this)}
         </ul>
        </div>
        )
    }
}

export default Popular