import { ChangeEvent, memo, useEffect, useState, VFC } from "react";
import styled from "styled-components";
import axios from "axios";
import { UserInfo } from "../../types/api/UserInfo";
import { ComboValue } from "../../types/ComboValue";

const STable = styled.table`
  width: 600px;
  border-collapse: collapse;
  color: #ff9800;
  //background-color: #fff5e5;
  text-align: center;
`;
const STh = styled.th`
  padding: 4px;
  border: solid 1px black;
  color: black;
  background-color: white;
`;

const lstYm: Array<ComboValue> = [
  { value: "202112", name: "2021年12月" },
  { value: "202201", name: "2022年01月" },
  { value: "202202", name: "2022年02月" }
];

const lstDaily: Array[] = [
  { ymd: 1, day: "月", abs: "出勤", in: "9:00", out: "18:00", remark: "" },
  { ymd: 2, day: "火", abs: "出勤", in: "9:00", out: "18:00", remark: "" },
  { ymd: 3, day: "水", abs: "出勤", in: "9:00", out: "18:00", remark: "" },
  { ymd: 4, day: "木", abs: "出勤", in: "9:00", out: "18:00", remark: "" },
  { ymd: 5, day: "金", abs: "出勤", in: "9:00", out: "18:00", remark: "" },
  { ymd: 6, day: "土", abs: "出勤", in: "9:00", out: "18:00", remark: "" },
  { ymd: 7, day: "日", abs: "出勤", in: "9:00", out: "18:00", remark: "" },
  { ymd: 8, day: "月", abs: "出勤", in: "9:00", out: "18:00", remark: "" },
  { ymd: 9, day: "火", abs: "出勤", in: "9:00", out: "18:00", remark: "" },
  { ymd: 10, day: "水", abs: "出勤", in: "9:00", out: "18:00", remark: "" }
];

const lstUsers: Array<UserInfo> = [
  {
    Userid: "user000001",
    PassWord: "11111111",
    LastName: "松井",
    FirstName: "宏明",
    UserType: "1",
    CreatedUserId: "",
    CreateOn: "",
    UpdateUserId: "",
    UpdatedOn: ""
  },
  {
    Userid: "user000002",
    PassWord: "11111111",
    LastName: "ユーザー",
    FirstName: "００２",
    UserType: "1",
    CreatedUserId: "",
    CreateOn: "",
    UpdateUserId: "",
    UpdatedOn: ""
  }
];

export const AttendanceBook: VFC = memo(() => {
  const [ym, setYm] = useState<string>("");
  const [users, setUsers] = useState<Array<UserInfo>>([]);
  const [selectedUser, setSelectedUsers] = useState<string>("");

  const onChangeYm = (e: ChangeEvent<HTMLSelectElement>) => {
    setYm(e.target.value);
  };
  const onChangeUser = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedUsers(e.target.value);
  };

  useEffect(() => {
    setUsers(lstUsers);
    /*
    axios
      .get<Array<UserInfo>>(
        "https://kintaiwebapi.azurewebsites.net/api/user/area/user000002"
      )
      .then((res) => {
        console.log(res.data.User);
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("err");
      });
*/
  }, []);

  return (
    <>
      <p>出退勤一覧</p>
      <p>表示年月</p>
      <select title="表示年月" value={ym} onChange={onChangeYm}>
        {lstYm.map((n, index) => {
          return (
            <option value={n.value} key={index}>
              {n.name}
            </option>
          );
        })}
      </select>
      <p>従業員名</p>
      <select title="従業員名" value={selectedUser} onChange={onChangeUser}>
        {users.map((n, index) => {
          return (
            <option
              value={n.Userid}
              key={index}
            >{`${n.LastName} ${n.FirstName}`}</option>
          );
        })}
      </select>

      <STable>
        <thead>
          <tr>
            <STh>日付</STh>
            <STh>曜日</STh>
            <STh>勤怠区分</STh>
            <STh>出勤時刻</STh>
            <STh>退勤時刻</STh>
            <STh>備考</STh>
          </tr>
        </thead>
        <tbody>
          {lstDaily.map((value, index) => {
            return (
              <tr key={index}>
                <STh>{value.ymd}</STh>
                <STh>{value.day}</STh>
                <STh>{value.abs}</STh>
                <STh>{value.in}</STh>
                <STh>{value.out}</STh>
                <STh>{value.remark}</STh>
              </tr>
            );
          })}
        </tbody>
      </STable>
    </>
  );
});
