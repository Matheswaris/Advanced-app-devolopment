import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './AdminSidebar.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

const AdminSidebar = ({ setActiveSection, activeSection }) => {
  const sections = [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: <IoIcons.IoIosPaper />,
      cName: 'nav-text'
    },
    {
      title: 'Event Details',
      path: '/course-details',
      icon: <IoIcons.IoMdPeople />,
      cName: 'nav-text'
    },
    {
      title: 'Enquiry Details',
      path: '/enquiry-details',
      icon: <FaIcons.FaEnvelopeOpenText />,
      cName: 'nav-text'
    },
  
    {
      title: 'Logout',
      path: '/main',
      icon: <AiIcons.AiOutlineLogout />,
      cName: 'nav-text'
    },
    {
      title: 'All Bookings',
      path: '/AllBookings',
      icon: <AiIcons.AiOutlineLogout />,
      cName: 'nav-text'
    },
  ];

  return (
    <div className="admin-container">
      <div className="sidebar">
        <h1>Epic Event Creations</h1>
        {sections.map((section, index) => (
          <Link to={section.path} key={index}>
            <button 
              className={activeSection === index ? 'active' : ''}
              onClick={() => setActiveSection(index)}
            >
              {section.icon}
              {section.title}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;
