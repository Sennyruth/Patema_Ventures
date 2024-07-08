import { IoHome } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Contacts.css";
function Contacts() {
  const validationschema = Yup.object({
    serviceDate: Yup.date().required("Date is required"),

    location: Yup.string()
      .required("location is required")
      .min(3, "location should not be less than 3 characters")
      .max(10, "location should not be more than 10 characters"),

    service: Yup.string().required("service required"),
  });
  const formik = useFormik({
    initialValues: {
      serviceDate: "",
      location: "",
      service: "",
    },
    onSubmit: (formState) => {
      console.log(formState);
    },
    validationSchema: validationschema,
  });

  return (
    <div>
      <div className="contact-hero">
        <div className="contact-hero-text">
          <h1 className="maintitle">Contact Us</h1>
          <p>
            Have a project in mind? Reach out to us today for expert guidance,
            <br></br> personalized solutions, and exceptional construction
            services.
          </p>
        </div>
      </div>

      <div className="contact-container-text">
        <h2>Get In Touch</h2>
      </div>
      <div className="contact-cards">
        <div className="contact-container-visit">
          <div className="contact-icons">
            <IoHome />
          </div>
          <h3>VISIT US</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            modi impedit in. Officia autem, sapiente alias laudantium ratione
            nulla! Neque.
          </p>
          <p className="cont-text">Address: 1234 Main St, Anytown, CA 12345</p>
        </div>
        <div className="contact-container-visit">
          <div className="contact-icons">
            <IoCall />
          </div>
          <h3>CALL US</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam
            minus neque fuga dicta eaque natus distinctio ab molestias
            molestiae!
          </p>
          <p className="cont-text">Phone: (+254) 456-7890</p>
        </div>
        <div className="contact-container-visit">
          <div className="contact-icons">
            <MdEmail />
          </div>
          <h3>CONTACT US</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            quaerat harum minima nesciunt ratione recusandae quae nisi
            distinctio, adipisci eveniet.
          </p>
          <p className="cont-text">Email: info@patemaventures.com</p>
        </div>
      </div>
      <div className="map">
        <h2 className="maptitle">Find Us on Google Maps</h2>
      </div>
      <div className="location-form">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.3586905214!2d36.682579697185325!3d-1.3028602801147329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1719995632940!5m2!1sen!2ske"
          width="600"
          height="450"
        ></iframe>

        <div className="form-containers">
          <h2 className="newsletter-title">Book a Service</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="firstname">
              <label htmlFor="serviceDate">Date of Service</label>
              <br />
              <input
                type="date"
                id="serviceDate"
                name="serviceDate"
                placeholder="Date of Service"
                value={formik.values.serviceDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.serviceDate && formik.touched.serviceDate ? (
                <div className="error">{formik.errors.serviceDate}</div>
              ) : null}
            </div>
            <div className="location">
              <label htmlFor="lname">location</label>
              <br />
              <input
                type="text"
                id="lname"
                placeholder="Your location"
                name="location"
                value={formik.values.location}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.location && formik.touched.location ? (
                <div className="error">{formik.errors.location}</div>
              ) : null}
            </div>

            <div className="servic">
              <label htmlFor="lname">Service</label>
              <br />
              <select
                id="service"
                className="select"
                name="service"
                value={formik.values.service}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="Architectural design">
                  Architectural design
                </option>
                <option value="Rennovations">Rennovations</option>
                <option value="Interior design">Interior design</option>
                <option value="Building Construction">
                  Building Construction
                </option>
                <option value="Road construction">Road construction</option>
              </select>
              <br />
              {formik.errors.service && formik.touched.service ? (
                <div className="error">{formik.errors.service}</div>
              ) : null}
            </div>
            <button type="submit" className="form-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
