const paragraphs = [
    "i found a love for me oh darling just dive right in and follow my lead well i found a girl beautiful and sweet oh i never knew you were the someone waitin for me cause we were just kids when we fell in love not knowin what it was i will not give you up this time oh darling just kiss me slow your heart is all i own and in your eyes youre holding mine baby im dancin in the dark with you between my arms barefoot on the grass while listenin to our favourite song when you said you looked a mess i whispered underneath my breath but you heard it darling you look perfect tonight well i found a woman stronger than anyone i know she shares my dreams i hope that someday ill share her home i found a love to carry more than just my secrets to carry love to carry children of our own we are still kids but were so in love fightin against all odds i know well be alright this time darling just hold my hand be my girl ill be your man i see my future in your eyes oh baby im dancin in the dark with you between my arms barefoot on the grass while listenin to our favourite song when i saw you in that dress lookin so beautiful i dont deserve this darling you look perfect tonight no no no mm oh baby im dancin in the dark with you between my arms barefoot on the grass oh listenin to our favourite song i have faith in what i see now i know i have met an angel in person and she looks perfect though i dont deserve this you look perfect tonight"
  ];
  inpField = document.querySelector(".wrapper .input-field");

const typingText = document.querySelector(".typing-text p");
let charIndex = 0;

function randomParagraph(){
    let randIndex = Math.floor(Math.random()*paragraphs.length);
    paragraphs[randIndex].split("").forEach(span =>{
        let spanTag =  `<span>${span}</span>`;
        typingText.innerHTML += spanTag; 
    });
    document.addEventListener("keydown",()=>inpField.focus());
    typingText.addEventListener("click",()=>inpField.focus());
}

function initTyping(){
    
    const characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if(characters[charIndex].innerText === typedChar){
        characters[charIndex].classList.add("correct");
    }
    else{
        characters[charIndex].classList.add("incorrect");
    }
    
    charIndex++;
    characters[charIndex-1].classList.add("active");
    
    characters[charIndex-1].classList.add("remove");

}
randomParagraph();
inpField.addEventListener("input",initTyping);