import React from "react";
import Popup from "reactjs-popup";
import Form from './Form';

export default () => (
  <Popup trigger={<button>J'amène !</button>} position="center">
    <div><Form /></div>
  </Popup>
);