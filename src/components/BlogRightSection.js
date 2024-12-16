import React from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const BlogRightSection = ({ categories, latestPosts }) => {
  return (
    <div style={styles.container}>
      {/* Categories Dropdown */}
      <div style={styles.section}>
        <label htmlFor="categories" style={styles.label}>
          Category
        </label>
        <select id="categories" style={styles.dropdown}>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Latest Posts */}
      <div style={styles.section}>
        <h3 style={styles.heading}>Latest Posts</h3>
        {latestPosts.map((post, index) => (
          <div key={index} style={styles.latestPostCard}>
            {/* <img
              src={post.imageUrl}
              alt={post.title}
              style={styles.postImage}
            /> */}

            <Image
              src={post.imageUrl}
              alt={post.title}
              style={styles.postImage} // Apply the inline styles
              width={700} // Replace with actual dimensions or set dynamically
              height={400}
              className="object-cover" // Optional for styling, use Tailwind classes
            />
            <div style={styles.postContent}>
              <h4 style={styles.postTitle}>{post.title}</h4>
              <p style={styles.postDescription}>{post.description}</p>
              <button style={styles.readMoreButton}>Read More</button>
            </div>
          </div>
        ))}
      </div>

      {/* Follow Us */}
      <div style={styles.section}>
        <h3 style={styles.heading}>Follow Us</h3>
        <div style={styles.socialLinks}>
          <a href="https://facebook.com" style={styles.socialLink}>
            <FaFacebook />
          </a>
          <a href="https://twitter.com" style={styles.socialLink}>
            <FaTwitter />
          </a>
          <a href="https://instagram.com" style={styles.socialLink}>
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" style={styles.socialLink}>
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    padding: "16px",
    fontFamily: "Arial, sans-serif",
  },
  section: {
    marginBottom: "24px",
  },
  label: {
    display: "block",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  dropdown: {
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  heading: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "16px",
  },
  latestPostCard: {
    display: "flex",
    marginBottom: "16px",
    alignItems: "center",
    borderBottom: "1px solid #eee",
    paddingBottom: "8px",
  },
  postImage: {
    width: "80px",
    height: "80px",
    borderRadius: "4px",
    objectFit: "cover",
    marginRight: "16px",
  },
  postContent: {
    flex: 1,
  },
  postTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  postDescription: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "8px",
  },
  readMoreButton: {
    padding: "8px 16px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  socialLinks: {
    display: "flex",
    gap: "12px",
  },
  socialLink: {
    fontSize: "20px",
    color: "#555",
    textDecoration: "none",
  },
};

export default BlogRightSection;
