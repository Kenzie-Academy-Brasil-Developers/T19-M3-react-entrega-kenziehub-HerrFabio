import {Route, Routes} from "react-router-dom";
import {Login} from "../login";
import {Register} from "../register";
import {Dashboard} from "../dashboard";
import {ErrorPage} from "../errorPage";

export default () => {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    );
};