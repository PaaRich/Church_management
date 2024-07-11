import BackBtn from "../../Reusable/BackBtn";

function Forms() {
  //navigator
  return (
    <div className="w-full">
      <div className="church_profile pb-1 relative">
        <div className="flex items-center justify-center flex-col">
          <img
            className="rounded-full w-10 h-10 bg-black"
            src="/images/avatar2.webp"
            alt="church_profile-pic"
          />
          <h2 className="text-xl">Church Name</h2>
          <p className="font-light">Logo</p>
          <p className="pt-1">Church membership form</p>
        </div>
        <BackBtn text="Form" paddingAndMargin="mb-0 p-2" />
      </div>
      <form action="" className=" w-full h-full">
        <div className="grid grid-cols-2 gap-x-2">
          <input type="text" placeholder="Firstname" required />
          <input type="text" placeholder="Othername" />
          <div className="flex my-2">
            <label htmlFor="" className="mr-5">
              <input className="mr-2" type="radio" name="sex" id="Male" />
              Male
            </label>
            <label htmlFor="">
              <input className="mr-2" type="radio" name="sex" id="Female" />
              Female
            </label>
          </div>
          <input type="tel" placeholder="telephone" />
          <div className="relative">
            <select
              className="py-2 px-5 w-full bg-slate-200"
              name="Education"
              id=""
            >
              <option value="" disabled selected>
                Highest Level of Education
              </option>
              <option value="Postgraduate">Postgraduate</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Senior High School">Senior High School</option>
              <option value="Junior High School">Junior High School</option>
            </select>
          </div>
          <input type="text" placeholder="Mustard Seed" required />
          <input type="text" placeholder="Ministry" required />

          <input type="text" name="" id="" placeholder="Lastname" required />
          <input
            type="text"
            name=""
            id=""
            placeholder="Date of birth"
            required
          />
          <input type="text" name="" id="" placeholder="Location" required />
          <div className="relative">
            <select
              className="py-2 px-5 w-full bg-slate-200"
              name="Marital Status"
              id=""
            >
              <option value="" disabled selected>
                Marital Status
              </option>
              <option value="Married">Married</option>
              <option value="Divorce">Divorce</option>
              <option value="Single">Single</option>
            </select>
          </div>
          <input type="email" name="" id="" placeholder="Email" />
          <div className="relative">
            <select
              className="py-2 px-5 w-full bg-slate-200"
              name="Media"
              id=""
            >
              <option value="" disabled selected>
                How did you hear of us
              </option>
              <option value="COSMOPOLITAN TV">COSMOPOLITAN TV</option>
              <option value="Social Media">Social Media</option>
              <option value="Invited by someone">Invited by someone</option>
              <option value="others">others</option>
            </select>
          </div>
          <div className="relative">
            <select
              className="py-2 px-5 w-full bg-slate-200"
              name="School"
              id=""
            >
              <option value="" disabled selected>
                School
              </option>
              <option value="UENR">UENR</option>
              <option value="STU">STU</option>
              <option value="SUSEC">SUSEC</option>
              <option value="SNMTC">SNMTC</option>
              <option value="NODASS">NODASS</option>
              <option value="SDA">SDA</option>
            </select>
          </div>
        </div>
        <div className="w-full relative pb-5 mt-2">
          <button
            className="btn w-80 rounded-md text-white px-3 py-4 bg-slate-900 absolute left-1/2 -translate-x-1/2"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Forms;
