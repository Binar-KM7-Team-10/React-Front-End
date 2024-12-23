import { useState } from "react";
import { DeleteUser } from "../services/user.service"; // Pastikan path sesuai

const useDeleteUser = () => {
  const [loading, setLoading] = useState(false);  // Status loading
  const [error, setError] = useState(null);  // Menyimpan pesan error
  const [success, setSuccess] = useState(false);  // Status apakah delete berhasil

  const deleteUser = async (id) => {
    if (!id) {
      setError("User ID is required");
      return;
    }

    setLoading(true);
    setError(null);  // Reset error
    setSuccess(false);  // Reset success state

    try {
      const response = await DeleteUser(id);
      if (response.success) {
        setSuccess(true);
        setError(null);
      } else {
        setError(response.message || "Failed to delete user");
        setSuccess(false);
      }
    } catch (err) {
      setError(err.message || "An unexpected error occurred");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    success,
    deleteUser,
  };
};

export default useDeleteUser;
