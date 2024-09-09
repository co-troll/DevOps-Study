import Link from "next/link";
import styled from "./style.module.css";
import Login from "./components/pages/Login";

export default async function Home() {

  const handleForm = async (formData: FormData) => {
    "use server"
    console.log(formData);
    // 소설 로그인 처리
  }

  return (
    <div className="w-80 mx-auto">
      {/* <div className="flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded-md shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800">로그인</h2>
          <form action="" className="mt-8">
            <div className="rounded-md shadow-sm">
              <label htmlFor="" className={styled.user_label}>Email</label>
              <input type="text" className={styled.user_input} />
              <label htmlFor="" className={`${styled.user_label} mt-4`}>비밀번호</label>
              <input type="text" className={styled.user_input} />

              <div className="flex items-center justify-between mt-8">
                <div className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-black border-gray-300 accent-gray-500" />
                  <label htmlFor="" className="block ml-2 text-sm text-gray-800">아이디 기억하기</label>
                </div>
                <div className="text-sm">
                  <Link href="" className="font-medium text-gray-600 hover:text-green-500">비밀번호 찾기</Link>
                </div>
              </div>
              <div className="mt-8">
                <button className="w-full px-4 py-2 text-white bg-green-400 rounded-lg hover:bg-green-300">로그인</button>
              </div>
            </div>
          </form>
        </div>
      </div> */}
      <Login />
    </div>
  );
}