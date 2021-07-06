this.addEventListener("DOMContentLoaded", () =>{
    const questions = document.querySelectorAll(".question")
    questions.forEach((question) => question.addEventListener("click", () =>{
        // parentNode is .slot
        // if current selected slot is already active, clicking will toggle it
        if(question.parentNode.classList.contains("active")){
            question.parentNode.classList.toggle("active")
        } else{
            // if current selected slot not active, ensure all other slots are NOT active (remove)
            questions.forEach(question => question.parentNode.classList.remove("active"))
            question.parentNode.classList.add("active")
        }
    }))
}) 