import React from 'react'

const NotificationsScroll = () => {
  const items=[
    {name:"II B.Tech II Sem (R-23) | Mid Timetable — Feb 2026",link:"#"},
    {name:"I B.Tech II Sem (R-23) | End Timetable — Feb 2026",link:"#"},

    {name:"Women's Day Notice — 2026",link:"#"},
    {name:"SAMNVAYA: National Symposium on Universal Human Values — 2026",link:"#"},
    {name:"Inspiron 2026 — National Level Technical Symposium",link:"#"}
  ]
  return (
    <div className='w-full bg-[#163E7D] text-white overflow-hidden'>
      <div className='flex whitespace-nowrap marquee gap-10 py-2 text-sm'>
        {[...items].map((item,index)=>(
          <span key={index} className='flex items-center gap-2'>
            <span className="bg-orange-500 text-xs px-2 py-0.5 rounded">NEW</span>
            
            <span className='hover:underline cursor-pointer'>{item.name}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default NotificationsScroll