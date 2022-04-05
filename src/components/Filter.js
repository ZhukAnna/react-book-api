import React from "react";
import "./Filter.css";

export default function Filter(props) {
  const { category, sorting, onChangeCategory, onChangeSorting } = props;

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
          onChange={(e) => onChangeCategory(e)}
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
          onChange={(e) => onChangeSorting(e)}
        >
          <option value="relevance">relevance</option>
          <option value="newest">newest</option>
        </select>
      </div>
    </div>
  );
}
