import { ChangeEvent, memo, useEffect, useState, VFC } from "react";
import styled from "styled-components";
import axios from "axios";
import { UserInfo } from "../../types/api/UserInfo";
import { Get_Punch } from "../../types/api/Get_Punch";
import { Get_AllUser } from "../../types/api/Get_AllUser";
import { ComboValue } from "../../types/ComboValue";
import useWeekDay from "../../hooks/useWeekDay";
import useTime from "../../hooks/useTime";
import { useLoginUser } from "../../hooks/useLoginUser";
import { Loading } from "../atoms/Loading";

const STable = styled.table`
  margin-left: 4px;
  border-collapse: collapse;
  color: #ff9800;
  text-align: center;
`;
const STh = styled.th`
  width: 100px;
  padding: 4px;
  border: solid 1px black;
  color: black;
  background-color: #dddddd;
`;
const SThMemo = styled.th`
  width: 200px;
  padding: 4px;
  border: solid 1px black;
  color: black;
  background-color: #dddddd;
`;

const SThBody = styled.th`
  width: 100px;
  padding: 4px;
  border: solid 1px black;
  color: black;
  background-color: white;
`;
const SThMemoBody = styled.th`
  width: 200px;
  padding: 4px;
  border: solid 1px black;
  color: black;
  background-color: white;
`;

const SMenuItem = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 4px;
  display: inline-block;
`;
const STitleLavel = styled.p`
  margin-top: 20px;
  margin-left: 4px;
  font-size: 28px;
  font-weight: bold;
`;
const SItemLavel = styled.label`
  margin-left: 4px;
  font-size: 18px;
`;
const SSelectBox = styled.select`
  margin-left: 20px;
  margin-right: 20px;
  font-size: 18px;
`;

const SButton = styled.button``;
const lstYm: Array<ComboValue> = [
  { value: "202112", name: "2021年12月" },
  { value: "202201", name: "2022年01月" },
  { value: "202202", name: "2022年02月" }
];

/*
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
];*/
type workType = "" | "出勤" | "有休" | "他休";
const Works: Array<workType> = ["", "出勤", "有休", "他休"];

export const AttendanceBook: VFC = memo(() => {
  const { getStringByYmd } = useWeekDay();
  const { getTimeToHM } = useTime();
  const { loginUser } = useLoginUser();

  const [ym, setYm] = useState<string>("202202");
  const [users, setUsers] = useState<Array<UserInfo>>([]);
  const [kintaiData, setKintaiData] = useState<Get_Punch>();
  const [selectedUser, setSelectedUsers] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const getKintai = () => {
    setIsLoading(true);
    axios
      .get<Get_Punch>(
        `https://kintaiwebapi.azurewebsites.net/api/punch/${selectedUser}/${ym}`
      )
      .then((res) => {
        setKintaiData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        alert("err");
      });
  };
  const onChangeYm = (e: ChangeEvent<HTMLSelectElement>) => {
    setYm(e.target.value);
  };
  const onChangeUser = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedUsers(e.target.value);
  };

  const onClickDispKintai = () => {
    getKintai();
  };

  useEffect(() => {
    if (loginUser?.UserType === "1") {
      axios
        .get<Get_AllUser>("https://kintaiwebapi.azurewebsites.net/api/user")
        .then((res) => {
          //console.log(res.data);
          setUsers(res.data.AllUserInfos);
          setSelectedUsers(res.data.AllUserInfos[0]?.UserId);
        })
        .catch((err) => {
          console.log(err);
          alert("err");
        });
    } else {
      const lstUser: Array<UserInfo> = [];
      if (loginUser !== null) {
        lstUser.push(loginUser);
        setUsers(lstUser);
        setSelectedUsers(lstUser[0]?.UserId);
      }
    }
  }, [loginUser]);

  return (
    <>
      {isLoading === true ? <Loading /> : ""}
      <STitleLavel>出退勤一覧</STitleLavel>
      <SMenuItem>
        <SItemLavel>表示年月</SItemLavel>
        <SSelectBox title="表示年月" value={ym} onChange={onChangeYm}>
          {lstYm.map((n, index) => {
            return (
              <option value={n.value} key={index}>
                {n.name}
              </option>
            );
          })}
        </SSelectBox>
        <SItemLavel>従業員名</SItemLavel>
        <SSelectBox
          title="従業員名"
          value={selectedUser}
          onChange={onChangeUser}
        >
          {users.map((n, index) => {
            return (
              <option
                value={n.UserId}
                key={index}
              >{`${n.UserId} : ${n.LastName} ${n.FirstName}`}</option>
            );
          })}
        </SSelectBox>
        <SButton onClick={onClickDispKintai}>表示</SButton>
      </SMenuItem>
      <STable>
        <thead>
          <tr>
            <STh>日付</STh>
            <STh>曜日</STh>
            <STh>勤怠区分</STh>
            <STh>出勤時刻</STh>
            <STh>退勤時刻</STh>
            <STh>労働時間</STh>
            <SThMemo>備考</SThMemo>
          </tr>
        </thead>
        <tbody>
          {kintaiData?.PunchInfoList.map((value, index) => {
            return (
              <tr key={index}>
                <SThBody>{`${value.Ymd.slice(4, 6)}/${value.Ymd.slice(
                  6,
                  8
                )}`}</SThBody>
                <SThBody>{getStringByYmd(value.Ymd)}</SThBody>
                <SThBody>{Works[parseInt(value.AttendanceType, 10)]}</SThBody>
                <SThBody>
                  {value.AttendanceTime === ""
                    ? "__:__"
                    : getTimeToHM(parseInt(value.AttendanceTime, 10))}
                </SThBody>
                <SThBody>
                  {value.LeavingTime === ""
                    ? "__:__"
                    : getTimeToHM(parseInt(value.LeavingTime, 10))}
                </SThBody>
                <SThBody>
                  {value.WorkingTime === "0"
                    ? ""
                    : getTimeToHM(parseInt(value.WorkingTime, 10))}
                </SThBody>
                <SThMemoBody>{value.Remarks}</SThMemoBody>
              </tr>
            );
          })}
        </tbody>
      </STable>
    </>
  );
});
