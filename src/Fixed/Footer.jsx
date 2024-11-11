

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-yellow-400 text-base-content p-10 px-20">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                        <img width="32" height="32" src="https://img.icons8.com/stencil/32/facebook-new.png" alt="facebook-new"/>
                        </a>
                        <a>
                        <img width="34" height="34" src="https://img.icons8.com/fluency/32/instagram-new.png" alt="instagram-new"/>
                        </a>
                        <a>
                        <img width="32" height="32" src="https://img.icons8.com/stencil/32/twitter.png" alt="twitter"/>
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;