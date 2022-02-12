import { WebPunch } from "../component/pages/WebPunch";
import { AttendanceBook } from "../component/pages/AttendanceBook";

export const HomeRoutes = [
  {
    path: "/",
    exact: true,
    children: <WebPunch />
  },
  {
    path: "/attendance_book",
    exact: false,
    children: <AttendanceBook />
  }
];
