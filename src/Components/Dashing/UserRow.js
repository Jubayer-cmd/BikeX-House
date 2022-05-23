import React from "react";
import { toast } from "react-toastify";
import swal from "sweetalert";

const UserRow = ({ use, refetch, index }) => {
  const { email, role } = use;
  const makeAdmin = () => {
    fetch(`https://morning-castle-26727.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin`);
        }
      });
  };

  const handleDelete = (email) => {
    const url = `https://morning-castle-26727.herokuapp.com/user/${email}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };

  const handleDeleteUser = (email) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this user",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        handleDelete(email);
        swal("Poof! User has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your cancel the delete!");
      }
    });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} class="btn btn-primary">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button class="btn btn-primary" onClick={() => handleDeleteUser(email)}>
          <i class="bi bi-trash"></i> Remove User
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
