<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portifólio Dáiton Cheis</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="assets/css/global.css">
    <link rel="stylesheet" href="assets/css/header.css">
    <link rel="stylesheet" href="assets/css/acordeon.css">
    <link rel="stylesheet" href="assets/css/languages.css">
    <link rel="stylesheet" href="assets/css/portfolio.css">
    <link rel="stylesheet" href="assets/css/experience.css">
    <link rel="stylesheet" href="assets/css/skills.css">
    <link rel="stylesheet" href="assets/css/backgroundanimation.css">
    <link rel="stylesheet" href="assets/css/cursos.css">
    <link rel="stylesheet" href="assets/css/footer.css">


    <title>Portfólio Dáiton Cheis</title>
  </head>
  <body>
    
      <main class="main">
        <!-- INFOS -->

        <header class="header">
          <img src="" alt="Foto de Perfil" class="photo" id="profile.photo">

          <h1 class="title">
            Olá, eu sou<br /> <span id="profile.name">Carregando...</span>
          </h1>

          <div class="info">
            <p class="job" id="profile.job">
              <a href="" id="url"
                ></a></p>
            <p class="location" id="profile.location">
              Carregando...</p>
            <p class="phone">
              <a id="profile.phone">
                Carregando...</a>
            </p>
            <p class="email">
              <a href="mailto:daitoncheis@gmail.com" id="profile.email"
                >carregando@mail.com</a
              >
            </p>
          </div>
        </header>

        <!-- IDIOMAS -->

        <section class="acordeon">
          <button class="trigger" type="button">
            <h2>IDIOMAS</h2>
          </button>

          <div class="content">
            <ul class="languages" id="profile.languages">
              <li>Loading...</li>
              <li>Loading...</li>
              <li>Loading...</li>
            </ul>
          </div>
        </section>

        <!-- PORTFÓLIO -->

        <section class="acordeon">
          <button class="trigger" type="button">
            <h2>PORTFÓLIO</h2>
          </button>

          <div class="content">
            <ul class="portfolio" id="profile.portfolio">
            
            </ul>
          </div>
        </section>

        <!-- SKILLS-->

        <section class="acordeon">
          <button class="trigger" type="button"><h2>SKILLS</h2></button>

          <div class="content">
            <div class="skills">
              <section class="tools">
                <h3>Ferramentas</h3>
                <ul id="profile.skills.hardSkills"></ul>
              </section>

              <section class="personal">
                <h3>Habilidades Pessoais</h3>
                <ul id="profile.skills.softSkills">
                  <li>Loading...</li>
                  <li>Loading...</li>
                  <li>Loading...</li>
                </ul>
              </section>
            </div>
          </div>
        </section>

        <!-- FORMAÇÃO ACADEMICA-->

        <section class="acordeon">
          <button class="trigger" type="button">
            <h2>FORMAÇÕES</h2>
          </button>

          <div class="content">
            <ul class="cursos" id="profile.cursos">
              <li>Loading...</li>
              <li>Loading...</li>
                  <li>Loading...</li>
            </ul>
          </div>
        </section>

        <!-- EXPERIENCIA PROFISSIONAL-->
<!-- 
        <section class="acordeon">
          <button class="trigger" type="button"><h2>EXPERIENCIA</h2></button>

          <div class="content">
            <ul class="experience" id="profile.professionalExperience">
              <li>
                <h3 class="title">Experiencia 1</h3>
                <img src="assets/img/em_breve.png" />
              </li>

              <li>
                <h3 class="title">Experiencia 2</h3>
                <img src="assets/img/em_breve.png" />
              </li>

              <li>
                <h3 class="title">Experiencia 3</h3>
                <img src="assets/img/em_breve.png" />
              </li>
            </ul>
          </div>
        </section> -->
      

      <footer>
        <a href="https://www.dio.me/" target="_blank">
          <img src="assets/img/dio.svg">
        </a>
      </footer>      
    </main>
  

    <!-- SCRIPTS -->

    <script src="assets/js/acordeon.js"></script>
    <script src="assets/js/api.js"></script>
    <script src="assets/js/main.js"></script>
  </body>
</html>
