 let liTags = document.querySelectorAll('nav.menu > ul > li')/*getElementsByClassName('menuTigger')*/
    for(let i=0; i<liTags.length; i++){
      liTags[i].onmouseenter =function(x){
        x.currentTarget.classList.add('active')
       /* let li = x.currentTarget
        let brother = li.getElementsByTagName('ul')[0]
        brother.classList.add('active')*/
      }
      liTags[i].onmouseleave =function(x){
        x.currentTarget.classList.remove('active')
       /* let li = x.currentTarget
        let brother = li.getElementsByTagName('ul')[0] 
        brother.classList.remove('active')*/
      }

   }
   aTags = document.querySelectorAll('nav.menu > ul> li > a')
   function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
    }
   requestAnimationFrame(animate);
  
   for(let i=0; i<aTags.length; i++){
    aTags[i].onclick = function(x){
      x.preventDefault()
      //let a = x.currentTarget
      //let href = a.getAttribute('href')
      //let element = document.querySelector(href)
      //let top = element.offsetTop
      let top = document.querySelector(x.currentTarget.getAttribute('href')).offsetTop

      //let n = 25 //一共动多少次
      //let duration = 500 / n  //多长时间动一次
      let currentTop = window.scrollY
      let targetTop = top - 80
      let s = targetTop - currentTop
      var t = Math.abs((s/100)*300)
      if (t>500) {t=500}
     // let distance = (targetTop - currentTop) / n
     // let i = 0
     // let id = setInterval(()=>{
        //if (i===n) {
          //window.clearInterval(id)
         //return
       // }
        //i  =i+1
     //window.scrollTo(0, currentTop + distance * i)
      //},duration)
       var coords = { y: currentTop };
       var tween = new TWEEN.Tween(coords) 
        .to({ y: targetTop }, t)
        .easing(TWEEN.Easing.Quadratic.In)
        .onUpdate(function() {
          window.scrollTo(0,coords.y)
           })
          .start(); 

      /*console.log(a.href)*/
    }
   }