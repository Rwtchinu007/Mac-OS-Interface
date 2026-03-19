import React, { useState } from "react";
import MacWindow from "./MacWindow";
import "./mail.scss";

const Mail = ({ windowName, windowsState, setWindowsState }) => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSendEmail = () => {
    if (email.trim() && subject.trim() && message.trim()) {
      // Open mailto with composed details
      const mailtoLink = `mailto:kshitizrawat93@gmail.com?cc=${email}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      window.location.href = mailtoLink;

      // Reset form and show confirmation
      setSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setSubject("");
        setMessage("");
        setSubmitted(false);
      }, 2000);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.ctrlKey) {
      handleSendEmail();
    }
  };

  return (
    <MacWindow
      windowName={windowName}
      windowsState={windowsState}
      setWindowsState={setWindowsState}
      width="42vw"
      height="56vh"
    >
      <div className="mail-window">
        <div className="mail-header">
          <h2>📧 Send me a message</h2>
          <p>Get in touch with me</p>
        </div>

        <div className="mail-form">
          {submitted ? (
            <div className="mail-success">
              <div className="success-icon">✓</div>
              <p>Message ready to send!</p>
              <small>Your default mail client is opening...</small>
            </div>
          ) : (
            <>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="What is this about?"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Your message here... (Ctrl+Enter to send)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  rows="8"
                />
              </div>

              <div className="form-actions">
                <button className="btn-send" onClick={handleSendEmail}>
                  Send Email
                </button>
                <small className="hint">Or press Ctrl+Enter</small>
              </div>
            </>
          )}
        </div>

        <div className="mail-footer">
          <p>📧 kshitizrawat93@gmail.com</p>
        </div>
      </div>
    </MacWindow>
  );
};

export default Mail;
