import { useState } from "react";

export default function CompanyProfile() {
  const [activeTab, setActiveTab] = useState("profile");
  const [logo, setLogo] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="w-full bg-white rounded-2xl shadow-lg p-6">

        {/* Header */}
        <h2 className="text-2xl font-bold mb-6">
          Company Management
        </h2>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b pb-2">
          <button
            onClick={() => setActiveTab("profile")}
            className={`px-4 py-2 rounded ${
              activeTab === "profile"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            Company Profile
          </button>

          <button
            onClick={() => setActiveTab("subadmin")}
            className={`px-4 py-2 rounded ${
              activeTab === "subadmin"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            Create Sub Admin
          </button>
        </div>

        {/* ================= PROFILE TAB ================= */}
        {activeTab === "profile" && (
          <div className="space-y-6">

            {/* Logo */}
            <div className="flex items-center gap-6">
              <label className="cursor-pointer">
                <img
                  src={
                    logo
                      ? URL.createObjectURL(logo)
                      : "https://via.placeholder.com/120"
                  }
                  className="w-28 h-28 rounded-full border object-cover"
                />
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => setLogo(e.target.files[0])}
                />
              </label>

              <div>
                <p className="font-medium">Upload Company Logo</p>
                <p className="text-sm text-gray-500">
                  JPG, PNG allowed
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="grid md:grid-cols-3 gap-4">

              <input type="text" placeholder="Company Name" className="input" />
              <input type="email" placeholder="Email" className="input" />
              <input type="tel" placeholder="Phone" className="input" />

              <input type="text" placeholder="Alternate Phone" className="input" />
              <input type="text" placeholder="Website" className="input" />
              <input type="text" placeholder="GST Number" className="input" />

              <input type="text" placeholder="CIN Number" className="input" />
              <input type="text" placeholder="PAN Number" className="input" />
              <input type="text" placeholder="Founded Year" className="input" />

              <input type="text" placeholder="Country" className="input" />
              <input type="text" placeholder="State" className="input" />
              <input type="text" placeholder="City" className="input" />

              <input type="text" placeholder="Pincode" className="input" />
              <input type="text" placeholder="Industry Type" className="input" />
              <input type="text" placeholder="Company Size" className="input" />

            </div>

            {/* Address */}
            <textarea
              placeholder="Full Address"
              className="w-full input"
            />

            {/* Description */}
            <textarea
              placeholder="Company Description"
              className="w-full input"
            />

            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
              Update Company Profile
            </button>
          </div>
        )}

        {/* ================= SUB ADMIN TAB ================= */}
        {activeTab === "subadmin" && (
          <div className="space-y-6">

            <h3 className="text-xl font-semibold">
              Create Sub Admin
            </h3>

            <div className="grid md:grid-cols-2 gap-4">

              <input type="text" placeholder="Full Name" className="input" />
              <input type="email" placeholder="Email" className="input" />

              <input type="tel" placeholder="Phone Number" className="input" />
              <input type="text" placeholder="Role (Manager, Staff)" className="input" />

              <input type="password" placeholder="Password" className="input" />
              <input type="password" placeholder="Confirm Password" className="input" />

            </div>

            {/* Permissions */}
            <div>
              <p className="font-medium mb-2">Permissions</p>
              <div className="flex flex-wrap gap-4">
                <label><input type="checkbox" /> Products</label>
                <label><input type="checkbox" /> Orders</label>
                <label><input type="checkbox" /> Users</label>
                <label><input type="checkbox" /> Reports</label>
              </div>
            </div>

            <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
              Create Sub Admin
            </button>
          </div>
        )}
      </div>

      {/* Tailwind reusable class */}
      <style jsx>{`
        .input {
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 8px;
          outline: none;
        }
        .input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
        }
      `}</style>
    </div>
  );
}