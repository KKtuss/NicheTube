function generateAvatar(color){
  const encodedColor=encodeURIComponent(color)
  return `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><rect width='40' height='40' rx='20' fill='${encodedColor}'/></svg>`
}
const channelNames=[
  "Thumbnail Memes","Meme Central","Viral Moments","Internet Gold","Trending Now",
  "Reaction Time","Meme Review","Shitpost Daily","Based Content","Sigma Grindset",
  "Alpha Energy","Chad Lifestyle","Gigachad Moments","Based Takes","Woke Destroyer",
  "Red Pill Reality","Based Memes","Sigma Tips","Alpha Mindset","Chad Chronicles",
  "Meme Lord","Viral Clips","Internet Culture","Meme Archive","Trending Clips"
]
const avatarColors=[
  "#ff0000","#00ff00","#0000ff","#ffff00","#ff00ff","#00ffff","#ff8800","#8800ff",
  "#00ff88","#ff0088","#888888","#ff4444","#44ff44","#4444ff","#ffaa00","#aa00ff",
  "#00ffaa","#ff00aa","#aa4444","#44aa44","#4444aa","#ff6600","#6600ff","#00ff66"
]
function getRandomChannel(){
  return channelNames[Math.floor(Math.random()*channelNames.length)]
}
function getRandomAvatar(){
  return 'Thumbnail memes.png'
}
const allVideos=[
  {title:"10 Signs You Are NOT A Sigma Male",views:"5.2M views",age:"1 week ago",duration:"10:02",thumb:"Thumbnails/Sigma.jpg",href:"#"},
  {title:"DON'T Celebrate A Goal This Way!! (You'll Regret It)",views:"3.5M views",age:"5 days ago",duration:"4:50",thumb:"Thumbnails/DONT CELEBRATE A GOAL THIS WAY !!.png",href:"#"},
  {title:"Ancestors Explained (You Won't Believe What They Did)",views:"1.5M views",age:"1 day ago",duration:"6:45",thumb:"Thumbnails/Ancestors.png",href:"#"},
  {title:"How to Actually Scam Retarded Goycattle Online in 2025 (Copy me)",views:"2.9M views",age:"1 week ago",duration:"9:45",thumb:"Thumbnails/How to scam retarded goycattle online.png",href:"#"},
  {title:"TOP 10 Most Vaginally Dehydrated Hassan Piker Fits",views:"2.2M views",age:"3 days ago",duration:"13:37",thumb:"Thumbnails/Piker.png",href:"#"},
  {title:"Our Brains Are Shrinking (Scientists Are WORRIED)",views:"945K views",age:"6 days ago",duration:"8:15",thumb:"Thumbnails/our-brains-are-shrinking-our-brains-are.png",href:"#"},
  {title:"Chomp Plant: The Most Dangerous Plant You've Never Seen",views:"2.1M views",age:"4 days ago",duration:"5:30",thumb:"Thumbnails/Chomp plant.png",href:"#"},
  {title:"I Punched Babies in Public (Social Experiment Gone Wrong)",views:"6.4M views",age:"2 days ago",duration:"8:20",thumb:"Thumbnails/Punching babies in public.png",href:"#"},
  {title:"Is Dragon Ball Sparkling Zero Better Than Sex? (Honest Review)",views:"4.2M views",age:"6 days ago",duration:"11:30",thumb:"Thumbnails/Is dragon ball sparkling zero better than sex.png",href:"#"},
  {title:"Why Is He Lying? (Body Language Analysis)",views:"2.6M views",age:"1 day ago",duration:"10:25",thumb:"Thumbnails/Why is he lying.png",href:"#"},
  {title:"Shoebill Gets DESTROYED (You Won't Believe What Happens)",views:"2.4M views",age:"3 days ago",duration:"4:12",thumb:"Thumbnails/Shoebill.png",href:"#"},
  {title:"Fire Writing Tutorial (This Technique Is INSANE)",views:"1.7M views",age:"3 days ago",duration:"9:15",thumb:"Thumbnails/Fire writing.png",href:"#"},
  {title:"I Abandoned My Family to Learn Arabic (30 Day Challenge)",views:"3.7M views",age:"4 days ago",duration:"15:30",thumb:"Thumbnails/Divorce your wife abandon your kids learn arabic.png",href:"#"},
  {title:"From CP Noob to Pro to Hacker to God (I Tried This For 30 Days)",views:"3.1M views",age:"5 days ago",duration:"6:30",thumb:"Thumbnails/CP Noob pro hacker god.png",href:"#"},
  {title:"Why Do They Jiggle? (The Science Behind It)",views:"1.9M views",age:"5 days ago",duration:"6:50",thumb:"Thumbnails/Why do they giggle.png",href:"#"},
  {title:"Worst Video Of All Time (You Won't Believe This Exists)",views:"5.8M views",age:"1 day ago",duration:"12:45",thumb:"Thumbnails/Worst video of all time.png",href:"#"},
  {title:"Is Pibble Really The Villain? (The Truth Exposed)",views:"2.8M views",age:"1 week ago",duration:"8:45",thumb:"Thumbnails/Is pibble really the vilain.png",href:"#"},
  {title:"FASTEST \"I'M OUT\" Pitches On Shark Tank",views:"1.8M views",age:"4 days ago",duration:"8:20",thumb:"Thumbnails/I'm out !.png",href:"#"},
  {title:"Doesn't Fit In (The Truth About Social Outcasts)",views:"980K views",age:"2 weeks ago",duration:"7:20",thumb:"Thumbnails/Doesnt fit in.png",href:"#"},
  {title:"Do We Deserve Destruction? (The Truth Will Shock You)",views:"856K views",age:"1 week ago",duration:"7:45",thumb:"Thumbnails/Do we deserve destruction.png",href:"#"},
  {title:"REAL R@PIST REACTS TO R@PE IN FICTION - PROFESSIONNAL REACTS",views:"1.3M views",age:"2 days ago",duration:"6:10",thumb:"Thumbnails/Rape.png",href:"#"}
]
const videos=allVideos.map(v=>({
  ...v,
  channel:getRandomChannel(),
  avatar:getRandomAvatar()
}))

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

    const overlay=document.createElement('div')
    overlay.className='video-overlay'
    card.appendChild(thumb)
    card.appendChild(meta)
    card.appendChild(overlay)
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
  const contractAddress='319HcUFA67YjNFsbJAUfhMLVoNPmjpJtf9w4rwch4tCp'
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
