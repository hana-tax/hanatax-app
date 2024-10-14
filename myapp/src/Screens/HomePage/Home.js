import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Account from "../../../assets/png/account.png";
import Inquiry from "../../../assets/png/inquiry.png";
import InquiryYearEnd from "../../../assets/png/inquiryYearEnd.png";
import Card from "../../../assets/png/card.png";
import PieChart from "../../../assets/png/piechart.png";
import Calculator from "../../../assets/png/calculator.png";

const Home = () => {
  const navigation = useNavigation();

  const handleServiceClick = (path) => {
    navigation.navigate(path);
  };

  return (
    <View style={styles.container}>
      {/* 텍스트 영역 */}
      <View style={styles.textContainer}>
        <Text style={styles.header}>바로바로서비스</Text>
        <Text style={styles.description}>
          금융에 필요한 {"\n"} 서비스를 만나보세요
        </Text>
      </View>

      {/* 서비스 버튼들 */}
      <View style={styles.baroContainer}>
        {[
          {
            component: <Image source={Account} style={styles.icon} />,
            label: "전체계좌조회",
            path: "MyAccount",
          },
          {
            component: <Image source={Inquiry} style={styles.icon} />,
            label: "또래자산비교",
            path: "MyPage",
          },
          {
            component: <Image source={PieChart} style={styles.icon} />,
            label: "금융소득 분석",
            path: "FinancialIncome",
          },
          {
            component: <Image source={Calculator} style={styles.icon} />,
            label: "금융계산",
          },
          {
            component: <Image source={InquiryYearEnd} style={styles.icon} />,
            label: "연말정산조회",
            path: "InquiryYearEnd",
          },
          {
            component: <Image source={Card} style={styles.icon} />,
            label: "계좌개설",
            path: "ProductList",
          },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleServiceClick(item.path)}
            style={styles.baroBox}
          >
            <View style={styles.baroCircle}>{item.component}</View>
            <Text style={styles.serviceLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 배경 요소 */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eff4fe",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 40, // 상단 텍스트와 서비스 버튼들 사이의 간격을 늘림
  },
  header: {
    color: "#4562fd",
    fontWeight: "bold",
    fontSize: 26,
    marginBottom: 10, // 제목과 설명 간 간격 추가
  },
  description: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    color: "#333",
  },
  baroContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "90%", // 가로 폭을 줄여서 버튼들이 조금 더 중앙에 가까워짐
    marginBottom: 20, // 버튼들과 배경 요소들 사이에 여백 추가
  },
  baroBox: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    width: 110,
    height: 120, // 버튼 크기 조정
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  baroCircle: {
    backgroundColor: "#f1f8ff",
    borderRadius: 35,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  serviceLabel: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
    color: "#333",
  },
  icon: {
    width: 50,
    height: 50,
  },
});

export default Home;
