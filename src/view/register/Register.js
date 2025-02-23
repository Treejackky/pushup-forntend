const Register = () => {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="font-bold text-6xl mb-5  mt-20">Register</div>
        <div className="border bg-white p-10 rounded-lg shadow-lg p-2">
          <div className=" text-sm mb-2">Email</div>
          <input className="border p-2 rounded-md w-full mb-4" type="text" placeholder="Enter your Email"/>
          <div className=" text-sm mb-2">Password</div>
          <input className="border p-2 rounded-md w-full mb-4" type="text" placeholder="Enter your Password"/>
          <button className="border p-2 rounded-md w-full bg-black text-white" >Register</button>
  
        </div>
      </div>
    );
  };
  
  export default Register;
  