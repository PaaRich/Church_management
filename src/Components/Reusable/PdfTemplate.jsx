import React from "react";
import {
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import localImage from "./../../../public/pdf-logo.png";

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

function PdfTemplate({ data, title }) {
  // Create the PDF document structure
  const {
    startDate,
    endDate,
    meetingType,
    males,
    females,
    youth,
    children,
    attendanceRecords,
  } = data;
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
            {title} - {startDate} - {endDate}
          </Text>
          {title === "SERVICE ASSESSMENT REPORT" && (
            <>
              <Text style={styles.text}>Network: Sunyani</Text>
              <Text style={styles.text}>Meeting Type: {meetingType}</Text>
              <Text style={styles.text}>
                Total Attendance: {males + females}
              </Text>
              <Text style={styles.text}>
                Adults: {males + females - (youth + children)}
              </Text>
              <Text style={styles.text}>Male: {males}</Text>
              <Text style={styles.text}>Female: {females}</Text>
              <Text style={styles.text}>Youth: {youth}</Text>
              <Text style={styles.text}>JTK: {children}</Text>

              {attendanceRecords.map((record, index) => (
                <View key={index}>
                  <Text style={{ marginBottom: 5, fontSize: 14 }}>
                    Week {record.week}
                  </Text>
                  {record.userNames.map((item, itemIndex) => (
                    <Text key={itemIndex} style={styles.text}>
                      {itemIndex + 1}.&nbsp; {item.firstname} {item.lastname}{" "}
                      &nbsp;&nbsp;&nbsp; {item.churchID}
                    </Text>
                  ))}
                  <View></View>
                  <View></View>
                </View>
              ))}
            </>
          )}
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

  return MyDocument();
}

export default PdfTemplate;
