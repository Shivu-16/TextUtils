import React from 'react'
//form with email , password , text and file input
//className container of first div is to bring the form in the middle

export default function Forms(props) {
  return (
    <>
    <div className='container'>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label htmlFor="inputPassword6" className="col-form-label">Password</label>
            </div>
            <div className="col-auto">
                <input type="password" id="inputPassword6" className="form-control" aria-labelledby="passwordHelpInline"/>
            </div>
            <div className="col-auto">
                <span id="passwordHelpInline" className="form-text">
                    Must be 8-20 characters long.
                </span>
            </div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div>
            <label htmlFor="formFileLg" className="form-label">Large file input example</label>
            <input className="form-control form-control-lg" id="formFileLg" type="file"/>
        </div>
    </div>
    </>
  )
}
