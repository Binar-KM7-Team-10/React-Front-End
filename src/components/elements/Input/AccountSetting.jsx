import React, { useEffect, useState } from "react";
import { Lock } from "lucide-react";
import useUser from "../../../hooks/useUser";
import useUpdateUser from "../../../hooks/useUpdateUser";
import useDeleteUser from "../../../hooks/useDeleteUser";
import { toast } from "react-hot-toast";

const AccountSettings = () => {
  const { userData, loading, error } = useUser();
  const { updateUser, loading: updating, error: updateError, success: updateSuccess } = useUpdateUser();
  const { deleteUser, loading: deleting, error: deleteError, success: deleteSuccess } = useDeleteUser();

  const [settingsData, setSettingsData] = useState({
    name: "",
    phone: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (userData) {
      setSettingsData({
        name: userData.fullName,
        phone: userData.phoneNumber,
        email: userData.email,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      })
    }
  }, [userData]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (settingsData.newPassword !== settingsData.confirmPassword) {
      toast.error("Password confirmation does not match");
      return;
    }

    const updatedData = {
      fullName: settingsData.name,
      phoneNumber: settingsData.phone,
      email: settingsData.email,
      password: settingsData.newPassword || undefined,
    };

    const success = await updateUser(updatedData);
    if (success) {
      toast.success("Account updated successfully!");
    } else {
      toast.error(updateError || "Failed to update account");
    }
  };

  const handleDelete = async () => {
    if (userData && userData.id) {
      const success = await deleteUser(userData.id);
      if (success) {
        toast.success("User deleted successfully!");
      } else {
        toast.error(deleteError || "Failed to delete user");
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="md:mt-0 w-full md:w-[518px] h-auto border-2 p-5 rounded-[4px]">
      <h1 className="text-xl font-semibold py-4">Pengaturan Akun</h1>
      {!loading && (
        <div className="mb-6">
          <div className="bg-purple-400 text-white p-3 rounded-t-lg flex items-center gap-2">
            <Lock size={20} />
            <span>Kata Sandi</span>
          </div>

          <div className="space-y-4 p-4 border-gray-200 rounded-b-lg">
            <div>
              <label className="block text-sm font-medium mb-1">Nama Lengkap</label>
              <input
                type="text"
                name="name"
                value={settingsData.name}
                onChange={(e) => setSettingsData({ ...settingsData, name: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Nomor Telepon</label>
              <input
                type="tel"
                name="phone"
                value={settingsData.phone}
                onChange={(e) => setSettingsData({ ...settingsData, phone: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={settingsData.email}
                onChange={(e) => setSettingsData({ ...settingsData, email: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg"
                disabled
              />
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col sm:flex-row gap-3 justify-between px-4">
        <button
          onClick={handleDelete}
          className={`bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition-colors w-full sm:w-[48%] ${deleting ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={deleting}
        >
          {deleting ? "Deleting..." : "Hapus Akun"}
        </button>
      </div>

      {deleteError && <div className="text-red-500 mt-4">{deleteError}</div>}
      {deleteSuccess && <div className="text-green-500 mt-4">User successfully deleted!</div>}
    </div>
  );
};

export default AccountSettings;
