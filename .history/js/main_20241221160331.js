document.addEventListener('DOMContentLoaded',()=>{
    kpop();
    background();
  })

  function kpop(){
    const popWrap= document.querySelector('#pop_wrap')
    const pop=document.querySelector('#pop')
    const cultureWrap=document.querySelector('#culture_wrap')
    const culture=document.querySelector('#culture')
    const wrap=document.querySelector('#content_wrap')

    gsap.to(pop,{y:-100,opacity:0,scrollTrigger:{
        trigger:'wrap',
        start:'120% 0',
        end:'100% 0',
        scrub:4,
        pin:true

    }})

    gsap.to(cultureWrap,{y:-130,opacity:1,scrollTrigger:{
        trigger:'wrap',
        start:'120% 0',
        end:'100% 0',
        scrub:4,
        pin:true

    }})

    gsap.to(culture,{y:27,opacity:1,scrollTrigger:{
        trigger:'wrap',
        start:'120% 0',
        end:'100% 0',
        scrub:4,
        pin:true
            
    }})


  }


  function background(){
    const bgWrap=document.querySelector('#circle')
    const wrap=document.querySelector('#content_wrap')
    //  const circle= document.querySelector('#circle>lmg')

        // gsap.set(circle,{bottom:-500})
        gsap.to(bgWrap, {maskSize: "450% 450%", scrollTrigger:{
            trigger:wrap,
            start:'top 0',
            end:'400% 0',
            scrub:7,
            pin:true,
            markers:true,
        } 
 
  });
  }
