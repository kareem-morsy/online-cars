import React from "react";

const Comments = () => {
  return (
    <>
      <section className="comments-section">
        <div className="comments-form">
          <h4>اترك تعليق</h4>
          <form>
            <textarea className="form-control" rows="6"></textarea>
            <button type="submit" className="btn">
              ارسال
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Comments;
