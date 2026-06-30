import { gameImagesList } from "./gameImages";
import { createWindow } from "./window";

export function onClick(icon){
    function sidbarclick(val){
        const body_about = document.querySelector("#aboutme").querySelector(".content").querySelector(".mainBody");
        
        switch(val){
            case "intro":
                body_about.classList.remove("plans");
                body_about.classList.remove("more");
                body_about.classList.add("intro");
                body_about.innerHTML = `
                    <h1>Hello!!! My name is Austin Igneous Philip.</h1>
                    <div>
                        <div class="introText">
                            <p>If you want to know me, you are on the right page.</p>
                            <p>My name is Austin, and I am a third-year Computer Science student at Simon Fraser University. My pronouns are he/him, though I am comfortable with any pronouns. As I am still exploring my path as a student, I would not say there is one particular field I specialize in yet. However, I am proficient in multiple programming languages and enjoy exploring the many different areas the tech industry has to offer.</p>
                            <p>In my free time, you'll usually find me reading comics, playing games, or making music. Sometimes, I like to wander outside with no particular destination in mind, just enjoying the moment. I also love collecting plushies, figures, and album CDs.</p>
                        </div>
                        <img src="IMG_0732.jpg" />
                    </div>
                `;
                break;
            case "plans":
                body_about.classList.remove("intro");
                body_about.classList.remove("more");
                body_about.classList.add("plans");
                body_about.innerHTML = `
                    <div>
                        <h1>What am I up to?</h1>
                        <ul>
                            <li>Focusing on buliding up my resume and applying to as many jobs as possible to at least get an internship before next winter.</li>
                            <li>Focus on improving my music production skills and uploading more music.</li>
                            <li>Spend more time studying to imporve my GPA.</li>
                        </ul>
                    </div>
                    <div>
                        <h1>What do I plan on doing ahead?</h1>
                        <ul>
                            <li>I plan to look for more sound realted courses in the future since I really enjoy sound design.</li>
                            <li>I want to focus on improving my overall health and mental.</li>
                            <li>I want to join more volunteering programs to help my community more.</li>
                        </ul>
                    </div>
                `;
                break;
            case "more":
                body_about.classList.remove("intro");
                body_about.classList.remove("plans");
                body_about.classList.add("more");

                body_about.innerHTML = `
                    <div class="gameHolder">
                        <h2>Here are some games I like:</h2>
                    </div>
                `;
                
                const imageList = gameImagesList.images;

                const imageContainer = document.createElement("div");
                imageContainer.className = "games"
                imageList.forEach(img => {
                    imageContainer.appendChild(img);
                });
                body_about.appendChild(imageContainer);

                body_about.innerHTML += `
                    <div id="music">
                        <h2>Here are some songs I like:</h2>
                        <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0eCmDELfKE84x3ePxEXMcd?utm_source=generator&theme=0&si=244b7bec441a4c4b" width="98%" height="320" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                `
                break;
            default:
                break;
        }
    }

    icon.addEventListener("dblclick", ()=>{
        const text = icon.querySelector("p");

        console.log(`clicked ${text.textContent}`);

        switch(text.textContent){
            case "About Me":
                createWindow("app", "aboutme");

                const title_about = document.querySelector("#aboutme").querySelector(".title").querySelector("p");
                title_about.textContent = "About Me";

                const content_about = document.querySelector("#aboutme").querySelector(".content");
                
                content_about.innerHTML = `
                    <div class="sidebar">
                        <a data-target="intro">Introdution</a>
                        <a data-target="plans">Plans</a>
                        <a data-target="more">More</a>
                    </div>
                    <div class="mainBody"></div>
                `;

                const sidebar = content_about.querySelector(".sidebar");
                sidebar.addEventListener("click", (e) => {
                    const targetLink = e.target.closest("a");
                    
                    if (targetLink) {
                        const val = targetLink.getAttribute("data-target");
                        sidbarclick(val);
                    }
                });

                sidbarclick("intro");

                break;
            case "Skills":
                createWindow("app", "skill");

                const title_skill = document.querySelector("#skill").querySelector(".title").querySelector("p");
                title_skill.textContent = "Skill";
                break;
            case "Resume":
                const link = document.createElement('a');

                link.href = '/resume.pdf';
                link.download = 'AustinsResume.pdf';

                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                break;
            case "Music":
                console.log("yes");
                window.open("https://www.youtube.com/@TinCan420", "_blank");
                break;
            case "GitHub":
                window.open("https://github.com/TinCanAustin", "_blank");
                break;
            case "Linkdin":
                window.open("https://www.linkedin.com/in/austin-philip-1a0493324/", "_blank");
                break;
            case "Itch.io":
                window.open("https://tincanaustin.itch.io/", "_blank");
                break;
            default:
                break;
        };

    });
}