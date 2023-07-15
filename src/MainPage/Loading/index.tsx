import React from "react";
import {  Spin } from "antd";
import './index.css'
const App: React.FC = () => (
  <div className="loading" > 
    <Spin tip="加载中..." size="large">
        <div className="content" />
      </Spin>
  </div>
);

export default App;
