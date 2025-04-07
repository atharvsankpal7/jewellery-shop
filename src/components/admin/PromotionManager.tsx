import React, { useState, useEffect } from "react";
import { Upload, Trash2 } from "lucide-react";

export default function PromotionManager() {
  const [promotion, setPromotion] = useState<{ image: string; cloudinaryId: string } | null>(null);
  const [newImage, setNewImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch current promotion
    const fetchPromotion = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/promotion"); // Use full backend URL
        const data = await response.json();
        setPromotion(data);
      } catch (error) {
        console.error("Failed to fetch promotion:", error);
      }
    };
    fetchPromotion();
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewImage(e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = async () => {
    if (!newImage) return;

    const formData = new FormData();
    formData.append("image", newImage);

    setLoading(true);
    try {
      // Upload image to Cloudinary
      const uploadResponse = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`, // Include token
        },
      });
      const uploadData = await uploadResponse.json();

      // Update promotion
      const response = await fetch("http://localhost:5000/api/promotion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`, // Include token
        },
        body: JSON.stringify({
          image: uploadData.image,
          cloudinaryId: uploadData.cloudinaryId,
        }),
      });
      const updatedPromotion = await response.json();
      setPromotion(updatedPromotion);
      setNewImage(null);
      setPreview(null);
    } catch (error) {
      console.error("Error updating promotion:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Manage Promotion</h2>
      {promotion && (
        <div className="mb-4">
          <img src={promotion.image} alt="Current Promotion" className="w-full h-64 object-cover rounded-lg" />
        </div>
      )}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Upload New Promotion</label>
        <input type="file" onChange={handleImageChange} className="block w-full text-sm" />
        {preview && (
          <div className="mt-4">
            <img src={preview} alt="Preview" className="w-full h-64 object-cover rounded-lg" />
          </div>
        )}
      </div>
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
      >
        {loading ? "Uploading..." : "Save Promotion"}
      </button>
    </div>
  );
}