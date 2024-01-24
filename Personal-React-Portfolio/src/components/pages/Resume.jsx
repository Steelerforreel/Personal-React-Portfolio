import React from 'react'
import ResumeFile from '../../assets/files'
export default function Resume() {
  return (
    <div>
<a href={ResumeFile} download="ResumeFile" target='_blank'>
   <Button className={classes.navLink}>Resume</Button>
</a>
    </div>
  )
}
