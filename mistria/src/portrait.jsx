import { useState, useRef } from 'react'
import './styles/Portrait.scss'
import example from './assets/example_portrait.png'

const Portrait = function () {

  const [file, setFile] = useState();

  const hiddenFileInput = useRef(null);

  const handleClick = (e) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div onClick={handleClick}>
      <input
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{ display: "none" }}
      />
      <img className="portrait" src={file || example} alt="Portrait" />
    </div>
  );
}

export default Portrait;