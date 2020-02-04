document.addEventListener("DOMContentLoaded", () => {

    let intervalID = window.setInterval(incrementCounter, 1000);
    const counter = document.querySelector("#counter")

    function incrementCounter() {
        let int = parseInt(counter.textContent) 
        counter.textContent = (int + 1 ) 
    }
    
    function decrementCounter() {
        let int = parseInt(counter.textContent) 
        counter.textContent = (int - 1 )  
    }

    const plusButton = document.getElementById("+")
    const minusButton = document.getElementById("-")

    plusButton.addEventListener("click", incrementCounter)
    minusButton.addEventListener("click", decrementCounter)

    const likeButton = document.getElementById("<3")
    likeButton.addEventListener("click", addLikes)

    let likes = {}
    function addLikes() {
        const likesList = document.querySelector(".likes")
        const currentNumber = counter.textContent
        if (likes[currentNumber]) {
            const currentLikes = likesList.querySelector(`#like-${currentNumber}`)
            likes[currentNumber] +=  1
            currentLikes.textContent = `${currentNumber}: ${likes[currentNumber]} likes`
        } else {
            const likeLi = document.createElement("li")
            likeLi.id = `like-${currentNumber}`
            likes[currentNumber] = 1
            likeLi.innerText = `${currentNumber}: 1 like`
            likesList.append(likeLi)
        }
    }

    const pauseButton = document.querySelector("#pause")
    pauseButton.addEventListener("click", pauseGame)
    let gamePaused = false

    function pauseGame() {
        gamePaused = !gamePaused
        if (gamePaused) {
            window.clearInterval(intervalID);
            pauseButton.textContent = "resume"
            plusButton.disabled = true 
            minusButton.disabled = true
            likeButton.disabled = true
        } else {
            intervalID = window.setInterval(incrementCounter, 1000)
            pauseButton.textContent = "pause"
            plusButton.disabled = false 
            minusButton.disabled = false
            likeButton.disabled = false
        }
    }

    const form = document.querySelector('#comment-form') 
    form.addEventListener("submit", leaveComment)

    function leaveComment(event) {
        event.preventDefault()
        const input = event.target.querySelector("input")
        const comment = document.createElement("p")
        comment.textContent = input.value
        document.querySelector("#list").append(comment)
        form.reset()
    }

})