import { useRef, useState } from "react";
import "./LoginPage.css";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  //세트2
  // const passwordRef = useRef(null);

  //세트1
  // const [user, setUser] = useState({
  //   email: "",
  //   password: "",
  // });

  //세트1
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(user); //서버로 로그인
  //   setUser({ email: "", password: "" });
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitData = (formData) => console.log(formData);

  return (
    <section className="align_center form_page">
      <form onSubmit={handleSubmit(submitData)} className="authentication_form">
        <h2>로그인 폼</h2>
        <div className="form_inputs">
          <div>
            <label htmlFor="email">Email</label>
            <input
              // onChange={(e) => setUser({ ...user, email: e.target.value })} //세트1
              {...register("email")}
              //세트1
              // value={user.email}
              // type="email"
              // id="email"
              className="form_text_input"
              placeholder="이메일 입력..."
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              // onChange={(e) => setUser({ ...user, password: e.target.value })} //세트1
              {...register("password")}
              //세트2
              // ref={passwordRef}

              //세트1
              // value={user.password}
              // type="password"
              // id="password"
              className="form_text_input"
              placeholder="패스워드"
            />

            {/* //세트2 
              <button
              type="button"
              onClick={() => (passwordRef.current.type = "password")}
            >
              비밀번호 숨기기
            </button>
            <button
              type="button"
              onClick={() => (passwordRef.current.type = "text")}
            >
              비밀번호 보이게
            </button> */}
          </div>

          <button type="submit" className="search_button form_submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
