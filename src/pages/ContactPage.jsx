import React from "react";

export default function ContactPage() {
  return (
    <div className="section">
      <h2>Contact</h2>
      <p>If you'd like to work together, email <a href="mailto:info@example.com">info@example.com</a> or use the form below.</p>
      <form onSubmit={(e)=>{e.preventDefault(); alert('Form submitted (demo)')}}>
        <div style={{marginBottom:12}}>
          <label>Name<br/><input name="name" required style={{width:'100%',padding:'8px'}}/></label>
        </div>
        <div style={{marginBottom:12}}>
          <label>Email<br/><input name="email" type="email" required style={{width:'100%',padding:'8px'}}/></label>
        </div>
        <div style={{marginBottom:12}}>
          <label>Message<br/><textarea name="message" required style={{width:'100%',padding:'8px'}}/></label>
        </div>
        <button className="btn" type="submit">Send</button>
      </form>
    </div>
  );
}
