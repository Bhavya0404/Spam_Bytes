import React from "react";

function Form() {
    return (
        <form>
            <section1>
                <heading>
                    <h2>Child Labour/Adolescent Child Details</h2>
                </heading>

                <info>
                    <label>
                        Name
                        <input type="text" name= "childName" /> <br></br> <br></br>
                    </label>

                    <label>
                        Description
                        <textarea name="description"></textarea> <br></br> <br></br>
                    </label>

                    <label>
                        Photo of Child
                        <input type="file" name="childImage" /> <br></br> <br></br>
                    </label>
                </info>
            </section1>

            <srction2>
                <heading>
                    <h2>Address where child found</h2>
                </heading>

                <info>
                    <label>
                        House No
                        <input type="text" name="houseNo" /> <br></br> <br></br>
                    </label>

                    <label>
                        Village/Mohalla
                        <input type="text" name="village" /> &nbsp; &nbsp;
                    </label>

                    <label>
                        Ward/Panchayat
                        <input type="text" name="ward" /> <br></br> <br></br>
                    </label>

                    <label>
                        Taluk/Block
                        <input type="text" name="block" /> &nbsp; &nbsp;
                    </label>

                    <label>
                        Teshil/Subdistrict
                        <input type="text" name="subdistrict" /> <br></br> <br></br>
                    </label>

                    <label>
                        Landmark
                        <input type="text" name="Landmark" /> <br></br> <br></br>
                    </label>
                </info>
            </srction2>

            <section3>
                <heading>
                    <h2>Reporting Person Details</h2>
                </heading>

                <info>

                <label>
                    Name
                    <input type="text" name= "userName" /> <br></br> <br></br>
                </label>

                <label>
                    Mobile Number
                    <input type="tel" name="mno" /> <br></br> <br></br>
                </label>

                <label>
                    Email-id
                    <input type="email" name="emailid" /> <br></br> <br></br>
                </label>
                </info>
            </section3>
        </form>
    );
}

export default Form;