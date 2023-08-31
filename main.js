const prevBtn = document.querySelector('#prev-btn')
const nextBtn = document.querySelector('#next-btn')

const imgProfile = document.querySelector('#img-profile');
const testimonialProfile = document.querySelector('#testimonial-profile');
const nameProfile = document.querySelector('#name-profile');
const degreeProfile = document.querySelector('#degree-profile');

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
  imgProfile.setAttribute('src', students[imageIndex].imageUrl)
  testimonialProfile.textContent = students[imageIndex].testimonial
  nameProfile.textContent = students[imageIndex].name
  degreeProfile.textContent = students[imageIndex].degree
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
