import { useState } from "react";
import { ReactComponent as Notice } from "../../assets/notice.svg";
import React from "react";
const HealthProgram = () => {
  const [visibleSection, setVisibleSection] = useState("");

  const handleSectionToggle = (section) => {
    setVisibleSection((prev) => (prev === section ? "" : section));
  };

  const sectionData = [
    {
      id: "SmokingCessation",
      title: "금연 프로그램",
      description:
        "지역사회 흡연자를 대상으로 금연상담서비스 및 기업 학교 등 지역자원과 연계하여 다양한 금연 사업을 추진함으로써 흡연율 감소 및 건강증진 도모 금연을 통해 비흡연자 확대 및 간접흡연 예방을 위한 금연환경조성",
      details: [
        "대상 : 동남구 흡연자 중 금연희망자",
        "일정 : 월요일~금요일(09:00~18:00, 점심시간 12:00~13:00)",
        "장소 : 동남구보건소 3층 금연 클리닉",
        "방법 : 직접 방문(신분증 지참)",
        "내용 : 금연 상담 및 혈액 내 일산화탄소 측정, 니코틴 의존도 검사, 체내 니코틴농축도 측정(소변검사), 금연보조제 제공 및 행동요법지도, 금연성공자에게 기념품 제공",
        "비용 : 무료",
      ],
    },
    {
      id: "Nutrition",
      title: "영양사업",
      description:
        "싱겁게, 덜 달게 먹는 실천 배움터. 나트륨 및 당 섭취 저감을 위해 인식개선 교육과 캠페인 등을 운영하여 만성질환 예방과 삶의 질 향상에 기여하고자 하는 프로그램",
      details: [
        "대상 : 동남구민",
        "일정 : 1~12월",
        "장소 : 매월 캠페인 또는 교육 장소를 홈페이지에 게시할 예정",
        "방법 : 직접 방문(신분증 지참)",
        "내용 : 염도계 대여, 당류 저감 캠페인 운영, 싱겁게 덜 달게 먹기 식생활 교육",
        "비용 : 무료",
      ],
    },
    {
      id: "MedicalBenefitHealthCheckup",
      title: "의료급여수급권자 일반건강검진(생애전환기 포함)",
      description:
        "건강위험 요인을 조기 발견하여 치료 및 관리로 연계함으로써 주민 건강증진 도모",
      details: [
        "대상 : 의료급여수급권자 일반건강검진: 20~64세 의료급여수급권자 생애전환기검진: 66세 이상",
        "검진주기: 2년마다 출생연도에 따라 짝·홀수연도를 구분하여 실시하되,성·연령별 검진항목은 해당 연령에 실시",
      ],
    },
    {
      id: "InfantHealthCheckup",
      title: "의료급여수급권자 영유아건강검진",
      description:
        "건강위험 요인을 조기 발견하여 치료 및 관리로 연계함으로써 주민 건강증진 도모",
      details: [
        "대상 : 의료급여수급권자 중 만 6세 미만 영유아",
        "검진주기(8차실시) : 생후 14일, 4개월, 9개월, 18개월, 30개월, 42개월, 54개월, 66개월",
      ],
    },
    {
      id: "ExercisePrescription",
      title: "운동처방",
      description:
        "개인의 건강 상태와 체력 수준에 맞는 운동을 과학적인 검사를 통해서 운동의 종류와 운동의 강도, 시간, 빈도(횟수) 등을 처방하여 스스로 운동할 수 있도록 도와주는 것",
      details: [
        "대상 :동남구민",
        "일정 : 연중",
        "방법 : 예약제",
        "내용 :운동처방검사,혈액검사 (빈혈, 당뇨, 간기능, 신장기능, 고지혈),심전도 검사,체성분 검사( 인체의 구성성분(체수분량, 단백질, 무기질, 체지방)을 정량적으로 분석하는 검사),자세검사,관절가동범위 검사 : 경추, 어깨, 몸통, 고관절),체력검사 (평형성, 순발력, 하체파워, 코어능력, 상체근력, 하체근력, 어깨근력, 심폐능력)-> 검사 후, 결과상담을 통한 운동처방 및 지도 상담 후, 건강증진실(운동실) 이용안내",
        "비용: 운동처방검사(19,920원),체성분 검사(1,100원)",
      ],
    },
  ];

  return (
    <>
      {sectionData.map((section) => (
        <div key={section.id} className="mx-10 mb-5">
          <div
            className="flex items-center gap-2 p-4 rounded-xl border border-[#B8B8B8] hover:shadow-lg cursor-pointer"
            onClick={() => handleSectionToggle(section.id)}
          >
            <Notice className="size-30" />
            <div>
              <div className="text-xl font-semibold">{section.title}</div>
              <div>{section.description}</div>
            </div>
          </div>

          <div
            className={`overflow-hidden transition-[max-height] duration-500 justify-center flex ease-in-out ${
              visibleSection === section.id ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <div className="flex flex-col  gap-2 p-4 border w-11/12 justify-center rounded-b-xl border-[#B8B8B8]">
              {section.details.map((detail) => (
                <div key={detail}>{detail}</div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HealthProgram;
