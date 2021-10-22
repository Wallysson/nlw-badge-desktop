const linkSocialMedia = {
  github: 'Wallysson',
  linkedin: 'wallysson-lima-do-couto/',
  facebook: 'sonson.lima',
  instagram: 'sonsonlima',
  twitter: 'sonsonlima1'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    if (social === 'linkedin') {
      li.children[0].href = `https://${social}.com/in/${linkSocialMedia[social]}`
    } else {
      li.children[0].href = `https://${social}.com/${linkSocialMedia[social]}`
    }
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linkSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGithub.href = data.html_url
      userImg.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
