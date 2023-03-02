import React from 'react'

const Contact = () => {
  return (
    <>
    
      {/* Cntactt Frm */}
      <div className='contact_form'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-10 offset-lg-1'>
              <div className='contact_form_container py-5'>
                <h2 className='contact_form_title'>Get In Touch</h2>
                <form id='contact_form'>
                  <div className='contact_form_name d-flex justify-content-between aligns-item-centre'>
                    <input type='text' id='cf_name' className='cf_name input_field' placeholder='Your Name' required='true' />
                    <input type='email' id='cf_email' className='cf_email input_field' placeholder='Your Email' required='true' />
                    <input type='number' id='cf_number' className='cf_number input_field' placeholder='Your Number' required='true' />

                  </div>

                  <div className='cf_text mt-5'>
                    <textarea className='cf_message text_field' placeholder='Message' cols='90' rows='10'/>
                  </div>

                  <div className='cf_button'>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact