 let btn=document.querySelector("#press")
        btn.addEventListener("click",()=>{

            let userPoints=document.querySelector(".user-points")
            let userdice=document.querySelector(".user-dice")
            let botPoints=document.querySelector(".bot-points")
            let botdice=document.querySelector(".bot-dice")
            let winner=document.querySelector(".win")
    
            function randomNum() {
                return Math.floor(Math.random()*6)+1;
            }
            
            let userNewPoints=randomNum();
            userPoints.innerHTML=`${userNewPoints}`
            let botNewPoints=randomNum()
            botPoints.innerHTML=`${botNewPoints}`
    
            userdice.style.backgroundImage=`url(./images/dice${userNewPoints}.png)`
            botdice.style.backgroundImage=`url(./images/dice${botNewPoints}.png)`
            winner.style.visibility="visible"
            if (userNewPoints>botNewPoints) {
                winner.innerHTML=`Congratulation! You Win 👑🎊`
            }
            else if (botNewPoints>userNewPoints) {
                winner.innerHTML=`Bot Win ! Better luck next time👎`
            }
            else{
                winner.innerHTML=`Tie`
                
            }
        })