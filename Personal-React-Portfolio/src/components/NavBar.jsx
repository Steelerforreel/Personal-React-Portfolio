import React from 'react'

export default function NavBar({ currentPage, handlePageChange }) {
  return (
    <div className='nav nav-tabs'>
        <div className='nav-item'>
            <a href='/' 
            onClick={() => handlePageChange('AboutMe')}
            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>About Me</a>
        </div>
        <div>
            <a href='/Contact' 
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
        </div>
        <div>
            <a href='/Portfolio' 
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
        </div>
        <div>
            <a href='/Resume' 
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
        </div>
    </div>
  )
}
