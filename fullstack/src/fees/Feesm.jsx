import React, { useState, useEffect } from 'react';
import './Feesm.css';

const FeesManagement = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    courseName: '',
    description: '',
    mailId: '',
    enquiryType: ''
  });
  const [editIndex, setEditIndex] = useState(-1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCourse((prevCourse) => ({ ...prevCourse, [name]: value }));
  };

  const handleAddCourse = () => {
    if (
      newCourse.courseName.trim() !== '' &&
      newCourse.description.trim() !== '' &&
      newCourse.mailId.trim() !== '' &&
      newCourse.enquiryType.trim() !== ''
    ) {
      // Placeholder for add course Axios request
      console.log('Add course:', newCourse);

      // Assuming the backend returns the updated list of courses after successful addition
      setCourses((prevCourses) => [...prevCourses, newCourse]);
      setNewCourse({
        courseName: '',
        description: '',
        mailId: '',
        enquiryType: ''
      });
    }
  };

  const handleUpdateCourse = (index) => {
    if (
      newCourse.courseName.trim() !== '' &&
      newCourse.description.trim() !== '' &&
      newCourse.mailId.trim() !== '' &&
      newCourse.enquiryType.trim() !== ''
    ) {
      // Placeholder for update course Axios request
      console.log('Update course:', newCourse);

      setCourses((prevCourses) => {
        const updatedCourses = [...prevCourses];
        updatedCourses[index] = newCourse;
        return updatedCourses;
      });

      setEditIndex(-1);
      setNewCourse({
        courseName: '',
        description: '',
        mailId: '',
        enquiryType: ''
      });
    }
  };

  const handleDeleteCourse = (index) => {
    // Placeholder for delete course Axios request
    console.log('Delete course:', courses[index]);

    setCourses((prevCourses) => {
      const updatedCourses = [...prevCourses];
      updatedCourses.splice(index, 1);
      return updatedCourses;
    });
  };

  useEffect(() => {
    // Placeholder for fetch courses Axios request
    console.log('Fetch courses');

    // Replace the following line with your actual Axios request to fetch courses
    // axios.get('your_fetch_courses_endpoint')
    //   .then(response => setCourses(response.data))
    //   .catch(error => console.error('Error fetching courses:', error));
  }, []);


  return (
    <div>
      <div className='feed'>
        <h2 className='myse'>Add Enquiry Details</h2>
        <div className='feel'>
        <input
        type="text"
        name="courseName"
        value={newCourse.courseName}
        onChange={handleChange}
        placeholder="Course Name"
      />
      <br />
      <input
        type="text"
        name="description"
        value={newCourse.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <br />
      <input
        type="text"
        name="mailId"
        value={newCourse.mailId}
        onChange={handleChange}
        placeholder="Mail ID"
      />
      <br />
      <input
        type="text"
        name="enquiryType"
        value={newCourse.enquiryType}
        onChange={handleChange}
        placeholder="Enquiry Type"
      />
      <br />
      {editIndex === -1 ? (
        <button className='loo' onClick={handleAddCourse}>
          Add Enquiry
        </button>
      ) : (
        <button className='loo' onClick={() => handleUpdateCourse(editIndex)}>
          Update Course
        </button>
      )}
    </div>
    <div className='ter'>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Description</th>
            <th>Mail ID</th>
            <th>Enquiry Type</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
        {courses.map((course, index) => (
          <tr key={index}>
            <td>
              {editIndex === index ? (
                <input
                  type="text"
                  name="courseName"
                  value={newCourse.courseName}
                  onChange={handleChange}
                />
              ) : (
                course.courseName
              )}
            </td>
            <td>
              {editIndex === index ? (
                <input
                  type="text"
                  name="description"
                  value={newCourse.description}
                  onChange={handleChange}
                />
              ) : (
                course.description
              )}
            </td>
            <td>
            {editIndex === index ? (
              <input
                type="text"
                name="Mail ID"
                value={newCourse.courseName}
                onChange={handleChange}
              />
            ) : (
              course.courseName
            )}
          </td>
          <td>
          {editIndex === index ? (
            <input
              type="text"
              name="enquiryType"
              value={newCourse.courseName}
              onChange={handleChange}
            />
          ) : (
            course.courseName
          )}
        </td>
            <td>


            {editIndex === index ? (

              <>
                        <button onClick={() => handleUpdateStudent(index)}>Save</button>
                        <button onClick={() => setEditIndex(-1)}>Cancel</button>
                      </>
                    ) : (
                      <button onClick={() => setEditIndex(index)}>Update</button>
                    )}
                    <button onClick={() => handleDeleteStudent(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FeesManagement;
