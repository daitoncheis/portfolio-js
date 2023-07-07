function updateProfileInfo(profileData) {
  const photo = document.getElementById("profile.photo");
  photo.src = profileData.photo;
  photo.alt = profileData.name;

  const name = document.getElementById("profile.name");
  name.innerText = profileData.name;

  const pessoa = document.getElementById("profile.pessoa");
  pessoa.innerText = profileData.pessoa;

  const gps = document.getElementById("profile.gps");
  gps.innerText = profileData.gps;

  const phone = document.getElementById("profile.phone");
  phone.innerText = profileData.phone;
  phone.href = `tel:${profileData.phone}`;

  const email = document.getElementById("profile.email");
  email.innerHTML = profileData.email;
  email.href = `email:${profileData.email}`;
}

function updateSoftSkills(profileData) {
  const softSkills = document.getElementById("profile.skills.softSkills");

  softSkills.innerHTML = profileData.skills.softSkills.map((skills) => `<li>${skills}</li>`).join("");
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById("profile.skills.hardSkills");
  
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"</li>`).join("")
  }

(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updateSoftSkills(profileData);
  updateHardSkills(profileData);
})();
