let ratingNumber = 0

const ratings = document.querySelectorAll('.circle')
const submit = document.querySelector('#submit')
const content = document.querySelector('#content')

for (let rating of ratings) {
    rating.addEventListener('click', ()=> {
        ratingNumber = rating.dataset.rate


        ratings.forEach(element => {
            element.classList.remove('active-rating')
        })
        rating.classList.add('active-rating')
    })
}

submit.addEventListener('click', ()=> {
    content.style.opacity = 0
    content.classList.add('result')
    content.innerHTML = `
        <img 
            src="../images/illustration-thank-you.svg" 
            width="144" 
            height="96"
            alt="an illustration of a phone with a credit card going in and a receipt coming out"
            loading="lazy" 
            class="img"
        >
        <div class="selected">You selected ${ratingNumber} out of 5</div>
        <h1>Thank you!</h1>
        <p>
            We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
        </p>
    `
    content.style.opacity = 1;
})