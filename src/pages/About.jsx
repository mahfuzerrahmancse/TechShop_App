import React, { useState } from "react";
import { useUser } from "../userContext";
import { useNavigate } from "react-router-dom";

// EditForm component for editing user information
const EditForm = ({ user, onSave, onCancel }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSave = () => {
    onSave(user.id, name, email);
  };

  return (
    <div className="mt-2 mb-3 p-1 ">
      <div className="mt-4">
        <label htmlFor="editName" className="p-2">
          <b>Name:</b>
        </label>
        <input
          className="p-1 text-center"
          type="text"
          id="editName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="editEmail" className="p-2 ">
          <b>Email:</b>
        </label>
        <input
          className="p-1 text-center"
          type="text"
          id="editEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* <div className="button p-1 "> */}
      <button className="btn btn-success mt-1 mr-2  " onClick={handleSave}>
        Save
      </button>
      <button className="btn btn-danger mt-1 ml-2" onClick={onCancel}>
        Cancel
      </button>
      {/* </div> */}
    </div>
  );
};

// About component with the added EditForm
export const About = () => {
  const { userData } = useUser();
  const navigate = useNavigate();
  const [editingUser, setEditingUser] = useState(null);

  const handleEdit = (id, name, email) => {
    setEditingUser({ id, name, email });
  };

  const handleSaveEdit = (id, name, email) => {
    // Update the user data with the edited information
    const updatedUserData = userData.map((user) =>
      user.id === id ? { ...user, name, email } : user
    );

    // Save the updated user data to localStorage
    localStorage.setItem("userData", JSON.stringify(updatedUserData));

    // Reset the editingUser state
    setEditingUser(null);

    // Force a page reload
    window.location.reload();
  };

  const handleCancelEdit = () => {
    // Reset the editingUser state
    setEditingUser(null);
  };

  const handleDelete = (id) => {
    // Filter out the user with the specified id
    const updatedUserData = userData.filter((user) => user.id !== id);

    // Remove the "userData" key from localStorage
    localStorage.removeItem("userData");
    localStorage.setItem("userData", JSON.stringify(updatedUserData));

    // Force a page reload
    window.location.reload();
    console.log("Deleted Id is:", id);
  };

  return (
    <div className="container mt-2">
      <h2 className="text-2xl font-bold">About Page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nemo
        blanditiis? Accusamus, repellat quis doloribus architecto recusandae
        excepturi nihil enim? Excepturi dicta aperiam debitis in minus
        dignissimos adipisci fugit corporis voluptatem? Autem quidem laborum non
        ipsum fugiat illo atque eos commodi! Impedit voluptatibus illo.
      </p>
      <br />

      <h2 className="text-2xl font-bold mt-2">User Table</h2>
      <table className="table border">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  onClick={() => handleEdit(user.id, user.name, user.email)}
                  className="btn btn-primary"
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger "
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingUser && (
        <EditForm
          user={editingUser}
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
        />
      )}
    </div>
  );
};
