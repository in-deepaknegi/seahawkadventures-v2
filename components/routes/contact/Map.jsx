import React from "react";

const Map = () => {
    return (
        <section
            id="map"
            className="mx-auto max-w-full px-6 pb-10 pt-24 md:max-w-[85%] lg:px-8"
        >
            <iframe
                className="h-[60vh] w-full rounded-3xl"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13801.987319561396!2d78.3888615!3d30.1372085!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39091100497dec09%3A0x723dbf644ff9f1a7!2sSea%20Hawk%20Adventures!5e0!3m2!1sen!2sin!4v1713701161264!5m2!1sen!2sin"
                width="600"
                height="450"
                allowFullScreen=""
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </section>
    );
};

export default Map;