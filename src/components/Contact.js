import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [submitStatus, setSubmitStatus] = useState('')

    useEffect(() => {
        // Initialize EmailJS with your public key
        emailjs.init('Fi1MxSGT9yHpMTxEt')
    }, [])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitStatus('sending')

        try {
            const templateParams = {
                from_name: formData.name,
                to_name: 'Himanshu',
                from_email: formData.email,
                reply_to: formData.email,
                message: formData.message,
            }

            console.log('Sending email with params:', templateParams)

            const response = await emailjs.send(
                'service_coxzyyy',
                'template_03rw9td',
                templateParams,
                'Fi1MxSGT9yHpMTxEt'
            )

            console.log('Email sent successfully:', response)
            setSubmitStatus('success')
            setFormData({ name: '', email: '', message: '' })

            setTimeout(() => {
                setSubmitStatus('')
            }, 3000)

        } catch (error) {
            console.error('Detailed error:', {
                message: error.message,
                name: error.name,
                text: error?.text,
                stack: error.stack
            })

            setSubmitStatus('error')

            setTimeout(() => {
                setSubmitStatus('')
            }, 3000)
        }
    }

    return (
        <section id="contact" className="contact">
            <h2 className="section-title">Contact Me</h2>
            <div className="contact-content">
                <form id="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className={`btn primary ${submitStatus === 'sending' ? 'sending' : ''}`}
                        disabled={submitStatus === 'sending'}
                    >
                        {submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>
                    {submitStatus === 'success' && (
                        <div className="success-message">Message sent successfully!</div>
                    )}
                    {submitStatus === 'error' && (
                        <div className="error-message">Failed to send message. Please try again.</div>
                    )}
                </form>
            </div>
        </section>
    )
}

export default Contact 