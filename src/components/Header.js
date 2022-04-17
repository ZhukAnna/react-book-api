import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchAction } from '../store/actions.js';
import './Header.css';

export default function Header(props) {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  return (
    <div className="header">
      <div className="header_logo-wrapper">
        <h1 className="header_title">Books API App</h1>
      </div>
      <form
        className="header_search"
        onSubmit={async (event) => {
          event.preventDefault();
          dispatch(searchAction(value));
        }}
      >
        <input
          className="header_search-input"
          placeholder="Search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button type="submit" className="header_search-btn">
          <svg width="23" height="22" viewBox="0 0 23 22" fill="none">
            <g opacity="0.9">
              <rect
                x="13.1319"
                y="11.9992"
                width="7.6"
                height="1.6"
                rx="0.8"
                transform="rotate(44.7 13.1319 11.9992)"
                fill="#A9A9C4"
              />
              <ellipse
                cx="8.79896"
                cy="8.27415"
                rx="5.7"
                ry="6"
                transform="rotate(44.7 8.79896 8.27415)"
                stroke="#A9A9C4"
                strokeWidth="2"
              />
            </g>
          </svg>
        </button>
      </form>
    </div>
  );
}
