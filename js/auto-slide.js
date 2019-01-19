 let specialTags = document.querySelectorAll('[data-x]')
      for (let i = 0; i < specialTags.length; i++) {
       specialTags[i].classList.add('offset')
      }
 setTimeout(function(){
        findClosestAndRemoveOffset()
      },1500)

 window.addEventListener('scroll', function (x){
       findClosestAndRemoveOffset()
    }) 


       
 function findClosestAndRemoveOffset(){
      let specialTags = document.querySelectorAll('[data-x]')
      let minIndex = 0
      for (let i = 1; i < specialTags.length; i++) {
       if ( Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
        minIndex =i
       }
      }
         
        specialTags[minIndex].classList.remove('offset')
      //for (let i = 0; i < specialTags.length; i++){
      //specialTags[i].classList.remove('active')
      //}
        //specialTags[minIndex].classList.add('active')
        let id = specialTags[minIndex].id
        let a = document.querySelector('a[href="#' + id +'"]')
        let li =a.parentNode
        let brothersAndMe = li.parentNode.children
        for(let i=0; i<brothersAndMe.length;i++){
          brothersAndMe[i].classList.remove('highlight')
        }
        li.classList.add('highlight')

    }