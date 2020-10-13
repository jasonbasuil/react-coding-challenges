import React from "react";

export default function DiscoverItem({ images, icons, name }) {
  return (
    <div className="discover-item animate__animated animate__fadeIn">
      <img
        style={{
          height: "150px",
          width: "150px",
          borderRadius: "6px",
          backgroundSize: "cover",
          transition: "transform 0.15s ease-in-out",
          cursor: "pointer",
        }}
        className="discover-item__art"
        src={images ? images[0].url : icons[0].url}
      />
      <p className="discover-item__title">{name}</p>
    </div>
  );
}
