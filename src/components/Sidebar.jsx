import React from 'react'
import '../index.css'
import profile_image from '../assets/images/profile_image.jpg'
import resume from '../assets/zahid_cv.pdf'
const Sidebar = () => {

    const sendEmailAction = () => {
        window.open("mailto:rahmanzahid298@gmail.com")
    }

    return (
        <div className="appSidebar">
            <img src={profile_image} alt="avatar" className="sidebarAvatar" />
            <div className="sidebarName">
                <h2>zahid rahman</h2>
            </div>
            <div className="sidebarItem sidebarTitle">Software Engineer</div>
            <div className="sidebarItem">
                <a href={resume} className="downloadButton" download="resume.pdf">
                <i class="fas fa-file-download"></i>
                <span className="ml-1">download resume</span>
                </a>
            </div>

            <div className="sidebarSocialIcons">
                <a href="" className="github" alt="github">
                    <i className="fab fa-github github"></i>
                </a>
                <a href="" className="docker" alt="linkedin">
                    <i className="fab fa-linkedin linkedin"></i>
                </a>
                <a href="" className="docker" alt="docker">
                    <i className="fab fa-docker docker"></i>
                </a>
                <a href="" className="facebook">
                    <i className="fab fa-facebook-square facebook"></i>
                </a>


            </div>
            <div className="contact">
                <div className="sidebarItem">
                    <i class="fas fa-at"></i>
                    <span className="ml-1">rahmanzahid298@gmail.com</span>
                </div>
                <div className="sidebarItem">
                    <i class="fas fa-map-marker-alt"></i>
                    <span className="ml-2">Dhaka,Bangladesh</span>
                </div>
            </div>
            <div className="sidebarItem sidebar_emailing">
                <a href="#" className="emailButton" onClick={sendEmailAction}>email me</a>
            </div>
        </div>
    )
}

export default Sidebar