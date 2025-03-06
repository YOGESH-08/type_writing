var start =0;
let mistakes = 0;
let mistakeTag = document.querySelector(".mistake span");
const paragraphs = [
    "I found a love for me oh darling just dive right in and follow my lead well i found a girl beautiful and sweet oh i never knew you were the someone waitin for me cause we were just kids when we fell in love not knowin what it was i will not give you up this time oh darling just kiss me slow your heart is all i own and in your eyes youre holding mine baby im dancin in the dark with you between my arms barefoot on the grass while listenin to our favourite song when you said you looked a mess i whispered underneath my breath but you heard it darling you look perfect tonight well i found a woman stronger than anyone i know she shares my dreams i hope that someday ill share her home i found a love to carry more than just my secrets to carry love to carry children of our own we are still kids but were so in love fightin against all odds i know well be alright this time darling just hold my hand be my girl ill be your man i see my future in your eyes oh baby im dancin in the dark with you between my arms barefoot on the grass while listenin to our favourite song when i saw you in that dress lookin so beautiful i dont deserve this darling you look perfect tonight no no no mm oh baby im dancin in the dark with you between my arms barefoot on the grass oh listenin to our favourite song i have faith in what i see now i know i have met an angel in person and she looks perfect though i dont deserve this you look perfect tonight"
];

const typingText = document.querySelector(".typing-text p");
const inpField = document.querySelector(".wrapper .input-field");
let charIndex = 0;

function randomParagraph() {
    let randIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = ""; // Clear previous text
    paragraphs[randIndex].split("").forEach(char => {
        let spanTag = `<span>${char}</span>`;
        typingText.innerHTML += spanTag;
    });

    document.addEventListener("keydown", () => inpField.focus());

}

function initTyping(event) {
    if (start ==0){
        song('perfect');
        start = 1;
    }
    const characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value[charIndex];

    if (event.inputType === "deleteContentBackward") { 
        
        
        // **Handle Backspace Correctly**
        if (charIndex > 0) { 
            charIndex--; 
            if (characters[charIndex].classList.contains("incorrect")){
                mistakes--;
                mistakeTag.innerText = mistakes;
            }
            
            // Skip spaces when moving back
            // while (charIndex > 0 && characters[charIndex].innerText === " ") {
            //     charIndex--;
            // }
            characters[charIndex].classList.remove("correct", "incorrect", "active");
        }
        
    } else {
        if (typedChar == null) return;

        if (characters[charIndex].innerText === typedChar) {
            characters[charIndex].classList.add("correct");
            characters[charIndex].classList.remove("incorrect");
        } else {

            song('wrong');
            mistakes++;
            mistakeTag.innerText = mistakes;
            characters[charIndex].classList.add("incorrect");
            characters[charIndex].classList.remove("correct");
        }
        charIndex++;
    }

    // **Fix Underlining Issue**  
    characters.forEach(span => span.classList.remove("active"));
    if (charIndex < characters.length) {
        characters[charIndex].classList.add("active"); 
    } else {
        // If reached the end, remove active from last character
        characters[charIndex - 1]?.classList.remove("active");
    }
    
}

randomParagraph();
inpField.addEventListener("input", initTyping);


function song(s){
    new Audio(`./audio/${s}.mp3`).play();
}
