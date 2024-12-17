import React from "react";
import Image from "next/image";
import "../styles/globals.css";
import { AiFillHeart, AiOutlineComment } from "react-icons/ai";

const BlogCard = ({
  imageUrl,
  date,
  houseType,
  propertyOwner,
  ownerName,
  description,
  likes,
  comments,
}) => {
  return (
    <div style={styles.card}>
      {/* Image Section */}
      <div style={styles.imageContainer}>
        <Image
          src={imageUrl}
          alt={houseType}
          // layout="responsive"
          width={700}
          height={400}
        />
      </div>

      {/* Meta Information */}
      <p style={styles.meta}>
        {date} | {houseType} | {propertyOwner}
      </p>

      {/* Owner and Description */}
      <h3 style={styles.owner}>{ownerName}</h3>
      <p style={styles.description}>{description}</p>

      {/* Read More and Actions */}
      <div style={styles.actionsContainer}>
        <button style={styles.readMoreButton}>Read More</button>
        <button style={styles.plusButton}>+</button>

        <div style={styles.iconsContainer}>
          <span style={styles.iconText}>
            <AiFillHeart style={styles.icon} /> {likes} LIKES
          </span>
          <span style={styles.iconText}>
            <AiOutlineComment style={styles.icon} /> {comments} COMMENTS
          </span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    maxWidth: "90%",
    margin: "16px auto",
    fontFamily: "Arial, sans-serif",
  },
  imageContainer: {
    borderRadius: "8px",
    margin: "auto",
    width: "90%",
    overflow: "hidden",
  },
  meta: {
    marginTop: "8px",
    fontSize: "14px",
    color: "#555",
  },
  owner: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "8px 0",
  },
  description: {
    fontSize: "14px",
    color: "#333",
    margin: "8px 0 16px",
  },
  actionsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  readMoreButton: {
    backgroundColor: "transparent",
    border: "none",
    color: "teal",
    fontWeight: "bold",
    fontSize: "14px",
    cursor: "pointer",
  },
  plusButton: {
    backgroundColor: "red",
    border: "none",
    color: "white",
    borderRadius: "4px",
    padding: "8px 12px",
    fontSize: "16px",
    cursor: "pointer",
  },
  iconsContainer: {
    display: "flex",
    gap: "16px",
    alignItems: "center",
  },
  iconText: {
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    color: "red",
  },
  icon: {
    marginRight: "4px",
  },
};

export default BlogCard;
