

// Достаем все фото из storage
if (localStorage.length > 0) {
    let keys = Object.keys(localStorage)
    for (let key of keys) {
        const img = new Image(100, 100)
        img.src = JSON.parse(localStorage.getItem(key))
        document.querySelector('.answer-div').append(img)
    }
}



document.querySelector('.btn').addEventListener('click', () => {
    let inp1Value = document.querySelector('.ph-1').value
    let inp2Value = document.querySelector('.ph-2').value
    // console.log(inp1Value, inp2Value)


    if (isNaN(inp1Value) && isNaN(inp2Value)) {
        document.querySelector('.answer-div').innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10"
    } else if (inp1Value < 1 || inp1Value > 10 || isNaN(inp1Value)) {
        document.querySelector('.answer-div').innerHTML = "Номер страницы вне диапазона от 1 до 10"
    } else if (inp2Value < 1 || inp2Value > 10 || isNaN(inp2Value)) {
        document.querySelector('.answer-div').innerHTML = "Лимит вне диапазона от 1 до 10"
    }
    else {

        

        url = `https://picsum.photos/v2/list?page=${inp1Value}&limit=${inp2Value}`

        fetch(url).then(response => response.json()).then(images => {
            document.querySelector('.answer-div').innerHTML = ''
            ind = 0

            images.forEach(image => {
                const img = new Image(100, 100)
                img.src = image.download_url
                document.querySelector('.answer-div').append(img)

                localStorage.setItem(`${ind}`, JSON.stringify(img.src))
                ind += 1
                    
                console.log(img)
            });

            });

    }
})

