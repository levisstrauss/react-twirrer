import { faMagnifyingGlass, faUserGroup, faComment } from "@fortawesome/free-solid-svg-icons";
import LoginForm from "../../components/LoginForm";
import MiddleContent from "../../components/MiddleContent";
import Footer from "../../components/Footer";
import LeftContentItem from "../../components/LeftContentItem";

import './css/styles.css'


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
                <div>
                    <LoginForm />
                    <MiddleContent />
                </div>
            </div>
            {/* ----------- footer -------- */}
            <Footer />
        </section>
    );
};

export default Login;
