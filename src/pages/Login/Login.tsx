import React from "react";
import { faMagnifyingGlass, faUserGroup, faComment } from "@fortawesome/free-solid-svg-icons";
import LeftContentItem from "../../components/LeftContentItem";
import LoginForm from "../../components/LoginForm";
import MiddleContent from "../../components/MiddleContent";


const Login = () => {
    return (
        <section className="main-page">
            {/* ----------- left side -------- */}
            <div className="left">
                <div className="left-content">
                    <LeftContentItem icon={faMagnifyingGlass} text="Find your interest" />
                    <LeftContentItem icon={faUserGroup} text="Explore what people are talking about" />
                    <LeftContentItem icon={faComment} text="Join the people" />
                </div>
            </div>

            {/* ----------- right side -------- */}
            <div className="right">
                <div className="right-content">
                    <LoginForm />
                    <MiddleContent />
                </div>
            </div>
        </section>
    );
};

export default Login;
