let likeMaroc = document.getElementById("maroc-likes")
let likeItalie = document.getElementById("italie-likes")
let likeChenises = document.getElementById("chenises-likes")

let marocLikesCount = 0
let italieLikesCount = 0
let chainisesLikesCount = 0

console.log(likeMaroc)
let MarocLikeContent=likeMaroc.innerText;
console.log(MarocLikeContent)

likeMaroc.innerText=`${marocLikesCount} likes`
likeItalie.innerText=`${italieLikesCount} likes`
likeChenises.innerText=`${chainisesLikesCount} likes`

let buttonLikeMaroc = document.getElementById("button-like-maroc")
let buttonLikeItalie = document.getElementById("button-like-italie")
let buttonLikeChineses = document.getElementById("button-like-chenises")

buttonLikeMaroc.addEventListener("click", () => {
    marocLikesCount ++;
    likeMaroc.innerText=`${marocLikesCount} likes
`})

buttonLikeItalie.addEventListener("click", () => {
    italieLikesCount ++;
    likeItalie.innerText=`${italieLikesCount} likes
`})

buttonLikeChineses.addEventListener("click", () => {
    chainisesLikesCount ++;
    likeChenises.innerText=`${chainisesLikesCount} likes
`})