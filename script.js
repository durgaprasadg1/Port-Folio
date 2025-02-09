let IntroDuction = document.getElementById("intro");
IntroDuction.addEventListener("click", () => {
  console.log("script.js:2:14");
});

let intro = document.getElementById("intro");
let family = document.getElementById("Family");
let Skills = document.getElementById("Skill");
let Hobbies = document.getElementById("Hobies");
let Acheivements = document.getElementById("Achievements");
let Thoughts = document.getElementById("Thoughts");



let para = document.querySelector("p");
let a = 0,
  introNum = 0,
  familyNum = 0,
  skillNum = 0,
  HobbiesNum = 0,
  AchievementsNum = 0,
  ThoughtsNum = 0;
intro.addEventListener("click", () => {
  if (a === 0 || introNum === 1) {
    para.textContent =
      "Hello ! I am very glad to introduce myself to you guys. I am Durgaprasad Girepunje. I am currently persuing my B.Tech from VIT, Pune.  I am actually from Gondia (The Rice City). It is 1020+ km far from Pune. It is really the good place and the core Vidharbha exist there int that side.";
    intro.innerText = "Close";
    family.innerText = "Family";
    Skills.innerText = "Skills";
    Hobbies.innerText = "Hobbies";
    Acheivements.innerText = "Acheivements"
    Thoughts.innerText = "Thoughts" 

    a = 1;
    familyNum = 1;
    introNum = 0;
    skillNum = 1;
    HobbiesNum = 1;
    AchievementsNum = 1;
    ThoughtsNum = 1;
  } else {
    para.textContent = " ";
    intro.innerText = "Introduction";

    a = 0;
  }
});

family.addEventListener("click", () => {
  if (a === 0 || familyNum === 1) {
    para.textContent =
      " We are total three members in our my family as me, my mother and my elder sister. My father had been passed away last year. I have acquired so many skills from my elder sister like to becoming responsible, able to determine the right and wrong steps in the life,etc. This qualities in me let me to feel as a responsible son and students.";
    family.innerText = "Close";
    intro.innerText = "Introduction";
    Skills.innerText = "Skills";
    Hobbies.innerText = "Hobbies";
    Acheivements.innerText = "Acheivements"
    Thoughts.innerText = "Thoughts" 
    HobbiesNum = 1;
    introNum = 1;
    familyNum = 0;
    skillNum = 1;
    AchievementsNum = 1;
    ThoughtsNum = 1;


    a = 1;
  } else {
    para.textContent = " ";
    family.innerText = "Family";
    // HobbiesNum = 0;
    // introNum = 0;

    // skillNum = 0;
    a = 0;
  }
});

Skills.addEventListener("click", () => {
  if (a === 0 || skillNum === 1) {
    para.textContent =
      " The technologies and skills that I have learnt till now are languageslike C & C++, in Web development, I have learnt HTML, CSS, Javascript. All of these technologies I learnt through free resources from youtube. Now , I looking to strengthen my skills by applying it in beneficial ways. ";
    Skills.innerText = "Close";
    intro.innerText = "Introduction";
    family.innerText = "Family";
    Hobbies.innerText = "Hobbies";
    Acheivements.innerText = "Acheivements"
    Thoughts.innerText = "Thoughts" 
    introNum = 1;
    familyNum = 1;
    skillNum = 0;
    HobbiesNum = 1;
    AchievementsNum = 1;
    ThoughtsNum = 1;

    a = 1;
  } else {
    para.textContent = " ";
    Skills.innerText = "Skills";
    //   introNum = 0;
    //   familyNum = 0;
    //   HobbiesNum = 0;
    a = 0;
  }
});
Hobbies.addEventListener("click", () => {
  if (a === 0 || HobbiesNum === 1) {
    para.textContent =
      "  As I already mentioned that I find myself as responsible person so I follow right choices over the wrong option for leisure. I feel passionate when I practice with my codes and programming , I feel fascinating while playing games like chess & cricket. I also like to read books based on real facts and ethics .";
    Hobbies.innerText = "Close";
    intro.innerText = "Introduction";
    Skills.innerText = "Skills";
    family.innerText = "Family";
    Acheivements.innerText = "Acheivements"
    Thoughts.innerText = "Thoughts" 
    introNum = 1;
    familyNum = 1;
    skillNum = 1;
    HobbiesNum = 0;
    AchievementsNum = 1;
    ThoughtsNum = 1;

    a = 1;
  } else {
    para.textContent = " ";
    Hobbies.innerText = "Hobbies";
    //   introNum = 0;
    //   familyNum = 0;
    //   skillNum = 0;
    a = 0;
  }
});
Acheivements.addEventListener("click", () => {
  if (a === 0 || AchievementsNum === 1) {
    para.textContent =
      " If I look behind towards my achievements till now then I was good in sports and also studies in my school life.I won marathon in school for consequetively 3yrs. In studies I ranked 2nd in 10th standard with 91.40% in 10th and 1st in 12th boards with 93.33%. In CET, I have scored 99.88%tile in PCB while 98.27%tile in PCM. ";
    Hobbies.innerText = "Hobbies";
    intro.innerText = "Introduction";
    Skills.innerText = "Skills";
    family.innerText = "Family";
    Acheivements.innerText = "Close"
    Thoughts.innerText = "Thoughts" 
    introNum = 1;
    familyNum = 1;
    skillNum = 1;
    AchievementsNum = 0;
    HobbiesNum = 1;
    ThoughtsNum = 1;

    a = 1;
  } else {
    para.textContent = " ";
    Acheivements.innerText = "Acheivements"    //   introNum = 0;
    //   familyNum = 0;
    //   skillNum = 0;
    a = 0;
  }
});
Thoughts.addEventListener("click", () => {
    if (a === 0 || ThoughtsNum === 1) {
      para.textContent =
        " DO GOOD ONLY ! GOOD WILL COME TO YOU.. ";
      Hobbies.innerText = "Hobbies";
      intro.innerText = "Introduction";
      Skills.innerText = "Skills";
      family.innerText = "Family";
      Thoughts.innerText = "Close"
      introNum = 1;
      familyNum = 1;
      skillNum = 1;
      AchievementsNum = 1;
      ThoughtsNum = 0;

      HobbiesNum = 1;
      a = 1;
    } else {
      para.textContent = " ";
      Thoughts.innerText = "Thoughts"    
      a = 0;
    }
  });
 
  