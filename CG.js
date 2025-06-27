const Home = document.getElementById('Home');
const Profile = document.getElementById('Profile1');
Home.addEventListener('click',() =>{
  Profile.scrollIntoView({behavior:'smooth',block:'start'})
});
const careers = document.getElementById('careers');
const career = document.getElementById('career-section1');
careers.addEventListener('click',() =>{
  career.scrollIntoView({behavior:'smooth',block:'center'})
});
const aptitude = document.getElementById('aptitude-test');
const Aptitude = document.getElementById('Aptitude-section');
aptitude.addEventListener('click',() =>{
  Aptitude.scrollIntoView({behavior:'smooth',block:'start'})
});
const college = document.getElementById('colleges');
const College = document.getElementById('College-section');
college.addEventListener('click',() =>{
  College.scrollIntoView({behavior:'smooth',block:'start'})
});