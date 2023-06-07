import { createElement, Fragment, useState } from "react";
import Button from "./components/button.js";
import Tab from "./components/tab.js";
//import "./style.scss";
import "./tailwind.css";

//
const Profile = () => {
  console.log("profil tabın geldiniz");
  return <div>Burası profil tabı</div>;
};
function App() {
  //jsx kullanmadan eleman create etmek
  /*
  const todos = ["todo1", "todo2", "todo3"];
  const h1 = createElement("h1", null, "emreakgoz.com");
  const ul = createElement(
    "ul",
    null,
    todos.map((todo) => createElement("li", null, todo))
  );
  return createElement(
    "main",
    {
      id: "main",
      className: "test",
    },
    h1,
    ul
  );
  */
  const name = "Tayfun";
  const todos = ["todo1", "todo2", "todo3"];
  const style = { color: "red", backgroundColor: "yellowgreen" };
  const [activeTab, setActiveTab] = useState(1);
  const searchFunction = () => {
    alert("hello");
  };
  //jsx ile eleman create etmek
  return (
    <Fragment id="main" className="test" variant="success">
      <div style={{ padding: 30 }}>
        <button onClick={() => setActiveTab(2)}>Aktif tabı değiştir</button>
        <Tab activeTab={activeTab} setActiveTab={setActiveTab}>
          <Tab.Panel title="Profil">
            <Profile />
          </Tab.Panel>
          <Tab.Panel title="Hakkında">2.tab</Tab.Panel>
          <Tab.Panel title="Ayarlar">3.tab</Tab.Panel>
        </Tab>
        {activeTab === 2 && <div>Burası ekstra bir alan</div>}
      </div>
      <div style={{ padding: 20 }}>
        <Button>Buton örneği</Button>
        <Button variant="success">Yeşil buton</Button>
        <Button variant="warning">Gold Button</Button>
        <Button variant="danger">Kırmızı Buton buton</Button>
      </div>

      <h1 tabIndex="3" style={style}>
        Prototurk.com
      </h1>
      <label htmlFor="search" tabIndex="2" onClick={searchFunction}>
        Arama
      </label>
      <input type="text" id="search" tabIndex="1"></input>
      <ul>
        {4 + 4}
        {name.toUpperCase()}
        {`${name} erbilen`}
        {name} akgoz
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default App;
