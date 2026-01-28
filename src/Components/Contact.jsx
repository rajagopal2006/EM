const Contact = () => {
  return (
    <div style={{ backgroundColor:"chartreuse", padding: "30px", maxWidth: "700px", margin: "auto" }}>
      <h2>Contact Us</h2>
      <p>Have questions or want to plan an event? Get in touch with us!</p>

      <h4> Address</h4>
      <p>EventPro Management, Chennai, Tamil Nadu, India</p>

      <h4> Phone</h4>
      <p>+91 98765 43210</p>

      <h4> Email</h4>
      <p>eventpro@gmail.com</p>

      <h3>Send Us a Message</h3>
      <form>
        <input
          type="text"
          placeholder="Your Name"
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <input
          type="email"
          placeholder="Your Email"
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <textarea
          placeholder="Your Message"
          rows="4"
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        ></textarea>

        <button
          type="submit"
          style={{ padding: "10px 20px", cursor: "pointer" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
