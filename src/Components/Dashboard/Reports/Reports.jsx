import { useEffect, useState } from "react";
import BackBtn from "../../Reusable/BackBtn";
import ProgressCircle from "../../Reusable/ProgressCircle";
import BarChart from "./BarChart";
import PieChartReport from "./PieChartReport";
import { useDispatch, useSelector } from "react-redux";
import { getAttendanceRecords } from "../../../Redux/features/attendance/attendanceSlice";
import Loader from "../../Reusable/Loader";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import {
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import localImage from "./../../../../public/pdf-logo.png";

// Define styles for your PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
    textTransform: "uppercase",
    fontWeight: "extrabold",
    color: "rgb(7, 25, 50)",
  },
  text: {
    fontSize: 12,
    paddingBottom: 10,
  },
  smallText: {
    fontSize: 9,
    fontWeight: "semibold",
  },
  box: {
    backgroundColor: "rgb(7, 25, 50)",
    width: "100%",
    height: "25",
    marginTop: "10",
    marginBottom: "20",
  },
});

function Reports() {
  const exportToExcel = (data, fileName) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, `${fileName}.xlsx`);
  };

  // Create the PDF document structure
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.smallText}>
            {new Date(Date.now()).toLocaleString("en-US")}
          </Text>
          <Text style={styles.smallText}>Christ Cosmopolitan Incorporated</Text>
        </View>
        <View style={styles.box}></View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image src={localImage} style={{ width: 100, height: 100 }} />
          <Text
            style={{ ...styles.heading, width: "50%", textAlign: "center" }}
          >
            Christ Cosmopolitan Incorporated Sunyani
          </Text>
          <Image src={localImage} style={{ width: 100, height: 100 }} />
        </View>
        <View style={{ ...styles.section, marginTop: "30px" }}>
          <Text
            style={{
              ...styles.heading,
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            SERVICE ASSESSMENT REPORT - {startDate} - {endDate}
          </Text>
          <Text style={styles.text}>Network: Sunyani</Text>
          <Text style={styles.text}>Meeting Type: {meetingType}</Text>
          <Text style={styles.text}>Total Attendance: {males + females}</Text>
          <Text style={styles.text}>
            Adults: {males + females - (youth + children)}
          </Text>
          <Text style={styles.text}>Male: {males}</Text>
          <Text style={styles.text}>Female: {females}</Text>
          <Text style={styles.text}>Youth: {youth}</Text>
          <Text style={styles.text}>JTK: {children}</Text>
        </View>
        <View
          style={{
            ...styles.box,
            position: "absolute",
            bottom: 30,
            right: 20,
            left: 20,
          }}
        ></View>
        <View style={{ position: "absolute", bottom: 20, left: 20}}>
          <Text style={styles.smallText}>{window.location.href}</Text>
        </View>
      </Page>
    </Document>
  );

  const dispatch = useDispatch();
  const { attendanceLoading, attendanceRecords } = useSelector(
    (state) => state.attendance
  );

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [meetingType, setMeetingType] = useState("General Meeting");
  const [records, setRecords] = useState(attendanceRecords);

  // console.log(meetingType)

  useEffect(() => {
    const fetchRecords = async () => {
      const queryParams = new URLSearchParams();
      if (meetingType) queryParams.append("meetingType", meetingType);
      if (startDate) queryParams.append("startDate", startDate);
      if (endDate) queryParams.append("endDate", endDate);
      await dispatch(getAttendanceRecords(queryParams));
      setRecords(attendanceRecords);
    };
    fetchRecords();
    return () => {
      fetchRecords;
    };
  }, []);

  useEffect(() => {
    setRecords(attendanceRecords);
  }, [attendanceRecords]);
  // console.log(attendanceRecords);

  const generateReport = async (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams();
    if (meetingType) queryParams.append("meetingType", meetingType);
    if (startDate) queryParams.append("startDate", startDate);
    if (endDate) queryParams.append("endDate", endDate);
    // console.log(queryParams);
    await dispatch(getAttendanceRecords(queryParams));
    setRecords(attendanceRecords);
  };

  let males = 0;
  let females = 0;
  let children = 0;
  let youth = 0;
  attendanceRecords?.forEach((cur) => {
    males += cur.male;
    females += cur.female;
    children += cur.children;
    youth += cur.youth;
  });
  // console.log({male:males,female:females,children:children,youth:youth})
  const malePercentage = ((males / (males + females)) * 100).toFixed(2);
  const femalePercentage = ((females / (males + females)) * 100).toFixed(2);
  const childrenPercentage = ((children / (males + females)) * 100).toFixed(2);
  const youthPercentage = ((youth / (males + females)) * 100).toFixed(2);

  const downloadReport = () => {
    exportToExcel(attendanceRecords, "service_assessment_report");
  };
  return (
    <>
      {attendanceLoading && <Loader />}
      <div className="h-[80vh]">
        <div>
          <BackBtn
            text="Report"
            paddingAndMargin="p-3 mb-3"
            path={"/dashboard/attendance"}
          />
        </div>
        <div className="flex items-center justify-between max-md:my-5">
          <div className="flex items-center justify-between w-1/3">
            <p className="text-xl">Attendance</p>
          </div>
          {/* <button onClick={downloadReport} className="bg-green-600 cursor-pointer text-white p-3 rounded-sm hover:bg-green-500 duration-300">
          Download Report
        </button> */}
          <button className="bg-green-600 cursor-pointer text-white p-3 rounded-sm hover:bg-green-500 duration-300">
            <PDFDownloadLink
              document={<MyDocument />}
              fileName="church-report.pdf"
            >
              {({ blob, url, loading, error }) =>
                loading ? "Generating PDF..." : "Download PDF"
              }
            </PDFDownloadLink>
          </button>
        </div>
        <form
          action=""
          className="bg-slate-50 shadow-md  flex max-md:flex-col items-center max-md:items-start max-md:gap-5 rounded-md w-fit mt-5 p-4"
        >
          <label className="flex items-center mr-5 w-full" htmlFor="">
            Start
            <input
              className="mb-0 ml-2 w-full"
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
              type="date"
            />
          </label>
          <label className="flex items-center mr-5 w-full" htmlFor="">
            End
            <input
              className="mb-0 ml-2 w-full"
              onChange={(e) => {
                setEndDate(e.target.value);
              }}
              type="date"
            />
          </label>
          <label
            className="flex items-center mr-5 w-full"
            htmlFor="meetingtype"
          >
            Meeting
            <select
              name="meetingType"
              id="meetingtype"
              onChange={(e) => {
                setMeetingType(e.target.value);
              }}
              className="mb-0 ml-2 py-4 w-full"
            >
              <option value="General Meeting">General Meeting</option>
              <option value="Mustard Seed Meeting">Mustard Seed Meeting</option>
              <option value="Ministry Meeting">Ministry Meeting</option>
            </select>
          </label>
          <button
            onClick={generateReport}
            className="bg-blue-700 hover:bg-blue-500 duration-300 p-4 rounded-e-md text-white max-sm:w-full max-sm:rounded-md"
            type="submit"
          >
            Generate
          </button>
        </form>
        {/* charts here */}
        <div className="mt-16 sm:px-5 max-sm:-ml-[40px]">
          <BarChart records={attendanceRecords} />
        </div>
        <div className="grid grid-cols-2 gap-5 mt-20 max-md:grid-cols-1 max-md:gap-20 max-md:pb-24">
          <div>
            <PieChartReport />
          </div>
          <div className="grid grid-cols-2 max-md:gap-y-10">
            <div className="text-center w-[150px] h-[150px] mb-10">
              <ProgressCircle
                percentage={femalePercentage}
                text={`${femalePercentage}%`}
              />
              <h4 className="font-semibold text-md mt-5 text-xl">Female</h4>
            </div>
            <div className="text-center w-[150px] h-[150px]">
              <ProgressCircle
                percentage={malePercentage}
                text={`${malePercentage}%`}
              />
              <h4 className="font-semibold text-md mt-5 text-xl">Male</h4>
            </div>
            <div className="text-center w-[150px] h-[150px]">
              <ProgressCircle
                percentage={childrenPercentage}
                text={`${childrenPercentage}%`}
              />
              <h4 className="font-semibold text-md mt-5 text-xl">Childern</h4>
            </div>
            <div className="text-center w-[150px] h-[150px]">
              <ProgressCircle
                percentage={youthPercentage}
                text={`${youthPercentage}%`}
              />
              <h4 className="font-semibold text-md mt-5 text-xl">Youth</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reports;
