import React, { FC, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import "./index.less";
import { Button} from 'antd'

const Login: FC = () => {
  const count = useSelector((state: any) => {
    return state.common.abc;
  });
  return <div className="login-page">
    <div className="login-page-form-box">
    <div className="login-title float-right">管理系统</div>
    </div>
    </div>;
};

export default Login;
