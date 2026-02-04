import { useState } from "react";

const Eventcrud1 = () => {
  const events = [
    {
      id: 1,
      name: "Music Fest 2026",
      date: "20 Feb 2026",
      location: "Chennai",
      image:
        "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
    },
    {
      id: 2,
      name: "Tech Conference",
      date: "10 Mar 2026",
      location: "Bangalore",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    },
    {
      id: 3,
name: "Cultural Night",                             
      date: "5 Apr 2026",
      location: "Coimbatore",
      image:
        "https://images.unsplash.com/photo-1521334884684-d80222895322",
    },
     {
      id: 4,
      name: "Cultural Night",
      date: "5 Apr 2026",
      location: "Coimbatore",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.nRsbRHg2lBeB4S0QQMHSqQHaE7?w=512&h=341&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ];

  const [records, setRecords] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    location: "",
    image: "",
  });
  const handleRegister = (event) => {
    setRecords([...records, event]);
  };
  const handleDelete = (index) => {
    setRecords(records.filter((_, i) => i !== index));
  };
  const handleEdit = (index) => {
    setFormData(records[index]);
    setEditIndex(index);
  };
  const handleUpdate = () => {
    const updated = records.map((item, index) =>
      index === editIndex ? formData : item
    );
    setRecords(updated);
    setEditIndex(null);
    setFormData({ name: "", date: "", location: "", image: "" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Event Management</h2>

    
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {events.map((event) => (
          <div
            key={event.id}
            style={{
              width: "260px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <img
              src={event.image}
              alt={event.name}
              style={{ width: "100%", height: "160px", objectFit: "cover" }}
            />

            <div style={{ padding: "15px" }}>
              <h3>{event.name}</h3>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Location:</strong> {event.location}</p>

              <button
                onClick={() => handleRegister(event)}
                style={{
                  width: "100%",
                  padding: "8px",
                  background: "#0066ff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Register
              </button>
            </div>
          </div>
        ))}
      </div>

     
      {editIndex !== null && (
        <div style={{ marginTop: "30px" }}>
          <h3>Edit Registered Event</h3>

          <input
            type="text"
            placeholder="Event Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
          <br /><br />

          <input
            type="text"
            placeholder="Date"
            value={formData.date}
            onChange={(e) =>
              setFormData({ ...formData, date: e.target.value })
            }
          />
          <br /><br />

          <input
            type="text"
            placeholder="Location"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
          />
          <br /><br />

          <input
            type="text"
            placeholder="Image URL"
            value={formData.image}
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.value })
            }
          />
          <br /><br />

          <button onClick={handleUpdate}>Update</button>
        </div>
      )}

      
      <h2 style={{ marginTop: "40px" }}>Registered Events</h2>

      {records.length === 0 ? (
        <p>No registrations yet</p>
      ) : (
        <table
          border="1"
          cellPadding="10"
          style={{ width: "100%", borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              <th>Image</th>
              <th>Event Name</th>
              <th>Date</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.map((item, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={item.image}
                    alt={item.name}
                    width="80"
                    height="50"
                    style={{ objectFit: "cover" }}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.date}</td>
                <td>{item.location}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button
                    onClick={() => handleDelete(index)}
                    style={{ marginLeft: "10px" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Eventcrud1;
