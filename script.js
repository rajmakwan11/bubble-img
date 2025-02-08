const randomPeopleImages = [
    "./images/1.jpg",
    "./images/2.jpg",
    "./images/3.jpg",
    "./images/4.jpg",
    "./images/5.jpg",
    "./images/6.jpg",
    "./images/7.jpg",
    "./images/8.jpg",
    "./images/9.jpg",
    "./images/10.jpg",
    "./images/11.jpg",
    "./images/12.jpg",
    "./images/13.jpg",
    "./images/14.jpg",
    "./images/15.jpg",
    "./images/16.jpg",
    "./images/17.jpg",
    "./images/18.jpg",
    "./images/19.jpg",
    "./images/20.jpg"
  ];
  
  console.log(randomPeopleImages);
  

const body = document.querySelector('body');

body.addEventListener('click',(event)=>{

    // Creating Bubble 
    
    const circle = document.createElement('img');
    circle.className='bubble';

    const x = event.clientX;
    const y = event.clientY;

    circle.style.left = `${x-100}px`;
    circle.style.top = `${y-100}px`;

    // image assigning 

   const link = (Math.floor(Math.random()*randomPeopleImages.length))

    circle.setAttribute("src", `${randomPeopleImages[link]}`);

    body.appendChild(circle);


    setTimeout(()=>{
        circle.remove();
    },5000)


})

