import React from 'react'

function Form() {
    return (
        <div>  <div className="first-div">
            <h1>Registration form</h1>
            <form>
                <label>First Name :  </label>

                <input type="text" id="fname" name="fname" placeholder="Your name.." required />

                <br />

                <label>Last Name :</label>

                <input type="text" id="lname" name="lname" placeholder="Your Last name.." required />

                <br />

                <label>Address :</label>

                <input type="address" id="address" name="address" placeholder="Your address.." required />

                <br />

                <label>Phone number : </label>

                <input type="Number" id="Phone number" name="Phone number" placeholder="Your phone number.." required />
                <br />
                <label> E-mail :</label>

                <input type="email" id="e-mail" name="e-mail" placeholder="Your mail.." required />

                <br />

                <label>Address :</label>

                <input type="address" id="address" name="address" placeholder="Your address.." required />

                <br />

                <label>Shop name :</label>

                <input type="Shop name" id="Shop name" name="Shop name" placeholder="Shop name.." required />

                <br />

                <label>Shop Address :</label>

                <input type="Shop address" id="Shop address" name="Shop address" placeholder="Shop address.." required />

                <br />
                <center>
                    <button type="submit">Submit</button>
                </center>

            </form>
        </div >

        </div>
    )
}

export default Form