//import React from "react";
import BackBtn from "../../Reusable/BackBtn";
import { MinistriesObj } from "../Ministries/MinistriesObj";
import MustardChapter from "../Mustard/MustardChapter";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMinistries } from "../../../Redux/features/ministry/ministrySlice";
import { useEffect, useState } from "react";
import Loader from "../../Reusable/Loader";
import { getMinistryStats } from "../../../Redux/features/auth/authSlice";
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

function Ministries() {
  const dispatch = useDispatch();
  const { ministryLoading, allMinistries } = useSelector(
    (state) => state.ministry
  );
  const { stats } = useSelector((state) => state.auth);

  const [ministries, setMinistries] = useState(allMinistries);
  const [ministryStats, setMinistryStats] = useState(stats);

  const getStats = async () => {
    await dispatch(getMinistryStats());
  };

  const getAllMinistries = async function () {
    await dispatch(getMinistries());
  };
  useEffect(() => {
    getAllMinistries();
    getStats();
    setMinistries(allMinistries);
    setMinistryStats(stats);
  }, []);
  useEffect(() => {
    setMinistries(allMinistries);
  }, [allMinistries]);

  useEffect(() => {
    setMinistryStats(stats);
  }, [stats]);

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
            MINISTRIES REPORT
          </Text>
          <Text style={styles.text}>Network: Sunyani</Text>

          <>
            {ministries?.map((ministry) => (
              <Text style={{ ...styles.text, fontSize: 12 }}>
                {ministry.ministry}: &nbsp; {ministryStats[ministry?.ministry]}
              </Text>
            ))}
          </>
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
        <View style={{ position: "absolute", bottom: 20, left: 20 }}>
          <Text style={styles.smallText}>{window.location.href}</Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <>
      {ministryLoading && <Loader />}
      <div className="h-full">
        <BackBtn
          text="Ministries"
          paddingAndMargin="mb-3 p-2"
          path={"/dashboard/mustard_seed"}
        />
        <button className="bg-green-600 cursor-pointer text-white p-3 rounded-sm hover:bg-green-500 duration-300">
          <PDFDownloadLink
            document={<MyDocument />}
            fileName="ministries-report.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? "Generating PDF..." : "Download PDF"
            }
          </PDFDownloadLink>
        </button>
        <div className="grid gap-y-10 w-11/12 m-auto grid-cols-2 max-sm:grid-cols-1 max-md:w-full max-md:mt-5 max-sm:gap-5 max-sm:mt-10 max-sm:pb-10">
          {ministries?.map((item) => (
            <Link
              to={`/dashboard/ministries/${item?.ministry}`}
              key={item?._id}
            >
              <MustardChapter
                chapter={item?.ministry?.toUpperCase()}
                roll={ministryStats ? ministryStats[item?.ministry] : "N/A"}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Ministries;
