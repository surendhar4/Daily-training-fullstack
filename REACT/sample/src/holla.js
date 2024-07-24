import React,{useState} from 'react'
const Question = () => {
    const[flashcards,setFlashcards]=useState([{question:"what is react?",answer:"js library"},
        {question:"what is DOM?",answer:"document object model"},
        {question:"How many types of components in react?",answer:"two"},
        {question:"What are operation of array?",answer:"push,pop"},
        {question:"what is unshift?",answer:"removing first element"},
        {question:"what is shift?",answer:"removing last element"}])
        const[currentIndex,setCurrentIndex]=useState(0);
        const[showAnswer,setShowAnswer]=useState(false);
        const toggleAnswer=()=>{
               setShowAnswer(!showAnswer)

        }
        return(
            <div>
                <h1>Flash Cards</h1>
                <h1>{flashcards[currentIndex].question}</h1>
                {showAnswer &&<p>{flashcards[currentIndex].answer}</p>}
                <button onClick={toggleAnswer}>Answer</button>
            </div>
        )
}
export default Question;
