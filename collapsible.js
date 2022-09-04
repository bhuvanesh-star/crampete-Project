
// this code is responsible for the multiple readmore sections in a single page
let noOfChar = 400;
let contents = document.querySelectorAll(".content")
    //console.log(contents)
    contents.forEach(content =>{
      // if less content hide info button
      if(content.textContent.length < noOfChar){
        content.nextElementSibling.style.display = "none";
      }
      else{
        let displayText = content.textContent.slice(0, noOfChar);

        let moreText = content.textContent.slice(noOfChar);
        content.innerHTML = `${displayText} <span class="dots">...</span>
        <span class="hide more">${moreText}</span> `
      }
    });

    function readMore(btn){
      let post = btn.parentElement;
      //console.log(post);
      post.querySelector(".dots").classList.toggle("hide");
      post.querySelector(".more").classList.toggle("hide");
      // ternary operator but didn't work. 
      //btn.textContent == "Read More" ? btn.textContent = "Read Less" : btn.textContent = "Read More";

    //}
      if(btn.textContent == "Read Less"){
        btn.innerHTML = "Read More"
      }
      else{
        btn.innerHTML = "Read Less"
      }
     }
    