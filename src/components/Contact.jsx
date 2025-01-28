import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-content">
        <form id="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit" className="btn primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact 