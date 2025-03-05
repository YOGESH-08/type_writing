const paragraphs = [
    "I found a love for me Oh darling just dive right in and follow my lead Well I found a girl beautiful and sweet Oh I never knew you were the someone waitin for me Cause we were just kids when we fell in love not knowin what it was I will not give you up this time Oh darling just kiss me slow your heart is all I own And in your eyes youre holding mine Baby Im dancin in the dark with you between my arms Barefoot on the grass while listenin to our favourite song When you said you looked a mess I whispered underneath my breath But you heard it Darling you look perfect tonight Well I found a woman stronger than anyone I know She shares my dreams I hope that someday Ill share her home I found a love to carry more than just my secrets To carry love to carry children of our own We are still kids but were so in love fightin against all odds I know well be alright this time Darling just hold my hand be my girl Ill be your man I see my future in your eyes Oh baby Im dancin in the dark with you between my arms Barefoot on the grass while listenin to our favourite song When I saw you in that dress lookin so beautiful I dont deserve this darling you look perfect tonight No no no Mm oh Baby Im dancin in the dark with you between my arms Barefoot on the grass oh listenin to our favourite song I have faith in what I see now I know I have met An angel in person and she looks perfect Though I dont deserve this you look perfect tonight"
  ];
  

const typingText = document.querySelector(".typing-text");

function randomParagraph(){
    let randIndex = Math.floor(Math.random()*paragraphs.length);
    paragraphs[randIndex].split("").forEach(span =>{
        let spanTag =  `<span>${span}<span>`;
        typingText.innerHTML += spanTag; 
        console.log(typingText.innerHTML)
    })
}
randomParagraph();