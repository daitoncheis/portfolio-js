
function updateProfileInfo(profileData) {
  const photo = document.getElementById('profile.photo')
  photo.src = profileData.photo
  photo.alt = profileData.name

  const name = document.getElementById('profile.name')
  name.innerText = profileData.name


  const email = document.getElementById('profile.email')
  email.innerText = profileData.email
  email.href = `mailto:${profileData.email}`
}

function updateJob(profileData) {
  const jobCargo = document.getElementById('profile.job')
  jobCargo.innerHTML = profileData.job.map(project => 
       `
      <a href="${project.url}" target="_blank">${project.name}</a>   
      `
  ).join('')
}

function updateLocation(profileData) {
  const locationGPS = document.getElementById('profile.location')
  locationGPS.innerHTML = profileData.location.map(project => 
       `
      <a href="${project.url}" target="_blank">${project.name}</a>   
      `
).join('')
}

function updatePhone(profileData){
  const phoneNumber = document.getElementById('profile.phone')
  phoneNumber.innerHTML = profileData.phone.map(project => `
    <a href="${project.url}" target="_blank">${project.name}</a>   
    `
  ).join('')
}

function updateSoftSkills(profileData) {
  const softSkills = document.getElementById('profile.skills.softSkills')
  softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData) {
  const hardSkills = document.getElementById('profile.skills.hardSkills')
  hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => 
    `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateLanguages(profileData) {
  const languages = document.getElementById('profile.languages')
  languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updatePortfolio(profileData) {
  const portfolio = document.getElementById('profile.portfolio')
  portfolio.innerHTML = profileData.portfolio.map(project => {
      return `
          <li>
              <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
              <a href="${project.url}" target="_blank">${project.url}</a>
          </li>
      `
  }).join('')
}

function updateCursos(profileData) {
  const cursos = document.getElementById('profile.cursos')
  cursos.innerHTML = profileData.cursos.map(project =>
     `
     <li>
     <h3>${project.name}</h3>
     <a href="${project.url}" target="_blank">${project.url}</a>
 </li>
 `
).join('')
}



(async () => {
  const profileData = await fetchProfileData()
  updateProfileInfo(profileData)
  updateSoftSkills(profileData)
  updateHardSkills(profileData)
  updateLanguages(profileData)
  updatePortfolio(profileData)
  updateCursos(profileData)
  updateJob(profileData)
  updateLocation(profileData)
  updatePhone(profileData)
  
})()
