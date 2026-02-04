import { useState } from "react";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: "Technical Workshop",
    gender: "",
  });

  const [records, setRecords] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex === null) {
      
      setRecords([...records, formData]);
    } else {
      
      const updatedRecords = records.map((item, index) =>
        index === editIndex ? formData : item
      );
      setRecords(updatedRecords);
      setEditIndex(null);
    }

   
    setFormData({
      name: "",
      email: "",
      phone: "",
      event: "Technical Workshop",
      gender: "",
    });
  };

  
  const handleEdit = (index) => {
    setFormData(records[index]);
    setEditIndex(index);
  };

 
  const handleDelete = (index) => {
    const filteredData = records.filter((_, i) => i !== index);
    setRecords(filteredData);
  };

  return (
    <div>
      <h1>Event Registration </h1>

      <form onSubmit={handleSubmit}>
        <label>Full Name:</label><br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        /><br /><br />

        Email:<br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br /><br />

        Phone:<br />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        /><br /><br />

        Select Event:<br />
        <select
          name="event"
          value={formData.event}
          onChange={handleChange}
        >
          <option>Wedding Events</option>
          <option>Birthday Parties</option>
          <option>Corporate Party</option>
        </select><br /><br />

        Gender:<br />
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={formData.gender === "Male"}
          onChange={handleChange}
        /> Male<br />

        <input
          type="radio"
          name="gender"
          value="Female"
          checked={formData.gender === "Female"}
          onChange={handleChange}
        /> Female<br />

        <input
          type="radio"
          name="gender"
          value="Other"
          checked={formData.gender === "Other"}
          onChange={handleChange}
        /> Other<br /><br />

        <button type="submit">
          {editIndex === null ? "Register" : "Update"}
        </button>
      </form>

      <hr />

      <h2>Registered Users</h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Event</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {records.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.event}</td>
              <td>{item.gender}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Register;