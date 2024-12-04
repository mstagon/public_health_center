import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PatientInfo = () => {
  const [medicalRecords, setMedicalRecords] = useState([]);
  const [visiblePrescription, setVisiblePrescription] = useState("");
  //  const [viewPrescription, setViewPrescription]=useState(false)

  const formatter = new Intl.DateTimeFormat("ko-KR");
  const { phoneNumber } = useParams();
  const handleViewPrescription = (recordId) => {
    setVisiblePrescription((prev) => (prev === recordId ? "" : recordId));
  };

  const getPatientInfo = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://180.65.58.182:8000/medical-records/phone/${phoneNumber}`
      );
      setMedicalRecords(response.data.data);
    } catch (e) {}
  }, [phoneNumber]);

  useEffect(() => {
    getPatientInfo();
  }, [getPatientInfo]);

  return (
    <div className="container mx-auto px-6 py-8 max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">
            내원 기록
          </h2>
          <div className="space-y-3">
            {medicalRecords.map((record) => (
              <div
                key={record.id}
                onClick={() => handleViewPrescription(record.id)}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-200 
                  ${
                    visiblePrescription === record.id
                      ? "bg-blue-50 border-blue-200"
                      : "hover:bg-gray-50 border-transparent"
                  } 
                  border`}
              >
                <div className="flex items-center">
                  <span className="text-gray-700">
                    {formatter.format(new Date(record.created_at))}
                  </span>
                  <svg
                    className="w-5 h-5 ml-auto text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">
            진료 기록
          </h2>
          {medicalRecords.map((record) => (
            <div
              key={record.id}
              className={`${
                visiblePrescription === record.id ? "block" : "hidden"
              }`}
            >
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    병명
                  </h3>
                  <p className="text-gray-600">{record.diagnosis}</p>
                </div>

                {record.prescriptions.map((prescription) => (
                  <div
                    key={prescription.id}
                    className="mt-6 bg-gray-50 rounded-lg p-4"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      처방
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center">
                        <span className="font-medium min-w-[100px]">
                          처방약품:
                        </span>
                        <span>{prescription.medicine_name}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium min-w-[100px]">용량:</span>
                        <span>{prescription.dosage}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium min-w-[100px]">
                          복용방법:
                        </span>
                        <span>{prescription.usage_instructions}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {medicalRecords.length === 0 && (
            <div className="flex justify-center items-center h-64 text-gray-500 text-lg">
              진료 기록이 없습니다.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;
