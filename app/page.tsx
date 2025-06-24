"use client"

import { useState } from "react"
import {
  Heart,
  Pill,
  FileText,
  Share2,
  Download,
  Plus,
  Bell,
  Users,
  Stethoscope,
  BookOpen,
  Star,
  Moon,
  Sun,
  Calendar,
  Shield,
  Settings,
  Home,
  BarChart3,
  Clock,
  AlertCircle,
  CheckCircle,
  Menu,
  X,
  ChevronRight,
  TrendingUp,
  Activity,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

export default function ResponsiveHealthcare() {
  const [selectedPerson, setSelectedPerson] = useState("mother")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeView, setActiveView] = useState("dashboard")

  const familyMembers = [
    {
      id: "mother",
      name: "어머니",
      fullName: "김순자",
      avatar: "👵",
      status: "안정",
      lastCheck: "2시간 전",
      medications: 3,
      nextAppointment: "내일 오후 2시",
      bloodPressure: "130/80",
      bloodSugar: "110",
      weight: "58kg",
      recentVisits: 3,
    },
    {
      id: "father",
      name: "아버지",
      fullName: "김철수",
      avatar: "👴",
      status: "주의",
      lastCheck: "4시간 전",
      medications: 5,
      nextAppointment: "다음주 월요일",
      bloodPressure: "145/90",
      bloodSugar: "145",
      weight: "72kg",
      recentVisits: 5,
    },
  ]

  const todayMedications = [
    { name: "혈압약 (암로디핀)", time: "08:00", taken: true, color: "bg-green-100", dosage: "5mg" },
    { name: "당뇨약 (메트포르민)", time: "12:00", taken: true, color: "bg-blue-100", dosage: "500mg" },
    { name: "관절약 (글루코사민)", time: "19:00", taken: false, color: "bg-orange-100", dosage: "1500mg" },
    { name: "혈압약 (저녁)", time: "20:00", taken: false, color: "bg-purple-100", dosage: "5mg" },
  ]

  const healthTrendData = [
    { date: "1주전", bloodPressure: 135, bloodSugar: 120 },
    { date: "6일전", bloodPressure: 132, bloodSugar: 115 },
    { date: "5일전", bloodPressure: 128, bloodSugar: 118 },
    { date: "4일전", bloodPressure: 130, bloodSugar: 110 },
    { date: "3일전", bloodPressure: 133, bloodSugar: 125 },
    { date: "2일전", bloodPressure: 129, bloodSugar: 108 },
    { date: "어제", bloodPressure: 130, bloodSugar: 110 },
  ]

  const medicationComplianceData = [
    { day: "월", compliance: 100 },
    { day: "화", compliance: 95 },
    { day: "수", compliance: 100 },
    { day: "목", compliance: 85 },
    { day: "금", compliance: 100 },
    { day: "토", compliance: 90 },
    { day: "일", compliance: 75 },
  ]

  // 간소화된 빠른 실행 액션
  const quickActions = [
    {
      icon: Pill,
      title: "약봉투",
      color: "bg-gradient-to-br from-pink-100 to-rose-100",
      iconColor: "text-pink-600",
    },
    {
      icon: FileText,
      title: "기록 추가",
      color: "bg-gradient-to-br from-blue-100 to-indigo-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Stethoscope,
      title: "병원 추천",
      color: "bg-gradient-to-br from-green-100 to-emerald-100",
      iconColor: "text-green-600",
    },
    {
      icon: BarChart3,
      title: "건강 분석",
      color: "bg-gradient-to-br from-teal-100 to-cyan-100",
      iconColor: "text-teal-600",
    },
  ]

  const sidebarItems = [
    { icon: Home, label: "대시보드", id: "dashboard" },
    { icon: Pill, label: "약 지갑", id: "medications" },
    { icon: FileText, label: "건강 기록", id: "records" },
    { icon: Calendar, label: "일정 관리", id: "schedule" },
    { icon: BarChart3, label: "건강 분석", id: "analytics" },
    { icon: Shield, label: "보험 관리", id: "insurance" },
    { icon: Users, label: "가족 공유", id: "family" },
    { icon: Heart, label: "간병인 케어", id: "care" },
    { icon: Settings, label: "설정", id: "settings" },
  ]

  const handleSidebarClick = (id: string) => {
    setActiveView(id)
    setSidebarOpen(false)
  }

  const currentMember = familyMembers.find((m) => m.id === selectedPerson) || familyMembers[0]

  // 알림 데이터
  const alerts = [
    {
      type: "warning",
      icon: AlertCircle,
      title: "혈압 주의",
      message: "최근 3일간 평균보다 높음",
      color: "bg-yellow-50 border-yellow-200 text-yellow-800",
      iconColor: "text-yellow-600"
    },
    {
      type: "info",
      icon: Calendar,
      title: "검진 예약",
      message: "국가건강검진 예약 필요",
      color: "bg-blue-50 border-blue-200 text-blue-800",
      iconColor: "text-blue-600"
    },
    {
      type: "success",
      icon: CheckCircle,
      title: "보험금 지급",
      message: "85,000원 입금 완료",
      color: "bg-green-50 border-green-200 text-green-800",
      iconColor: "text-green-600"
    }
  ]

  const renderContent = () => {
    switch (activeView) {
      case "medications":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">💊 약 지갑</h2>
              <Button className="bg-orange-500 hover:bg-orange-600">
                <Plus className="w-4 h-4 mr-2" />
                새 약물 추가
              </Button>
            </div>

            {/* 오늘의 복약 알림 */}
            <Card className="bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200">
              <CardHeader>
                <CardTitle className="flex items-center text-pink-700">
                  <Bell className="w-5 h-5 mr-2" />
                  오늘의 복약 알림
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                      <div>
                        <div className="font-medium">혈압약 (암로디핀)</div>
                        <div className="text-sm text-gray-600">저녁 8시 복용 예정 - 1시간 남음</div>
                      </div>
                    </div>
                    <Button size="sm">복용 완료</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <div>
                        <div className="font-medium text-gray-600">당뇨약 (메트포르민)</div>
                        <div className="text-sm text-gray-500">점심 12시 복용 완료</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 복용 중인 약물 목록 */}
            <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
              <CardHeader>
                <CardTitle>복용 중인 약물 ({currentMember.medications}개)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {[
                    { name: "암로디핀", purpose: "혈압 조절", dosage: "5mg", frequency: "1일 1회", sideEffects: "어지러움, 부종" },
                    { name: "메트포르민", purpose: "혈당 조절", dosage: "500mg", frequency: "1일 2회", sideEffects: "소화불량" },
                    { name: "글루코사민", purpose: "관절 건강", dosage: "1500mg", frequency: "1일 1회", sideEffects: "없음" }
                  ].map((med, index) => (
                    <div key={index} className="p-4 border rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold text-lg text-blue-900">{med.name}</h3>
                        <Badge className="bg-blue-100 text-blue-700">{med.frequency}</Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div><span className="font-medium">목적:</span> {med.purpose}</div>
                        <div><span className="font-medium">용량:</span> {med.dosage}</div>
                        <div><span className="font-medium">부작용:</span> {med.sideEffects}</div>
                      </div>
                      <div className="mt-3 flex space-x-2">
                        <Button variant="outline" size="sm">상세 정보</Button>
                        <Button variant="outline" size="sm">복용 기록</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 복약 순응도 */}
            <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
              <CardHeader>
                <CardTitle>이번 주 복약 순응도</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-green-600">94%</div>
                  <div className="text-gray-600">훌륭해요! 꾸준히 복용하고 계시네요</div>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {['월', '화', '수', '목', '금', '토', '일'].map((day, index) => (
                    <div key={day} className="text-center">
                      <div className="text-xs text-gray-600 mb-1">{day}</div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs ${
                        index < 6 ? 'bg-green-500' : 'bg-orange-500'
                      }`}>
                        {index < 6 ? '✓' : '!'}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )
      case "records":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">📋 건강 기록</h2>
              <Button className="bg-orange-500 hover:bg-orange-600">
                <Download className="w-4 h-4 mr-2" />
                마이데이터 연동
              </Button>
            </div>

            {/* 최근 진료 기록 요약 */}
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <Stethoscope className="w-5 h-5 mr-2" />
                  AI 건강 상태 요약
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="font-bold mb-3">{currentMember.name}님의 건강 상태</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">주요 진단</h4>
                      <div className="space-y-1">
                        <Badge className="bg-red-100 text-red-700 mr-2">고혈압 2기</Badge>
                        <Badge className="bg-blue-100 text-blue-700 mr-2">당뇨병 전단계</Badge>
                        <Badge className="bg-yellow-100 text-yellow-700">퇴행성 관절염</Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">관리 요점</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 꾸준한 혈압 모니터링 필요</li>
                        <li>• 식단 관리로 당뇨 예방</li>
                        <li>• 관절에 무리가 가지 않는 운동</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 최근 진료 기록 */}
            <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
              <CardHeader>
                <CardTitle>최근 진료 기록</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      date: "2024.01.15",
                      hospital: "서울대학교병원",
                      department: "내분비내과",
                      diagnosis: "당뇨병 정기 검진",
                      doctor: "김○○ 교수",
                      status: "양호"
                    },
                    {
                      date: "2024.01.08",
                      hospital: "강남세브란스병원",
                      department: "심장내과",
                      diagnosis: "고혈압 관리",
                      doctor: "박○○ 교수",
                      status: "주의"
                    },
                    {
                      date: "2023.12.20",
                      hospital: "삼성서울병원",
                      department: "정형외과",
                      diagnosis: "무릎 관절염 치료",
                      doctor: "이○○ 교수",
                      status: "개선"
                    }
                  ].map((record, index) => (
                    <div key={index} className="p-4 border rounded-xl hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-bold">{record.hospital}</h3>
                          <Badge className={`${
                            record.status === "양호" ? "bg-green-100 text-green-700" :
                            record.status === "주의" ? "bg-yellow-100 text-yellow-700" :
                            "bg-blue-100 text-blue-700"
                          }`}>
                            {record.status}
                          </Badge>
                        </div>
                        <span className="text-sm text-gray-500">{record.date}</span>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 text-sm">
                        <div><span className="font-medium">과목:</span> {record.department}</div>
                        <div><span className="font-medium">진단:</span> {record.diagnosis}</div>
                        <div><span className="font-medium">담당의:</span> {record.doctor}</div>
                      </div>
                      <div className="mt-3 flex space-x-2">
                        <Button variant="outline" size="sm">상세 보기</Button>
                        <Button variant="outline" size="sm">처방전</Button>
                        <Button variant="outline" size="sm">검사 결과</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 검사 결과 트렌드 */}
            <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
              <CardHeader>
                <CardTitle>주요 검사 수치 변화</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-red-50 rounded-xl">
                    <div className="text-2xl mb-2">🩸</div>
                    <div className="text-sm text-gray-600">수축기 혈압</div>
                    <div className="text-2xl font-bold text-red-600">145</div>
                    <div className="text-xs text-red-600">↑ 이전 대비 +10</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-2xl mb-2">🍯</div>
                    <div className="text-sm text-gray-600">공복혈당</div>
                    <div className="text-2xl font-bold text-blue-600">108</div>
                    <div className="text-xs text-blue-600">↓ 이전 대비 -5</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <div className="text-2xl mb-2">🧪</div>
                    <div className="text-sm text-gray-600">당화혈색소</div>
                    <div className="text-2xl font-bold text-green-600">6.2%</div>
                    <div className="text-xs text-green-600">→ 이전과 동일</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )
      case "schedule":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">📅 일정 관리</h2>
              <Button className="bg-orange-500 hover:bg-orange-600">
                <Plus className="w-4 h-4 mr-2" />
                새 일정 추가
              </Button>
            </div>

            {/* 다가오는 예약 */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-700">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  이번 주 예정된 일정
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      date: "내일 (1월 20일)",
                      time: "오후 2:00",
                      type: "진료",
                      location: "서울대학교병원 내분비내과",
                      doctor: "김○○ 교수",
                      urgent: true
                    },
                    {
                      date: "1월 25일",
                      time: "오전 10:00",
                      type: "검진",
                      location: "강남세브란스병원 건강검진센터",
                      doctor: "종합검진",
                      urgent: false
                    }
                  ].map((appointment, index) => (
                    <div key={index} className={`p-4 bg-white rounded-lg border-l-4 ${
                      appointment.urgent ? 'border-red-400' : 'border-blue-400'
                    }`}>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-bold">{appointment.type}</h3>
                            {appointment.urgent && (
                              <Badge className="bg-red-100 text-red-700">내일</Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">{appointment.date} {appointment.time}</p>
                        </div>
                        <Button variant="outline" size="sm">수정</Button>
                      </div>
                      <div className="text-sm space-y-1">
                        <div><span className="font-medium">장소:</span> {appointment.location}</div>
                        <div><span className="font-medium">담당:</span> {appointment.doctor}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 월별 캘린더 */}
            <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
              <CardHeader>
                <CardTitle>1월 일정</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['일', '월', '화', '수', '목', '금', '토'].map(day => (
                    <div key={day} className="text-center font-medium text-gray-600 p-2">{day}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 31 }, (_, i) => i + 1).map(date => (
                    <div key={date} className={`p-2 text-center text-sm border rounded ${
                      date === 20 ? 'bg-red-100 border-red-300 font-bold' :
                      date === 25 ? 'bg-blue-100 border-blue-300 font-bold' :
                      'hover:bg-gray-50'
                    }`}>
                      {date}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 정기 일정 */}
            <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
              <CardHeader>
                <CardTitle>정기 일정</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { title: "혈압 측정", frequency: "매일 오전 9시", nextDate: "내일" },
                    { title: "혈당 검사", frequency: "주 3회", nextDate: "모레" },
                    { title: "정기 진료", frequency: "월 1회", nextDate: "2주 후" }
                  ].map((routine, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium">{routine.title}</div>
                        <div className="text-sm text-gray-600">{routine.frequency}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">{routine.nextDate}</div>
                        <Button variant="outline" size="sm">알림 설정</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )
      case "analytics":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">건강 분석</h2>
            <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
              <CardHeader>
                <CardTitle>AI 건강 리포트</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">건강 분석 기능이 곧 추가됩니다.</p>
              </CardContent>
            </Card>
          </div>
        )
      case "insurance":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">🛡️ 보험 관리</h2>
              <Button className="bg-orange-500 hover:bg-orange-600">
                <Plus className="w-4 h-4 mr-2" />
                보험 추가
              </Button>
            </div>

            {/* 보험금 청구 현황 */}
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  청구 가능한 보험금
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-green-600">85,000원</div>
                  <div className="text-gray-600">입금 대기 중</div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between p-3 bg-white rounded-lg border">
                    <div>
                      <div className="font-medium">서울대병원 진료비</div>
                      <div className="text-sm text-gray-600">2024.01.15 - 내분비내과</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">45,000원</div>
                      <Badge className="bg-green-100 text-green-700">승인</Badge>
                    </div>
                  </div>
                  <div className="flex justify-between p-3 bg-white rounded-lg border">
                    <div>
                      <div className="font-medium">강남세브란스 검사비</div>
                      <div className="text-sm text-gray-600">2024.01.08 - 심장내과</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">40,000원</div>
                      <Badge className="bg-yellow-100 text-yellow-700">심사중</Badge>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-4">보험금 신청하기</Button>
              </CardContent>
            </Card>

            {/* 가입 보험 목록 */}
            <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
              <CardHeader>
                <CardTitle>가입 보험 현황</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      company: "삼성화재",
                      product: "실손의료보험",
                      coverage: "5,000만원",
                      premium: "월 85,000원",
                      status: "정상"
                    },
                    {
                      company: "현대해상",
                      product: "암보험",
                      coverage: "3,000만원",
                      premium: "월 45,000원",
                      status: "정상"
                    },
                    {
                      company: "KB손보",
                      product: "간병비보험",
                      coverage: "1,000만원",
                      premium: "월 30,000원",
                      status: "만료임박"
                    }
                  ].map((insurance, index) => (
                    <div key={index} className="p-4 border rounded-xl">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-bold">{insurance.company}</h3>
                          <p className="text-sm text-gray-600">{insurance.product}</p>
                        </div>
                        <Badge className={`${
                          insurance.status === "정상" ? "bg-green-100 text-green-700" :
                          "bg-red-100 text-red-700"
                        }`}>
                          {insurance.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div><span className="font-medium">보장한도:</span> {insurance.coverage}</div>
                        <div><span className="font-medium">보험료:</span> {insurance.premium}</div>
                      </div>
                      <div className="mt-3 flex space-x-2">
                        <Button variant="outline" size="sm">상세 보기</Button>
                        <Button variant="outline" size="sm">청구 내역</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 보험 추천 */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-700">맞춤 보험 추천</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-lg font-bold">치매보험을 고려해보세요</div>
                  <div className="text-sm text-gray-600">현재 나이와 건강상태를 고려한 추천</div>
                </div>
                <div className="space-y-2 text-sm">
                  <div>• 치매 진단 시 최대 3,000만원 보장</div>
                  <div>• 월 보험료 약 65,000원 (현재 나이 기준)</div>
                  <div>• 가족력을 고려한 맞춤형 상품</div>
                </div>
                <Button className="w-full mt-4" variant="outline">자세히 알아보기</Button>
              </CardContent>
            </Card>
          </div>
        )
      case "family":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">👨‍👩‍👧‍👦 가족 공유</h2>
              <Button className="bg-orange-500 hover:bg-orange-600">
                <Plus className="w-4 h-4 mr-2" />
                가족 초대
              </Button>
            </div>

            {/* 연결된 가족 */}
            <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
              <CardHeader>
                <CardTitle>연결된 가족 구성원</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "김철민",
                      relation: "큰아들",
                      avatar: "👨",
                      status: "활성",
                      permission: "전체 열람",
                      lastActivity: "2시간 전"
                    },
                    {
                      name: "김영수",
                      relation: "둘째아들",
                      avatar: "👨‍💼",
                      status: "활성",
                      permission: "응급상황만",
                      lastActivity: "1일 전"
                    },
                    {
                      name: "김미영",
                      relation: "딸",
                      avatar: "👩",
                      status: "대기중",
                      permission: "미설정",
                      lastActivity: "초대 발송됨"
                    }
                  ].map((member, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-xl">
                      <div className="flex items-center space-x-4">
                        <div className="text-2xl">{member.avatar}</div>
                        <div>
                          <div className="font-medium">{member.name}</div>
                          <div className="text-sm text-gray-600">{member.relation}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={`${
                          member.status === "활성" ? "bg-green-100 text-green-700" :
                          "bg-yellow-100 text-yellow-700"
                        } mb-1`}>
                          {member.status}
                        </Badge>
                        <div className="text-xs text-gray-500">{member.permission}</div>
                        <div className="text-xs text-gray-400">{member.lastActivity}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 공유 설정 */}
            <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
              <CardHeader>
                <CardTitle>공유 설정</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "복약 알림 공유", description: "약 복용 상태를 가족과 공유", enabled: true },
                    { title: "응급상황 알림", description: "응급 상황 시 즉시 알림", enabled: true },
                    { title: "진료 기록 공유", description: "병원 방문 기록 공유", enabled: false },
                    { title: "건강 리포트 공유", description: "주간/월간 건강 리포트 공유", enabled: true }
                  ].map((setting, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium">{setting.title}</div>
                        <div className="text-sm text-gray-600">{setting.description}</div>
                      </div>
                      <div className={`w-12 h-6 rounded-full ${
                        setting.enabled ? 'bg-green-500' : 'bg-gray-300'
                      } relative transition-colors cursor-pointer`}>
                        <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                          setting.enabled ? 'translate-x-6' : 'translate-x-0.5'
                        }`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 가족 활동 내역 */}
            <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
              <CardHeader>
                <CardTitle>최근 가족 활동</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { member: "김철민", action: "어머니 복약 확인", time: "2시간 전", icon: "💊" },
                    { member: "김영수", action: "건강 리포트 열람", time: "1일 전", icon: "📊" },
                    { member: "김영희", action: "진료 예약 등록", time: "2일 전", icon: "📅" },
                    { member: "김철민", action: "응급상황 알림 확인", time: "3일 전", icon: "🚨" }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="text-xl">{activity.icon}</div>
                      <div className="flex-1">
                        <div className="font-medium">{activity.member}</div>
                        <div className="text-sm text-gray-600">{activity.action}</div>
                      </div>
                      <div className="text-xs text-gray-500">{activity.time}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )
      case "care":
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4 mb-8">
              <div className="text-6xl">🤗</div>
              <h2 className="text-3xl font-bold text-gray-800">안녕하세요, 김영희님</h2>
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-200 max-w-2xl mx-auto">
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  "세상의 짐을 홀로 들고 있었다면, 오늘부터는 우리와 나눠 들어요.<br/>
                  당신의 수고는 당연하지 않아요. 우리는 그 고됨을 진심으로 알아요."
                </p>
              </div>
            </div>

            {/* 오늘의 기분 체크 */}
            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-700">
                  <Sun className="w-5 h-5 mr-2" />
                  오늘 하루는 어떠셨나요?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center space-x-6 mb-4">
                  {[
                    { emoji: "😊", label: "좋아요", color: "bg-green-100 hover:bg-green-200 border-green-300" },
                    { emoji: "😐", label: "보통이에요", color: "bg-gray-100 hover:bg-gray-200 border-gray-300" },
                    { emoji: "😔", label: "힘들어요", color: "bg-blue-100 hover:bg-blue-200 border-blue-300" },
                    { emoji: "😰", label: "많이 힘들어요", color: "bg-red-100 hover:bg-red-200 border-red-300" }
                  ].map((mood, index) => (
                    <button
                      key={index}
                      className={`p-4 rounded-xl border-2 transition-all hover:scale-105 ${mood.color}`}
                    >
                      <div className="text-3xl mb-2">{mood.emoji}</div>
                      <div className="text-sm font-medium">{mood.label}</div>
                    </button>
                  ))}
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">선택해주시면 맞춤 지원을 제공해드려요</p>
                </div>
              </CardContent>
            </Card>

            {/* 간병인 건강 체크 */}
            <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-red-500" />
                  김영희님의 건강도 소중해요
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-bold text-gray-800">오늘의 체크리스트</h3>
                    {[
                      { item: "충분한 수면 (7시간 이상)", checked: true },
                      { item: "규칙적인 식사", checked: false },
                      { item: "30분 이상 휴식", checked: false },
                      { item: "가벼운 운동이나 산책", checked: true }
                    ].map((check, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                          check.checked ? 'bg-green-500 border-green-500' : 'border-gray-300'
                        }`}>
                          {check.checked && <CheckCircle className="w-4 h-4 text-white" />}
                        </div>
                        <span className={check.checked ? 'text-gray-600' : 'text-gray-800'}>{check.item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl">
                    <h3 className="font-bold text-blue-900 mb-3">스트레스 관리 팁</h3>
                    <ul className="text-sm space-y-2 text-blue-800">
                      <li>• 깊게 숨을 들이마시고 천천히 내쉬어보세요</li>
                      <li>• 10분간 좋아하는 음악을 들어보세요</li>
                      <li>• 따뜻한 차 한 잔과 함께 잠시 휴식을</li>
                      <li>• 가족이나 친구와 짧은 통화를 해보세요</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 정서적 지원 */}
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-700">
                  <Users className="w-5 h-5 mr-2" />
                  혼자가 아니에요
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <button className="p-4 bg-white rounded-xl border hover:shadow-md transition-shadow text-center">
                    <div className="text-2xl mb-2">💬</div>
                    <div className="font-medium">전문 상담사와 대화</div>
                    <div className="text-xs text-gray-600 mt-1">24시간 상담 가능</div>
                  </button>
                  <button className="p-4 bg-white rounded-xl border hover:shadow-md transition-shadow text-center">
                    <div className="text-2xl mb-2">🫂</div>
                    <div className="font-medium">간병인 커뮤니티</div>
                    <div className="text-xs text-gray-600 mt-1">같은 상황의 분들과 소통</div>
                  </button>
                  <button className="p-4 bg-white rounded-xl border hover:shadow-md transition-shadow text-center">
                    <div className="text-2xl mb-2">📱</div>
                    <div className="font-medium">긴급 상황 연락</div>
                    <div className="text-xs text-gray-600 mt-1">24시간 응급 지원</div>
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* 오늘의 다정한 문장 */}
            <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200">
              <CardContent className="p-6 text-center">
                <div className="text-2xl mb-4">✨</div>
                <h3 className="font-bold text-amber-800 mb-3">오늘의 다정한 문장</h3>
                <p className="text-lg text-amber-700 italic leading-relaxed">
                  "말하지 않아도 알 수 있는 무게가 있죠.<br/>
                  그 무게를, 이 공간에선 놓아도 괜찮아요."
                </p>
                <Button className="mt-4 bg-amber-500 hover:bg-amber-600">다른 문장 보기</Button>
              </CardContent>
            </Card>

            {/* 간병인 교육 및 정보 */}
            <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
              <CardHeader>
                <CardTitle>간병 도움 자료</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {[
                    { title: "안전한 이동 돕기", description: "휠체어 사용법과 낙상 예방", icon: "🚶‍♀️" },
                    { title: "응급상황 대처법", description: "의식잃음, 호흡곤란 등 대응", icon: "🚨" },
                    { title: "약물 관리 가이드", description: "복용법과 부작용 체크", icon: "💊" },
                    { title: "영양 관리 팁", description: "질환별 식단 관리법", icon: "🥗" }
                  ].map((guide, index) => (
                    <div key={index} className="p-4 border rounded-xl hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-3">
                        <div className="text-2xl">{guide.icon}</div>
                        <div className="flex-1">
                          <h3 className="font-medium">{guide.title}</h3>
                          <p className="text-sm text-gray-600">{guide.description}</p>
                          <Button variant="outline" size="sm" className="mt-2">자세히 보기</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )
      case "settings":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">⚙️ 설정</h2>
            <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
              <CardHeader>
                <CardTitle>앱 설정</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">설정 기능이 곧 추가됩니다.</p>
              </CardContent>
            </Card>
          </div>
        )
      default:
        return (
          <>
            {/* 알림 & 주의사항 - 최상단 이동 */}
            <Card className="bg-white/60 backdrop-blur-sm border-orange-100 mb-6">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-orange-500" />
                  알림 & 주의사항
                  <Badge className="ml-2 bg-red-100 text-red-700">3</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                  {alerts.map((alert, index) => (
                    <div key={index} className={`p-3 rounded-lg border ${alert.color}`}>
                      <div className="flex items-start space-x-2">
                        <alert.icon className={`w-4 h-4 ${alert.iconColor} mt-0.5 flex-shrink-0`} />
                        <div className="min-w-0 flex-1">
                          <div className="font-medium text-sm truncate">{alert.title}</div>
                          <div className="text-xs opacity-90 truncate">{alert.message}</div>
                        </div>
                        <ChevronRight className="w-4 h-4 opacity-50 flex-shrink-0" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Family Member Selection */}
            <Card className="bg-white/60 backdrop-blur-sm border-orange-100 mb-6">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Users className="w-5 h-5 mr-2 text-orange-500" />
                  돌봄 대상
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3 lg:gap-4">
                  {familyMembers.map((member) => (
                    <button
                      key={member.id}
                      onClick={() => setSelectedPerson(member.id)}
                      className={`p-3 lg:p-4 rounded-xl border-2 transition-all ${
                        selectedPerson === member.id ? "border-orange-300 bg-orange-50" : "border-gray-200 bg-white/50"
                      }`}
                    >
                      <div className="text-center space-y-2">
                        <div className="text-2xl lg:text-3xl">{member.avatar}</div>
                        <div className="font-medium text-gray-800 text-sm lg:text-base">{member.name}</div>
                        <Badge
                          className={`text-xs ${
                            member.status === "안정" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {member.status}
                        </Badge>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Main Info */}
              <div className="lg:col-span-2 space-y-6">
                {/* Health Status Summary */}
                <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center justify-between">
                      <span className="flex items-center">
                        <Activity className="w-5 h-5 mr-2 text-orange-500" />
                        {currentMember.name} 건강 현황
                      </span>
                      <Button variant="ghost" size="sm" className="text-orange-600">
                        <Download className="w-4 h-4 mr-1" />
                        PDF
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-6">
                      <div className="bg-gradient-to-br from-red-50 to-red-100 p-3 lg:p-4 rounded-xl text-center">
                        <div className="text-xl lg:text-2xl mb-1 lg:mb-2">🩸</div>
                        <div className="text-xs lg:text-sm text-gray-600">혈압</div>
                        <div className="text-sm lg:text-lg font-bold text-red-700">{currentMember.bloodPressure}</div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 lg:p-4 rounded-xl text-center">
                        <div className="text-xl lg:text-2xl mb-1 lg:mb-2">🍯</div>
                        <div className="text-xs lg:text-sm text-gray-600">혈당</div>
                        <div className="text-sm lg:text-lg font-bold text-blue-700">{currentMember.bloodSugar}mg/dL</div>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-green-100 p-3 lg:p-4 rounded-xl text-center">
                        <div className="text-xl lg:text-2xl mb-1 lg:mb-2">⚖️</div>
                        <div className="text-xs lg:text-sm text-gray-600">체중</div>
                        <div className="text-sm lg:text-lg font-bold text-green-700">{currentMember.weight}</div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-3 lg:p-4 rounded-xl text-center">
                        <div className="text-xl lg:text-2xl mb-1 lg:mb-2">💊</div>
                        <div className="text-xs lg:text-sm text-gray-600">복용 약물</div>
                        <div className="text-sm lg:text-lg font-bold text-purple-700">{currentMember.medications}개</div>
                      </div>
                    </div>

                    {/* Desktop Health Trend Chart */}
                    <div className="hidden lg:block">
                      <h4 className="font-medium text-gray-800 mb-4">주간 건강 트렌드</h4>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={healthTrendData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis dataKey="date" stroke="#666" fontSize={12} />
                            <YAxis stroke="#666" fontSize={12} />
                            <Tooltip
                              contentStyle={{
                                backgroundColor: "rgba(255, 255, 255, 0.9)",
                                border: "1px solid #e0e0e0",
                                borderRadius: "8px",
                              }}
                            />
                            <Line
                              type="monotone"
                              dataKey="bloodPressure"
                              stroke="#ef4444"
                              strokeWidth={2}
                              name="혈압 (수축기)"
                            />
                            <Line type="monotone" dataKey="bloodSugar" stroke="#3b82f6" strokeWidth={2} name="혈당" />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Today's Medications */}
                <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center justify-between">
                      <span className="flex items-center">
                        <Pill className="w-5 h-5 mr-2 text-orange-500" />
                        오늘의 복약 일정
                      </span>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-green-100 text-green-700">
                          {todayMedications.filter((m) => m.taken).length}/{todayMedications.length} 완료
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {todayMedications.map((med, index) => (
                        <div
                          key={index}
                          className={`p-3 lg:p-4 rounded-xl ${med.color} border border-gray-200 flex items-center justify-between`}
                        >
                          <div className="flex items-center space-x-3 lg:space-x-4">
                            <div
                              className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center ${
                                med.taken ? "bg-green-500 text-white" : "bg-gray-300 text-gray-600"
                              }`}
                            >
                              {med.taken ? <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5" /> : <Clock className="w-4 h-4 lg:w-5 lg:h-5" />}
                            </div>
                            <div>
                              <div className="font-medium text-gray-800 text-sm lg:text-base">{med.name}</div>
                              <div className="text-xs lg:text-sm text-gray-600">
                                {med.time} • {med.dosage}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {!med.taken && (
                              <Badge className="bg-orange-200 text-orange-800 hidden lg:inline-flex text-xs">30분 전 알림</Badge>
                            )}
                            <Button variant="ghost" size="sm" className="text-xs lg:text-sm">
                              {med.taken ? "완료" : "복용"}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Desktop Medication Compliance Chart */}
                    <div className="hidden lg:block mt-6">
                      <h4 className="font-medium text-gray-800 mb-4">주간 복약 순응도</h4>
                      <div className="h-32">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={medicationComplianceData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis dataKey="day" stroke="#666" fontSize={12} />
                            <YAxis stroke="#666" fontSize={12} />
                            <Tooltip
                              contentStyle={{
                                backgroundColor: "rgba(255, 255, 255, 0.9)",
                                border: "1px solid #e0e0e0",
                                borderRadius: "8px",
                              }}
                            />
                            <Bar dataKey="compliance" fill="#f97316" radius={[4, 4, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Quick Actions & Reports */}
              <div className="space-y-6">
                {/* 간소화된 빠른 실행 */}
                <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-orange-500" />
                      빠른 실행
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {quickActions.map((action, index) => (
                        <button
                          key={index}
                          className={`${action.color} p-3 lg:p-4 rounded-xl border border-gray-200 hover:scale-105 transition-transform text-center`}
                        >
                          <action.icon className={`w-6 h-6 lg:w-8 lg:h-8 ${action.iconColor} mx-auto mb-2`} />
                          <div className="font-medium text-gray-800 text-xs lg:text-sm">{action.title}</div>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Weekly Report */}
                <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100">
                  <CardContent className="p-4">
                    <div className="text-center space-y-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">주간 건강 리포트</div>
                        <div className="text-sm text-gray-600">AI 분석 완료</div>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                        리포트 보기
                      </Button>
                    </div>
                  </CardContent>
                </Card>


              </div>
            </div>
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-pink-50">
      {/* Mobile Header */}
      <header className="lg:hidden bg-white/80 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)}>
                <Menu className="w-5 h-5" />
              </Button>
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-800">맡흠</h1>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full"></span>
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-orange-100 text-orange-700 text-sm">김</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 bg-white/60 backdrop-blur-sm border-r border-orange-100 min-h-screen">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">맡흠</h1>
                <p className="text-xs text-gray-500">따뜻한 건강 동반자</p>
              </div>
            </div>

            <nav className="space-y-2">
              {sidebarItems.map((item, index) => (
                <Button
                  key={index}
                  variant={activeView === item.id ? "default" : "ghost"}
                  className={`w-full justify-start ${
                    activeView === item.id
                      ? "bg-orange-100 text-orange-700 hover:bg-orange-200"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => handleSidebarClick(item.id)}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.label}
                </Button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setSidebarOpen(false)}>
            <aside className="w-64 bg-white h-full" onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <h1 className="text-lg font-bold text-gray-800">맡흠</h1>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                <nav className="space-y-2">
                  {sidebarItems.map((item, index) => (
                    <Button
                      key={index}
                      variant={activeView === item.id ? "default" : "ghost"}
                      className={`w-full justify-start ${
                        activeView === item.id
                          ? "bg-orange-100 text-orange-700 hover:bg-orange-200"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                      onClick={() => handleSidebarClick(item.id)}
                    >
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.label}
                    </Button>
                  ))}
                </nav>
              </div>
            </aside>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8">
          {/* Desktop Header */}
          <div className="hidden lg:flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">안녕하세요, 김영희님 🌸</h2>
              <p className="text-gray-600 mt-1">오늘도 사랑으로 돌보시는 마음, 우리가 함께 나눠요</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-orange-200 text-orange-700">
                <Download className="w-4 h-4 mr-2" />
                건강 리포트 다운로드
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  3
                </span>
              </Button>
              <Avatar>
                <AvatarFallback className="bg-orange-100 text-orange-700">김</AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* Mobile Welcome */}
          <div className="lg:hidden text-center space-y-3 mb-6">
            <div className="text-4xl">🌸</div>
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800">안녕하세요, 김영희님</h2>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-3 border border-orange-100">
              <p className="text-gray-600 text-sm italic">"오늘도 사랑으로 돌보시는 마음, 우리가 함께 나눠요 💝"</p>
            </div>
          </div>

          {renderContent()}
        </main>
      </div>

      {/* Floating Action Button */}
      <Button
        size="icon"
        className="fixed bottom-6 right-6 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 hover:from-orange-500 hover:to-pink-500 shadow-lg z-40"
      >
        <Plus className="w-5 h-5 lg:w-6 lg:h-6" />
      </Button>
    </div>
  )
}
