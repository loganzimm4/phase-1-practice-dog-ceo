fetch ('https://dog.ceo/api/breeds/image/random/4')
    .then(res => res.json())
    .then(data => renderImg(data.message))

    renderImg(dataArr)
    dataArr.forEach(Url => {
        const img = document.createElement('img')
        img.src = Url
        document.getElementById('dog-image-container').appendChild(img)
    })
