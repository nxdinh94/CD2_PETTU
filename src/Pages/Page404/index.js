import './Page404.scss';
import { Link } from 'react-router-dom';
import routes from '~/config/routes';
function Page404() {
    return (
        <section class="page_404">
            <div class="container">
                <div class="row">
                    <div className="col-sm-1"></div>

                    <div class="col-sm-10 ">
                        <div class="col-sm-offset-1  text-center">
                            <div class="four_zero_four_bg">
                                <h1 class="text-center ">PETTU 404</h1>
                            </div>

                            <div class="contant_box_404">
                                <h3 class="h2">Look like you're lost</h3>

                                <p>the page you are looking for not avaible!</p>

                                <Link to={routes.home} class="link_404">
                                    Go to Home
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
            </div>
        </section>
    );
}

export default Page404;
