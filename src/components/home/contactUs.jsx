import React, { Component } from 'react'

export default class ContactUs extends Component {
    render() {
        return (
            <div>
                <section id="contact">
                    <div class="container-fluid" data-aos="fade-up">
                        <div class="section-header">
                            <h3>Contact Us</h3>
                        </div>

                        <div class="row">
                            <div class="col-lg-6">
                                <div class="map mb-4 mb-lg-0">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                                        frameBorder="0"
                                        style={{
                                            border: 0,
                                            width: '100%',
                                            height: '312px',
                                        }}
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="row">
                                    <div class="col-md-5 info">
                                        <i class="ion-ios-location-outline"></i>
                                        <p>A108 Adam Street, NY 535022</p>
                                    </div>
                                    <div class="col-md-4 info">
                                        <i class="ion-ios-email-outline"></i>
                                        <p>info@example.com</p>
                                    </div>
                                    <div class="col-md-3 info">
                                        <i class="ion-ios-telephone-outline"></i>
                                        <p>+1 5589 55488 55</p>
                                    </div>
                                </div>

                                <div class="form">
                                    <form
                                        // action="forms/contact.php"
                                        // method="post"
                                        role="form"
                                        class="php-email-form"
                                    >
                                        <div class="form-row">
                                            <div class="form-group col-lg-6">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    class="form-control"
                                                    id="name"
                                                    placeholder="Your Name"
                                                    data-rule="minlen:4"
                                                    data-msg="Please enter at least 4 chars"
                                                />
                                                <div class="validate"></div>
                                            </div>
                                            <div class="form-group col-lg-6">
                                                <input
                                                    type="email"
                                                    class="form-control"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Your Email"
                                                    data-rule="email"
                                                    data-msg="Please enter a valid email"
                                                />
                                                <div class="validate"></div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <input
                                                type="text"
                                                class="form-control"
                                                name="subject"
                                                id="subject"
                                                placeholder="Subject"
                                                data-rule="minlen:4"
                                                data-msg="Please enter at least 8 chars of subject"
                                            />
                                            <div class="validate"></div>
                                        </div>
                                        <div class="form-group">
                                            <textarea
                                                class="form-control"
                                                name="message"
                                                rows="5"
                                                data-rule="required"
                                                data-msg="Please write something for us"
                                                placeholder="Message"
                                            ></textarea>
                                            <div class="validate"></div>
                                        </div>
                                        <div class="mb-3">
                                            <div class="loading">Loading</div>
                                            <div class="error-message"></div>
                                            <div class="sent-message">
                                                Your message has been sent.
                                                Thank you!
                                            </div>
                                        </div>
                                        <div class="text-center">
                                            <button
                                                type="submit"
                                                title="Send Message"
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
