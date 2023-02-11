import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  const [text, setText] = useState(false);
  const [bay, setBay] = useState(false);
  const [details, setDetails] = useState(false);

  const handleClick = () => {
    setText(true);
    setBay(true);
  };

  const handleDeleteClick = () => {
    setBay(false);
    setText(false);
  };

  const handleDetails = () => {
    setDetails(true);
  };

  const handleDeleteDetails = () => {
    setDetails(false);
  };

  return (
    <div className="card">
      <div>
        <img
          className="img"
          src="https://cdn.dribbble.com/users/2528214/screenshots/9798495/revolt-_2-01s_4x.jpg"
          alt="Kross"
        />
      </div>
      <div className="divMain">
        <div className="divText">
          <h3>Nike Sneaker</h3> <h3>$120</h3>
        </div>
        <div className="divBtn">
          <button className="btnDetails" onClick={handleDetails}>
            Детали
          </button>
          {details ? (
            <div className="divDetails">
              <div className="divDetailsText">
                Кросовки: Nike. Подойдут для бега а также для посведневной
                ходьбы. Улучшенная подошва
              </div>
              <div className="divBtnX">
                <button onClick={handleDeleteDetails} className="btnX">
                  x
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <hr />
      <div>
        <div className="divOpisanie">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          dolorum
        </div>
        <div>
          <button className="btn2" disabled={text} onClick={handleClick}>
            {bay ? "уже в корзине" : "Добавить в корзину"}
          </button>
          {bay && (
            <button onClick={handleDeleteClick} className="btnDelete">
              удалить из карзины
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
