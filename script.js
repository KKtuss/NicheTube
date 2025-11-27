const avatarData="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><rect width='40' height='40' rx='20' fill='%23ddd'/></svg>"
const allVideos=[
  {title:"Yappersteak",channel:"Thumbnail Memes",views:"1.2M views",age:"2 days ago",duration:"5:23",avatar:avatarData,thumb:"Thumbnails/Yappersteak.png",href:"#"},
  {title:"Do we deserve destruction",channel:"Thumbnail Memes",views:"856K views",age:"1 week ago",duration:"7:45",avatar:avatarData,thumb:"Thumbnails/Do we deserve destruction.png",href:"#"},
  {title:"Shoebill",channel:"Thumbnail Memes",views:"2.4M views",age:"3 days ago",duration:"4:12",avatar:avatarData,thumb:"Thumbnails/Shoebill.png",href:"#"},
  {title:"CP Noob pro hacker god",channel:"Thumbnail Memes",views:"3.1M views",age:"5 days ago",duration:"6:30",avatar:avatarData,thumb:"Thumbnails/CP Noob pro hacker god.png",href:"#"},
  {title:"I'm out !",channel:"Thumbnail Memes",views:"1.8M views",age:"4 days ago",duration:"8:20",avatar:avatarData,thumb:"Thumbnails/I'm out !.png",href:"#"},
  {title:"Our brains are shrinking",channel:"Thumbnail Memes",views:"945K views",age:"6 days ago",duration:"8:15",avatar:avatarData,thumb:"Thumbnails/our-brains-are-shrinking-our-brains-are.png",href:"#"},
  {title:"Sigma",channel:"Thumbnail Memes",views:"5.2M views",age:"1 week ago",duration:"10:02",avatar:avatarData,thumb:"Thumbnails/Sigma.jpg",href:"#"}
]
const videos=allVideos.sort(()=>Math.random()-0.5)

function thumbUrl(id){return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`}

function getThumb(v){ return v.thumb ? v.thumb : thumbUrl(v.id) }

function render(){
  const grid=document.getElementById('grid')
  grid.innerHTML=''
  videos.forEach(v=>{
    const card=document.createElement('a')
    card.className='video-card'
    const href = v.href ? v.href : (v.id ? `https://www.youtube.com/watch?v=${v.id}` : '#')
    card.href=href
    card.target=v.href?'_self':'_blank'

    const thumb=document.createElement('div')
    thumb.className='thumb'
    const img=document.createElement('img')
    img.src=getThumb(v)
    img.alt=v.title
    const dur=document.createElement('span')
    dur.className='duration'
    dur.textContent=v.duration
    thumb.appendChild(img)
    thumb.appendChild(dur)

    const meta=document.createElement('div')
    meta.className='meta'
    const av=document.createElement('button')
    av.className='avatar'
    const avImg=document.createElement('img')
    avImg.src=v.avatar
    avImg.alt=v.channel
    av.appendChild(avImg)

    const text=document.createElement('div')
    const title=document.createElement('h3')
    title.className='title'
    title.textContent=v.title
    const sub=document.createElement('div')
    sub.className='subtext'
    sub.textContent=`${v.channel} • ${v.views} • ${v.age}`
    text.appendChild(title)
    text.appendChild(sub)

    meta.appendChild(av)
    meta.appendChild(text)

    card.appendChild(thumb)
    card.appendChild(meta)
    grid.appendChild(card)
  })
}

function setup(){
  const sigmaImgPath='Thumbnails/Sigma.jpg'
  const probe=new Image()
  probe.src=sigmaImgPath
  probe.onload=()=>{
    const ratio=(probe.naturalWidth||16)/(probe.naturalHeight||9)
    document.documentElement.style.setProperty('--thumb-ratio', String(ratio))
  }
  const chips=document.getElementById('chips')
  chips.addEventListener('click',e=>{
    const t=e.target
    if(!t.classList.contains('chip'))return
    [...chips.children].forEach(c=>c.classList.remove('active'))
    t.classList.add('active')
  })
  const searchBtn=document.getElementById('searchBtn')
  const searchBtnMobile=document.getElementById('searchBtnMobile')
  const searchInput=document.getElementById('searchInput')
  function handleSearch(){
    const q=searchInput?searchInput.value.trim():''
    if(!q)return
    const url=`https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`
    window.open(url,'_blank')
  }
  if(searchBtn)searchBtn.addEventListener('click',handleSearch)
  if(searchBtnMobile)searchBtnMobile.addEventListener('click',handleSearch)
  const menuBtn=document.getElementById('menuBtn')
  const sidebar=document.getElementById('sidebar')
  const sidebarOverlay=document.getElementById('sidebarOverlay')
  function isMobile(){return window.innerWidth<=768}
  function closeSidebar(){
    sidebar.classList.remove('mobile-open')
    sidebarOverlay.classList.remove('show')
  }
  if(isMobile()){
    menuBtn.addEventListener('click',(e)=>{
      e.stopPropagation()
      sidebar.classList.toggle('mobile-open')
      sidebarOverlay.classList.toggle('show')
    })
    sidebarOverlay.addEventListener('click',closeSidebar)
    const navItems=sidebar.querySelectorAll('.nav-item')
    navItems.forEach(item=>{
      item.addEventListener('click',closeSidebar)
    })
  }
  window.addEventListener('resize',()=>{
    if(!isMobile()){
      closeSidebar()
    }
  })
  const profileBtn=document.getElementById('profileBtn')
  const profilePopup=document.getElementById('profilePopup')
  profileBtn.addEventListener('click',(e)=>{
    e.stopPropagation()
    profilePopup.classList.toggle('show')
  })
  document.addEventListener('click',(e)=>{
    if(!profilePopup.contains(e.target)&&!profileBtn.contains(e.target)){
      profilePopup.classList.remove('show')
    }
  })
  const contractAddressItem=document.getElementById('contractAddressItem')
  const contractAddress='0x1234567890abcdef1234567890abcdef12345678'
  contractAddressItem.addEventListener('click',async()=>{
    try{
      await navigator.clipboard.writeText(contractAddress)
      const originalText=document.getElementById('contractAddress').textContent
      document.getElementById('contractAddress').textContent='Copied!'
      setTimeout(()=>{
        document.getElementById('contractAddress').textContent=originalText
      },1000)
    }catch(err){
      console.error('Failed to copy:',err)
    }
  })
  render()
  function fixMobileLayout(){
    if(window.innerWidth<=768){
      const topbar=document.querySelector('.topbar')
      const chips=document.getElementById('chips')
      const grid=document.getElementById('grid')
      if(topbar&&chips&&grid){
        const headerRect=topbar.getBoundingClientRect()
        const headerHeight=headerRect.height
        chips.style.top=headerHeight+'px'
        chips.style.marginTop='0'
        chips.style.paddingTop='8px'
        chips.style.paddingBottom='8px'
        const chipsRect=chips.getBoundingClientRect()
        const chipsHeight=chipsRect.height
        grid.style.paddingTop=(chipsHeight+8)+'px'
        grid.style.marginTop='0'
        console.log('Header height:',headerHeight,'Chips height:',chipsHeight,'Grid padding:',chipsHeight+8)
      }
    }
  }
  setTimeout(fixMobileLayout,200)
  window.addEventListener('resize',()=>{
    if(!isMobile()){
      closeSidebar()
    }else{
      setTimeout(fixMobileLayout,50)
    }
  })
}

document.addEventListener('DOMContentLoaded',setup)
