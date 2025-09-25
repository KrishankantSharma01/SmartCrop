import React, { useState } from "react";
import { Client } from "@gradio/client";

const CropDiseasePredictor: React.FC = () => {
  const [crop, setCrop] = useState<string>("Wheat");
  const [image, setImage] = useState<File | null>(null);
  const [prediction, setPrediction] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [previewUrl, setPreviewUrl] = useState<string>("");

  const handlePredict = async (): Promise<void> => {
    if (!image) {
      setPrediction("Please upload an image.");
      return;
    }

    setLoading(true);
    setPrediction("");
    try {
      const app = await Client.connect(
        "https://pushkarsingh16-crop-disease-predictor.hf.space"
      );

      // Pass File directly—no FileReader needed
      const result = await app.predict(0, [crop, image]); // fn_index 0, [crop string, image File]
      console.log("Raw result:", result); // Debug: Check console after predict

      const predictionText = result.data[0] || "No disease detected"; // Fallback if empty
      setPrediction(predictionText);
    } catch (error: any) {
      setPrediction(
        `Error: ${error.message}. Check console (F12) for details.`
      );
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0] || null;
    setImage(file);
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setPreviewUrl("");
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "500px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#4CAF50" }}>
        🌾 Crop Disease Predictor
      </h2>
      <p style={{ textAlign: "center", color: "#666" }}>
        Select crop, upload a leaf image or take a photo, and get instant
        disease detection!
      </p>

      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="cropSelect"
          style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
        >
          Select Crop:
        </label>
        <select
          id="cropSelect"
          value={crop}
          onChange={(e) => setCrop(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        >
          <option value="Wheat">Wheat</option>
          <option value="Rice">Rice</option>
          <option value="Corn">Corn</option>
        </select>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="imageInput"
          style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
        >
          Upload or Take Photo:
        </label>
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          capture="environment" // Enables camera on mobile
          onChange={handleImageChange}
          style={{ width: "100%", padding: "8px" }}
        />
        {previewUrl && (
          <img
            src={previewUrl}
            alt="Preview"
            style={{
              width: "100%",
              maxHeight: "200px",
              marginTop: "10px",
              borderRadius: "4px",
              display: "block",
            }}
          />
        )}
      </div>

      <button
        onClick={handlePredict}
        disabled={loading || !image}
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          fontSize: "16px",
          cursor: loading || !image ? "not-allowed" : "pointer",
          opacity: loading || !image ? 0.6 : 1,
        }}
      >
        {loading ? "🔄 Analyzing..." : "Predict Disease"}
      </button>

      {prediction && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            backgroundColor: "#f9f9f9",
            border: "1px solid #ddd",
            borderRadius: "4px",
            whiteSpace: "pre-wrap",
            textAlign: "left",
          }}
        >
          <strong>Result:</strong>
          <br />
          {prediction}
        </div>
      )}
    </div>
  );
};

export default CropDiseasePredictor;
