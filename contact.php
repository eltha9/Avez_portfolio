<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Gaëtan Avez - Contact</title>
    <link rel="stylesheet" href="./styles/contact.css">
</head>
<body>
    <div class="home-animation-window">
        <div class="window-side"></div>
        <div class="window-center border"></div>
        <div class="window-center border"></div>
        <div class="window-center border">
            <a class="nav" href="about">About me</a>
        </div>
        <div class="window-center border">
            <a class="nav" href="home">Project</a>
        </div>
        <div class="window-center border">
            <a class="nav" href="contact">Contact</a>
        </div>
        <div class="window-side right border"></div>
    </div>
    <a class="logo"href="home">gaetan avez.</a>
    <div class="social">
        <a href="https://www.linkedin.com/in/gaetan-avez/" title="Gaëtan Avez - Linkedin"><img src="./images/linkedin.svg" alt="Linkedin logo"></a>
        <a class="facebook" href="https://www.facebook.com/gaetan.avez.3" title="Gaëtan Avez - Facebook"><img src="./images/facebook.svg" alt="Facebook logo"></a>
        <a href="https://dribbble.com/GaetanAvez" title="Gaëtan Avez - Dribbble"><img src="./images/dribble.svg" alt="Dribbble logo"></a>
    </div>

    </div>
    <main>
        <h1>Leave me a message</h1>
        <div class="mailing">
            <span>Or by email: <a href="mailto:gaetan.avez@gmail.com">gaetan.avez@gmail.com</a></span>
            <div class="inputs">
                <div class="first-input">
                    <input class="name" type="text" placeholder="Nom">
                    <input class="email" type="email" placeholder="Email">
                </div>
                <div class="second-input">
                    <span>Hello Gaetan, </span>
                    <div class="text" contenteditable="true">

                    </div>
                </div>
            </div>
            <div class="send-button">
                <span>Send it <img src="images/project_button.svg" alt=""></span>
            </div>
        </div>
        <div class="validate hide">
            <h2>Thanks for your message !</h2>
            <span>I will repply soon</span>
        </div>
    </main>
    <script src="./scripts/mail.js"></script>
</body>
</html>