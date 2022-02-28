import React from "react";
import "./collapseNav.css";

function CollapseNav() {
  return (
    <div className="collapse-nav">
      <ul>
        <li>Explore</li>
        <li>Contest</li>
        <li>Forum</li>
        <li>Blog</li>
        <li>Community</li>
        <li>The App</li>
        <li>Shop</li>
        <li>More</li>
      </ul>
      <button className="primary-opposite">Add Listing</button>
      <div className="violet">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dol
      </div>
    </div>
  );
}

export default CollapseNav;
