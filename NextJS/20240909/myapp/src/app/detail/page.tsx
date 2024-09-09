import axios from "axios";
import Checkbox from "../components/atoms/Checkbox";
import Eye from "../components/atoms/Eye";

export default async function Home() {
  // const { data } = await axios.get(`http://127.0.0.1:4000`);
  // console.log(data);
  return (
    <div className="">
      {/* {data} */}
      <Checkbox text="아이디 저장"/>
      <Eye />
    </div>
  );
}