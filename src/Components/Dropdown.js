import "./Dropdown.css";

export default function Dropdown({ title, dropDown }) {
  return (
    <>
      <div className="menu-item">
        <div className="k">
          <li>
            <span>{title}</span>
            <span>
              <i className="fa-solid fa-caret-down"></i>
            </span>
          </li>
        </div>
        <ul className="dropdown">
          <li className="f">
            {dropDown.map((t) => {
              return (
                <div className="icon">
                  <span>
                    <i className="fa-solid fa-file-word"></i>
                  </span>
                  <span>
                    <p>{t.title}</p>
                  </span>
                </div>
              );
            })}
          </li>
        </ul>
      </div>
    </>
  );
}
