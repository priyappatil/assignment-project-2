// console.log('executed')

const textbox = document.getElementById('searchbar')
const button = document.getElementById('button')
// console.log(textbox)
// console.log(button)

button.addEventListener('click', () => {

    this.document.getElementById("front-image").style.display = "none";

    const username = textbox.value
    
    const xhr = new XMLHttpRequest()
    const url = `https://api.github.com/users/${username}`
    xhr.open('GET', url)

    xhr.onreadystatechange = () => {

        // console.log('The 3rd value : ' + xhr.readyState)
    
        if(xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText)
            const response = JSON.parse(xhr.responseText)
            console.log(response)
    
            const image = document.createElement('img')
            image.src = response.avatar_url
            console.log(image)

            const name = document.createElement('li')
            name.textContent = `Name :- ` + `${response.name}`
            name.style.fontFamily = 'Merriweather', 'serif';
            const username = document.createElement('li')
            username.textContent = `GitHub Username :- ` + `${response.login}` 
            username.style.fontFamily = 'Merriweather', 'serif';
            const location = document.createElement('li')
            location.textContent = `Location :- ` + `${response.location}`
            location.style.fontFamily = 'Merriweather', 'serif';
            const email = document.createElement('li')
            email.textContent = `Email ID :- ` + `${response.email}`
            email.style.fontFamily = 'Merriweather', 'serif';
            const company = document.createElement('li')
            company.textContent = `Company :- ` + `${response.company}`
            company.style.fontFamily = 'Merriweather', 'serif';
            const publicRepo = document.createElement('li')
            publicRepo.textContent = `Public Repositories :- ` + `${response.public_repos}`
            publicRepo.style.fontFamily = 'Merriweather', 'serif';
            const followers = document.createElement('li')
            followers.textContent = `Followers :- ` + `${response.followers}`
            followers.style.fontFamily = 'Merriweather', 'serif';
            const following = document.createElement('li')
            following.textContent = `Following :- ` + `${response.following}`
            following.style.fontFamily = 'Merriweather', 'serif';
            const bio = document.createElement('li')
            bio.textContent = `Bio :- ` + `${response.bio}`
            bio.style.fontFamily = 'Merriweather', 'serif';

            const list = document.getElementById('details')
            list.appendChild(name)
            list.appendChild(username)
            list.appendChild(location)
            list.appendChild(email)
            list.appendChild(company)
            list.appendChild(publicRepo)
            list.appendChild(followers)
            list.appendChild(following)
            list.appendChild(bio)
            // console.log(list.firstElementChild)

            // $("#container").empty()
            const box = document.getElementById('container')
            box.appendChild(image)     
            // box.appendChild(list)

            textbox.addEventListener('keyup',() => {
                box.removeChild(image)
                // box.removeChild(list)
                list.removeChild(name)
                list.removeChild(username)
                list.removeChild(location)
                list.removeChild(email)
                list.removeChild(company)
                list.removeChild(publicRepo)
                list.removeChild(followers)
                list.removeChild(following)
                list.removeChild(bio)
                this.document.getElementById('front-image').style.display = "inline";
            })

        } else if(xhr.status === 404) {
            alert(`No result found for ${textbox.value}`)
            textbox.value = ""
            this.document.getElementById('front-image').style.display = "inline";
        }
    }
    xhr.send()
})

// textbox.addEventListener('keyup',() => {
//     box.removeChild(image)
//     box.removeChild(list)
// })

// if(xhr.status === 404) {
//     alert(`No result found for ${textbox.value}`)
//     textbox.value = ""
//     this.document.getElementById('front-image').style.display = "inline";
