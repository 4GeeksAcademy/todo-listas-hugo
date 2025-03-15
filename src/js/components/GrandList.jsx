import { useState } from "react";
import swal from "sweetalert";

const GrandList = () => {

  const [value, setValue] = useState([]);
  const [div, setDiv] = useState("");

  const getTarea = (e) => {
    setDiv(e.target.value)
  }

  const addTarea = () => {
    if (div !== "") {
      setValue(prevalue => [...prevalue, div])
    }
    setDiv("")
  }

  const pressEnter = (e) => {
    if (e.keyCode === 13) {
      addTarea()
    }
  }

  const deleteTarea = (index) => {
    const newarray = value.filter((item, i) => i !== index)
    setValue(newarray)
    if (value.length === 1) {
      swal({
        title: "EMPTY TASK",
        text: "PLEASE ENTER A TASK",
        icon: "error",
        button: "ACEPT",
        timer: 4000
      });
    }
  }

  let counterValue = value.length

  return (
    <div className="p-3 mb-2 bg-body-secondary"> <h1 id="title"> BIG TASK </h1>
      <ul className="list-group bg-body-tertiary" style={{ filter: "drop-shadow(0px 8px 7px #000000)" }}>
        <li className="list-group-item bg-body-tertiary">
          <input type="text" className="form-control bg-body-tertiary"
            placeholder="What Needs To Be Done" value={div} onChange={getTarea} onKeyDown={pressEnter} />
        </li>
        {value.map((word, index) =>
          <li className="list-group-item bg-body-tertiary" key={index}>
            <div className="liDiv">
              <p className="text">{word} </p>
              <button type="button" className="btn-close" labelvalue="Close" onClick={() => deleteTarea(index)}></button>
            </div>
          </li>
        )}
        <li id="text" className="list-group-item bg-body-tertiary"><p className="text">{counterValue} Item left</p></li>
      </ul>
      <li id="one" className="list-group-item bg-body-tertiary"></li>
      <li id="two" className="list-group-item bg-body-tertiary"></li>
    </div>

  )
}

export default GrandList