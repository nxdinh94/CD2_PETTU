import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeLayout from './components/Layout/HomeLayout';
import AnotherLayout from './components/Layout/AnotherLayout';
import EmptyLayout from './components/Layout/EmptyLayout';
import { publicRoutes } from './Routes';
import { useEffect } from "react";
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import getCurrentPeriodOfDay from './utils/getCurrentPeriodOfDay';
import checkLogin from './utils/checkLogin';

function App() {
    let useData;
    let decentralization_id;
    if (sessionStorage.isLogin) {
        useData = JSON.parse(sessionStorage['user_data']);
        decentralization_id = useData.decentralization_id;
    }
    useEffect(() => {
        window.addEventListener("storage", (event) => {
            if (event.key === "sessionUser") {
                sessionStorage.setItem("user", event.newValue);
                window.location.reload(); // Làm mới để cập nhật trạng thái người dùng
            }
        });

        return () => {
            window.removeEventListener("storage", () => {});
        };
    }, []);
    useEffect(() => {
        if(checkLogin()){
            // createChat({
            //     webhookUrl: 'http://localhost:5678/webhook/224130ad-98fc-434c-a1ed-52f77768898b/chat',
            //     initialMessages: [
            //         `Chào buổi ${getCurrentPeriodOfDay()}, ${useData?.fullname || 'Quý khách'}!`,
            //         'Tôi tên là Xander Dson! Trợ lý ảo của Pettu. Tôi có thể giúp gì cho bạn?',
            //     ],
            //     defaultLanguage: 'vi',
            //     allowFileUploads: false,
            //     loadPreviousSession: true, 
                        
            // });
        }
		
	}, []);
    const stripePromise = loadStripe("pk_test_51QxeSSC1Nh1lHc8pKgnEdXgJR5KFXYmVVwybLKamCNpNkWFuvWsP5kR4EABeOJPuZvvMfIW2o8GslhLlLeWdgSSp002lNBeKoQ"); // Replace with your public Stripe key

    // console.log('fdsf', useData);
    return (
        <Elements stripe={stripePromise}>
            <Router>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            if (route.path.includes('/admin')) {
                                if (decentralization_id == 2) {
                                    return;
                                }
                            }
                            let Layout = AnotherLayout;
                            if (route.isHome) {
                                Layout = HomeLayout;
                            }

                            if (route.path.substring(0, 6) === '/admin') {
                                Layout = EmptyLayout;
                            }
                            if (route.isPage404) {
                                Layout = EmptyLayout;
                            }

                            let Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                ></Route>
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </Elements>
        
    );
}

export default App;
