import { React, useEffect } from "react";
import '../components/Card.css';

function Book() {
  /*     useEffect(() => {
        document.title = title;
      }); */

  return (
      <div className="card" style={{ width: "100%", flexDirection: "row" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://picsum.photos/300/400"
              className="img-fluid rounded-start card_img"
              alt="..."
            ></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card_title">Book title</h2>
              <h6 className="card_subtitle">Category</h6>
              <p className="card-text">
                <small>
                  Author 1, Author 2, Author 3, Author 4
                </small>
              </p>
              <p className="card_text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer. This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Book;
