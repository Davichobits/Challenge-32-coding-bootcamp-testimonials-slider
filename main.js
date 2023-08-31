const prevBtn = document.querySelector('#prev-btn')
const nextBtn = document.querySelector('#next-btn')

const userImg = document.querySelector('#user-img');
const userTestimonial = document.querySelector('.user-testimonial');
const userName = document.querySelector('.user-name');
const userDegree = document.querySelector('.user-degree');

const students = [
  {
    name: 'Tanya Sinclair',
    testimonial: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.”',
    imageUrl: './images/image-tanya.jpg',
    degree: 'UX Engineer',
  },
  {
    name: 'John Tarkpor',
    testimonial: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.”',
    imageUrl: './images/image-john.jpg',
    degree: 'Junior Front-end Developer',
  }
]

const updateProfileInfo = (imageIndex) => {
  userImg.setAttribute('src', students[imageIndex].imageUrl)
  userTestimonial.textContent = students[imageIndex].testimonial
  userName.textContent = students[imageIndex].name
  userDegree.textContent = students[imageIndex].degree
}

let imageIndex = 0;

prevBtn.addEventListener('click', ()=>{
  if (imageIndex === 0){
    imageIndex = students.length - 1;
  }else{
    imageIndex--
  }
  updateProfileInfo(imageIndex)
})

nextBtn.addEventListener('click', ()=>{
  if (imageIndex === students.length - 1){
    imageIndex = 0;
  }else{
    imageIndex++
  }
  updateProfileInfo(imageIndex)
})
