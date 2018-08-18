import React from "react";

const Contact = () => (
  <div id="contact" className="section">
    <div className="container container-full">
      <div className="row visible row-no-gutter">
        <div className="col-md-6">
          <div className="gmap_canvas">
            <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=Teie%20Barber%20Shop&t=&z=13&ie=UTF8&iwloc=&output=embed">
            </iframe>
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact-basic">
            <div className="voffset400" />
            <div className="vcenter text-center">
              <p className="pretitle">phone</p>
              <div className="voffset20" />
              <p><a href="tel:+47-412-62-843">+47-412-62-843</a></p>
              <div className="voffset50" />
              <p className="pretitle">email</p>
              <div className="voffset20" />
              <p><a href="mailto:hello@murdockdigital.com" className="mailto"> teie_barbershop@hotmail.com</a></p>
            </div>
          </div>
          <div className="contact-form bg-cream">
            <div className="voffset400" />
            <div className="vcenter text-center">
              <div className="voffset40" />
              <p className="pretitle">Kontakt oss</p>
              <ul className="social-links">
                <li><a href="https://www.facebook.com/Teie-Barber-Shop-200102630800945/" target="_blank"><i className="fa fa-facebook" /></a></li>
                <li><a href="https://www.instagram.com/p/Bmbrga3l3YM" target="_blank"><i className="fa fa-instagram" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
