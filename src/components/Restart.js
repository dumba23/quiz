import React from 'react';
import { useHistory } from 'react-router-dom';
import './Restart.css';

const Restart = ({ countPoint }) =>{
    const history = useHistory();

    const handleRestart = () =>{
        history.push('/');

    }

    const text = [
        " We are sorry for your results maybe try again...",
        " Not bad! But we hope you will learn more...",
        " You are absolutely genius! Hope you didn't use google..."
    ]

    const renderList = (text) =>{
        return( 
            <div className="restart-container">
                <div className="restart-content">
                    <p>{countPoint}/10 {text}</p>
                    <button className="ui button" 
                    onClick={handleRestart}>
                    Restart
                    </button>
                </div>
            </div>    
        );
    }
    
    if(countPoint <= 5){
        return( 
                <div>
                    {renderList(text[0])}
                </div>
        );
    }else if(countPoint > 5 && countPoint <= 7){
        return (
            <div>
                {renderList(text[1])}
            </div>
        );
    }else
    return (
        <div>
            {renderList(text[2])}
        </div>
    );
}

export default Restart;