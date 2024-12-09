import React, { useState, useEffect } from "react";
import { User } from "lucide-react";
import { toast } from "react-hot-toast";
import useUser from "../../../hooks/useUser";
import useDeleteUser from "../../../hooks/useDeleteUser";

const EditProfile = () => {
  const { userData, loading, error } = useUser();
//   const { deleteUser, loading: deleting, error: deleteError, success: deleteSuccess } = useDeleteUser();

  const [profileData, setProfileData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    if (userData) {
      setProfileData({
        name: userData.fullName,
        phone: userData.phoneNumber,
        email: userData.email,
      });
    }
  }, [userData]);

//   const handleDelete = async () => {
//     if (userData && userData.id) {
//       const success = await deleteUser(userData.id);
//       if (success) {
//         toast.success("User deleted successfully!");
//       } else {
//         toast.error(deleteError || "Failed to delete user");
//       }
//     }
//   };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="mt-8 md:mt-0 w-full md:w-[518px] h-auto border-2 p-4 rounded-[4px]">
      <h1 className="text-xl font-semibold py-4">Ubah Data Profil</h1>
      <div className="mb-6">
        <div className="bg-purple-400 text-white p-3 rounded-t-lg flex items-center gap-2">
          <User size={20} />
          <span>Data Diri</span>
        </div>
        <div className="space-y-4 p-4 border-gray-200 rounded-b-lg">
          <div>
            <label className="block text-sm font-medium mb-1">Nama Lengkap</label>
            <input
              type="text"
              name="name"
              value={profileData.name}
              disabled
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Nomor Telepon</label>
            <input
              type="tel"
              name="phone"
              value={profileData.phone}
              disabled
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              disabled
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>
        </div>

        {/* <div className="flex justify-end mt-4">
          <button
            onClick={handleDelete}
            className={`bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition-colors w-full sm:w-auto ${deleting ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={deleting}
          >
            {deleting ? "Deleting..." : "Hapus Akun"}
          </button>
        </div> */}
      </div>

      {/* {deleteError && <div className="text-red-500 mt-4">{deleteError}</div>}
      {deleteSuccess && <div className="text-green-500 mt-4">User successfully deleted!</div>} */}
    </div>
  );
};

export default EditProfile;
