import React from 'react'

const Footer = () => {
  return (
    <div className="w-11/12   mx-auto text-sm border-t py-6 text-center md:flex grid gap-6 justify-between text-[#667085]">
    <p>© 2081 Manish UI. All rights reserved.</p>
    <div className="flex  gap-3">
      <a href="#" className="hover:underline">Terms</a>
      <a href="#" className="hover:underline">Privacy</a>
      <a href="#" className="hover:underline">Cookies</a>
    </div>
  </div>  )
}

export default Footer