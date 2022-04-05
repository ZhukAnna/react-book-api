import React, { useState } from "react";
import "./Filter.css";

function Filter() {
  const [category, setCategory] = useState("all");
  const [sorting, setSorting] = useState("relevance");

  return (
    <div className="filter">
      <div>
        <label htmlFor="category" className="form-label filter_label">
          Category
        </label>
        <select
          className="filter_select"
          aria-label="category"
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="all">all</option>
          <option value="art">art</option>
          <option value="biography">biography</option>
          <option value="computers">computers</option>
          <option value="history">history</option>
          <option value="medical">medical</option>
          <option value="poetry">poetry</option>
        </select>
      </div>

      <div>
        <label htmlFor="sort" className="form-label filter_label">
          Sort by
        </label>
        <select
          className="filter_select"
          aria-label="sort"
          id="sort"
          value={sorting}
          onChange={(event) => setSorting(event.target.value)}
        >
          <option value="relevance">relevance</option>
          <option value="newest">newest</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
