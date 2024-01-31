
import React, { useState } from 'react';
import './AdminCourse.css'; // Import your CSS file
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

const AdminCourse = () => {
  const initialCourses = [
    { id: 1, name: 'Wedding event', duration: '3 hrs', fee: '$500' },
    { id: 2, name: 'Birthday event', duration: '2 hrs', fee: '$400' },
  ];

  const [courses, setCourses] = useState(initialCourses);
  const [newCourse, setNewCourse] = useState({ name: '', duration: '', fee: '' });
  const [editingCourseId, setEditingCourseId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse((prevCourse) => ({ ...prevCourse, [name]: value }));
  };

  const addCourse = () => {
    setCourses((prevCourses) => [...prevCourses, { ...newCourse, id: prevCourses.length + 1 }]);
    setNewCourse({ name: '', duration: '', fee: '' });
  };

  const editCourse = (id) => {
    setEditingCourseId(id);
    const courseToEdit = courses.find((course) => course.id === id);
    setNewCourse(courseToEdit);
  };

  const updateCourse = () => {
    setCourses((prevCourses) =>
      prevCourses.map((course) => (course.id === editingCourseId ? newCourse : course))
    );
    setEditingCourseId(null);
    setNewCourse({ name: '', duration: '', fee: '' });
  };

  const deleteCourse = (id) => {
    setCourses((prevCourses) => prevCourses.filter((course) => course.id !== id));
  };

  return (
    <div className="admin-course-container">
   <center>  <h2 className='pin'>Event Management</h2></center>
      <table className="course-table">
        <thead>
          <tr>
            <th>ID</th>
            <th> Event Name</th>
            <th>Duration</th>
            <th>Fee</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.duration}</td>
              <td>{course.fee}</td>
              <td>
                <button onClick={() => editCourse(course.id)}>
                  <AiOutlineEdit />
                </button>
                <button onClick={() => deleteCourse(course.id)}>
                  <AiOutlineDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="add-course-form">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={newCourse.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Duration"
          name="duration"
          value={newCourse.duration}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Fee"
          name="fee"
          value={newCourse.fee}
          onChange={handleInputChange}
        />
        {editingCourseId ? (
          <button className="update-btn" onClick={updateCourse}>
            Update Event
          </button>
        ) : (
          <button className="add-btn" onClick={addCourse}>
            Add Event
          </button>
        )}
      </div>
    </div>
  );
};

export default AdminCourse;