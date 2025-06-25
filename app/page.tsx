"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { toast } from "@/components/ui/use-toast"
import {
  Menu,
  X,
  Home,
  AlertCircle,
  Stethoscope,
  Users,
  Settings,
  Heart,
  ChevronRight,
  Activity,
  TrendingUp,
  Zap,
  Download,
  Plus,
  Share2,
  Star,
  Sun,
  Moon,
  Calendar,
  CheckCircle,
  Bell,
  Shield
} from "lucide-react"

export default function ResponsiveHealthcare() {
  const [selectedPerson, setSelectedPerson] = useState("mother")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeView, setActiveView] = useState("dashboard")
  const [moodDialogOpen, setMoodDialogOpen] = useState(false)
  const [todayMood, setTodayMood] = useState<null | "sun" | "moon">(null)

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

  // 간소화된 빠른 실행 액션 - 핵심 기능 위주
  const quickActions = [
    {
      icon: AlertCircle,
      title: "위험 신호 분석",
      color: "bg-gradient-to-br from-red-100 to-orange-100",
      iconColor: "text-red-600",
    },
    {
      icon: Stethoscope,
      title: "병원 추천",
      color: "bg-gradient-to-br from-blue-100 to-indigo-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Share2,
      title: "가족 공유",
      color: "bg-gradient-to-br from-green-100 to-emerald-100",
      iconColor: "text-green-600",
    },
    {
      icon: Download,
      title: "마이데이터 연동",
      color: "bg-gradient-to-br from-purple-100 to-pink-100",
      iconColor: "text-purple-600",
    },
  ]

  const sidebarItems = [
    { icon: Home, label: "대시보드", id: "dashboard" },
    { icon: AlertCircle, label: "위험 신호 분석", id: "risk-analysis" },
    { icon: Stethoscope, label: "병원 추천", id: "hospital-recommendation" },
    { icon: Users, label: "가족 공유", id: "family" },
    { icon: Shield, label: "보험 관리", id: "insurance" },
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
      case "risk-analysis":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">⚠️ 위험 신호 분석</h2>
              <Button className="bg-red-500 hover:bg-red-600">
                <Download className="w-4 h-4 mr-2" />
                마이데이터 연동
              </Button>
            </div>

            {/* 위험 신호 감지 결과 */}
            <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center text-red-700">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  발견된 위험 신호
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border-l-4 border-red-400">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-bold text-red-800">통풍 의심 신호 감지</h3>
                        <p className="text-sm text-red-600">최근 3개월간 정형외과 4회 방문 + 소염제 중복 처방</p>
                      </div>
                      <Badge className="bg-red-100 text-red-700">높음</Badge>
                    </div>
                    <div className="mb-3">
                      <p className="text-sm text-gray-700 mb-2">다음 증상들을 경험하신 적이 있나요?</p>
                      <div className="grid grid-cols-2 gap-2">
                        {["발가락 극심한 통증", "무릎/발목 부종", "밤에 심해지는 관절통", "열감과 빨갛게 부어오름"].map((symptom, i) => (
                          <label key={i} className="flex items-center space-x-2 text-sm">
                            <input type="checkbox" className="w-4 h-4" />
                            <span>{symptom}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <Button className="bg-red-500 hover:bg-red-600">신경과/류마티스내과 추천받기</Button>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border-l-4 border-yellow-400">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-bold text-yellow-800">당뇨 전단계 가능성</h3>
                        <p className="text-sm text-yellow-600">공복혈당 수치 상승 추세 + 빈뇨 관련 진료</p>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-700">중간</Badge>
                    </div>
                    <Button variant="outline" className="border-yellow-400 text-yellow-700">체크리스트 확인하기</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 진료 패턴 분석 */}
            <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
              <CardHeader>
                <CardTitle>최근 6개월 진료 패턴 분석</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-red-50 rounded-xl">
                      <div className="text-2xl mb-2">🏥</div>
                      <div className="text-sm text-gray-600">방문한 병원</div>
                      <div className="text-2xl font-bold text-red-600">7곳</div>
                      <div className="text-xs text-red-600">정형외과 4회, 내과 3회</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                      <div className="text-2xl mb-2">💊</div>
                      <div className="text-sm text-gray-600">처방받은 약물</div>
                      <div className="text-2xl font-bold text-blue-600">12종</div>
                      <div className="text-xs text-blue-600">소염제 중복 5회</div>
                    </div>
                    <div className="text-center p-4 bg-yellow-50 rounded-xl">
                      <div className="text-2xl mb-2">⚠️</div>
                      <div className="text-sm text-gray-600">위험 신호</div>
                      <div className="text-2xl font-bold text-yellow-600">3개</div>
                      <div className="text-xs text-yellow-600">즉시 확인 필요</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "hospital-recommendation":
  return (
          <div className="space-y-6">
          <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">🏥 병원 추천</h2>
              <Button className="bg-blue-500 hover:bg-blue-600">
                <AlertCircle className="w-4 h-4 mr-2" />
                증상 입력하기
              </Button>
              </div>

            {/* 위험 신호 기반 추천 */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-700">
                  <Stethoscope className="w-5 h-5 mr-2" />
                  위험 신호 기반 맞춤 추천
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border">
                    <div className="flex justify-between items-start mb-3">
              <div>
                        <h3 className="font-bold text-blue-800">통풍 의심 → 류마티스내과 추천</h3>
                        <p className="text-sm text-blue-600">관절 통증 패턴과 진료 기록을 분석한 결과입니다</p>
              </div>
                      <Badge className="bg-red-100 text-red-700">긴급</Badge>
            </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {[
                        {
                          name: "서울대학교병원",
                          department: "류마티스내과",
                          doctor: "김○○ 교수",
                          distance: "2.3km",
                          waiting: "1주 후 예약 가능",
                          rating: "4.8"
                        },
                        {
                          name: "강남세브란스병원",
                          department: "류마티스내과", 
                          doctor: "박○○ 교수",
                          distance: "3.1km",
                          waiting: "3일 후 예약 가능",
                          rating: "4.9"
                        }
                      ].map((hospital, index) => (
                        <div key={index} className="p-3 border rounded-lg hover:shadow-md transition-shadow">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold">{hospital.name}</h4>
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm">{hospital.rating}</span>
                            </div>
                          </div>
                          <div className="text-sm space-y-1">
                            <div><span className="font-medium">과목:</span> {hospital.department}</div>
                            <div><span className="font-medium">의사:</span> {hospital.doctor}</div>
                            <div><span className="font-medium">거리:</span> {hospital.distance}</div>
                            <div><span className="font-medium">예약:</span> {hospital.waiting}</div>
                          </div>
                          <Button className="w-full mt-3 bg-blue-500 hover:bg-blue-600" size="sm">
                            예약하기
              </Button>
            </div>
                      ))}
          </div>
        </div>
                </div>
              </CardContent>
            </Card>

            {/* 증상별 병원 찾기 */}
            <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
              <CardHeader>
                <CardTitle>증상별 병원 찾기</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    { symptom: "관절 통증", department: "정형외과", icon: "🦴" },
                    { symptom: "가슴 답답함", department: "심장내과", icon: "❤️" },
                    { symptom: "소화불량", department: "소화기내과", icon: "🤢" },
                    { symptom: "두통/어지러움", department: "신경과", icon: "🧠" },
                    { symptom: "시야 흐림", department: "안과", icon: "👁️" },
                    { symptom: "수면 장애", department: "정신건강의학과", icon: "😴" },
                    { symptom: "기억력 저하", department: "신경과", icon: "🧠" },
                    { symptom: "기타 증상", department: "종합진료", icon: "🏥" }
                  ].map((item, index) => (
                    <button key={index} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <div className="text-sm font-medium">{item.symptom}</div>
                      <div className="text-xs text-gray-600">{item.department}</div>
                    </button>
                  ))}
              </div>
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

            {/* 건강 리포트 공유 */}
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <Share2 className="w-5 h-5 mr-2" />
                  건강 리포트 공유
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-white rounded-lg border">
                  <h3 className="font-bold mb-3">{currentMember.name}님의 이번 주 건강 리포트</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-red-50 rounded-lg">
                      <div className="text-sm text-gray-600">위험 신호</div>
                      <div className="text-xl font-bold text-red-600">2개</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-sm text-gray-600">병원 방문</div>
                      <div className="text-xl font-bold text-blue-600">3회</div>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="p-2 bg-red-50 rounded text-sm">
                      ⚠️ 통풍 의심 신호 감지됨 - 류마티스내과 진료 권장
                    </div>
                    <div className="p-2 bg-yellow-50 rounded text-sm">
                      ⚠️ 혈당 수치 상승 추세 - 당뇨내과 검진 필요
                    </div>
                  </div>
                  <Button className="w-full">가족들과 리포트 공유하기</Button>
                </div>
              </CardContent>
            </Card>

            {/* 연결된 가족 구성원 (기존 코드 유지) */}
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
          </div>
        )

      case "insurance":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">🛡️ 보험 관리</h2>
              <Button className="bg-blue-500 hover:bg-blue-600">
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

            {/* AI 보험 추천 */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-700">🤖 AI 맞춤 보험 추천</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-white rounded-lg border">
                  <div className="text-center mb-4">
                    <div className="text-lg font-bold">치매보험을 고려해보세요</div>
                    <div className="text-sm text-gray-600">위험 신호 분석 결과를 기반한 추천</div>
                </div>
                  <div className="space-y-2 text-sm mb-4">
                    <div>• 치매 진단 시 최대 3,000만원 보장</div>
                    <div>• 월 보험료 약 65,000원 (현재 나이 기준)</div>
                    <div>• 가족력과 건강 상태를 고려한 맞춤형 상품</div>
                    <div>• 조기 발견 시 혜택 추가 제공</div>
              </div>
                  <Button className="w-full" variant="outline">자세히 알아보기</Button>
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
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <span>위험 신호 알림</span>
                    <input type="checkbox" defaultChecked className="w-5 h-5" />
                    </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <span>가족 공유 자동 알림</span>
                    <input type="checkbox" defaultChecked className="w-5 h-5" />
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <span>마이데이터 자동 동기화</span>
                    <input type="checkbox" defaultChecked className="w-5 h-5" />
                  </div>
                </div>
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

            {/* 핵심 기능: 위험 신호 감지 */}
            <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200 mb-8 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-red-700 text-2xl">
                  <AlertCircle className="w-7 h-7 mr-3" />
                  AI 위험 신호 감지
                  <Badge className="ml-3 bg-red-100 text-red-700 text-base px-3 py-1">긴급</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-5">
                    <div className="p-5 bg-white rounded-lg border-l-4 border-red-400 shadow-sm">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold text-red-800 text-lg">통풍 의심 신호</h3>
                        <Badge className="bg-red-100 text-red-700 text-sm">높음</Badge>
                      </div>
                      <p className="text-red-600 mb-4 text-base leading-relaxed">정형외과 4회 방문 + 소염제 중복 처방 패턴</p>
                      <Button 
                        className="bg-red-500 hover:bg-red-600 text-white text-base px-6 py-2" 
                        size="default"
                        onClick={() => setActiveView("risk-analysis")}
                      >
                        체크리스트 확인
                  </Button>
                </div>
                    <div className="p-5 bg-white rounded-lg border-l-4 border-yellow-400 shadow-sm">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold text-yellow-800 text-lg">당뇨 전단계 가능성</h3>
                        <Badge className="bg-yellow-100 text-yellow-700 text-sm">중간</Badge>
                      </div>
                      <p className="text-yellow-600 mb-4 text-base leading-relaxed">혈당 수치 상승 + 빈뇨 관련 진료</p>
                    <Button
                        variant="outline" 
                        className="border-yellow-400 text-yellow-700 text-base px-6 py-2" 
                        size="default"
                        onClick={() => setActiveView("risk-analysis")}
                      >
                        상세 분석
                    </Button>
              </div>
          </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-5 text-center text-lg">최근 6개월 진료 패턴</h3>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="p-4 bg-red-50 rounded-lg">
                        <div className="text-3xl mb-2">🏥</div>
                        <div className="text-2xl font-bold text-red-600">7곳</div>
                        <div className="text-sm text-gray-600 mt-1">방문 병원</div>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <div className="text-3xl mb-2">💊</div>
                        <div className="text-2xl font-bold text-blue-600">12종</div>
                        <div className="text-sm text-gray-600 mt-1">처방 약물</div>
                      </div>
                      <div className="p-4 bg-yellow-50 rounded-lg">
                        <div className="text-3xl mb-2">⚠️</div>
                        <div className="text-2xl font-bold text-yellow-600">3개</div>
                        <div className="text-sm text-gray-600 mt-1">위험 신호</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 핵심 기능: 맞춤 병원 추천 */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 mb-8 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-blue-700 text-2xl">
                  <Stethoscope className="w-7 h-7 mr-3" />
                  AI 맞춤 병원 추천
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-5 bg-white rounded-lg border shadow-sm">
                  <div className="flex justify-between items-center mb-5">
            <div>
                      <h3 className="font-bold text-blue-800 text-lg">통풍 의심 → 류마티스내과 추천</h3>
                      <p className="text-blue-600 text-base">증상 패턴과 진료 기록을 분석한 결과입니다</p>
            </div>
                    <Badge className="bg-red-100 text-red-700 text-sm">긴급</Badge>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-bold text-lg">서울대학교병원</h4>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm ml-1 font-medium">4.8</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-2">류마티스내과 | 김○○ 교수</p>
                      <p className="text-gray-600 mb-3">거리: 2.3km | 1주 후 예약 가능</p>
                      <Button className="w-full bg-blue-500 hover:bg-blue-600 text-base" size="default">
                        예약하기
              </Button>
            </div>
                    <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-bold text-lg">강남세브란스병원</h4>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm ml-1 font-medium">4.9</span>
          </div>
            </div>
                      <p className="text-gray-600 mb-2">류마티스내과 | 박○○ 교수</p>
                      <p className="text-gray-600 mb-3">거리: 3.1km | 3일 후 예약 가능</p>
                      <Button className="w-full bg-blue-500 hover:bg-blue-600 text-base" size="default">
                        예약하기
                      </Button>
          </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          {/* Family Member Selection */}
          <Card className="bg-white/60 backdrop-blur-sm border-orange-100 mb-6">
            <CardHeader className="pb-3">
                <CardTitle className="text-lg">가족 구성원 선택</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex space-x-4 overflow-x-auto pb-2">
                {familyMembers.map((member) => (
                  <button
                    key={member.id}
                    onClick={() => setSelectedPerson(member.id)}
                      className={`flex-shrink-0 p-4 rounded-xl border-2 transition-all hover:scale-105 ${
                        selectedPerson === member.id
                          ? "border-orange-400 bg-orange-50"
                          : "border-gray-200 bg-white hover:border-orange-200"
                    }`}
                  >
                      <div className="text-center space-y-2">
                        <div className="text-3xl">{member.avatar}</div>
                        <div className="font-medium text-gray-800">{member.name}</div>
                          <Badge
                          className={`${
                              member.status === "안정" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {member.status}
                          </Badge>
                        <div className="text-xs text-gray-500">마지막 확인: {member.lastCheck}</div>
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
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      <div className="text-center p-4 bg-blue-50 rounded-xl">
                        <div className="text-sm text-gray-600 mb-1">혈압</div>
                        <div className="text-xl font-bold text-blue-600">{currentMember.bloodPressure}</div>
                    </div>
                      <div className="text-center p-4 bg-green-50 rounded-xl">
                        <div className="text-sm text-gray-600 mb-1">혈당</div>
                        <div className="text-xl font-bold text-green-600">{currentMember.bloodSugar}</div>
                    </div>
                      <div className="text-center p-4 bg-purple-50 rounded-xl">
                        <div className="text-sm text-gray-600 mb-1">체중</div>
                        <div className="text-xl font-bold text-purple-600">{currentMember.weight}</div>
                    </div>
                      <div className="text-center p-4 bg-orange-50 rounded-xl">
                        <div className="text-sm text-gray-600 mb-1">진료 횟수</div>
                        <div className="text-xl font-bold text-orange-600">{currentMember.recentVisits}회</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
                  </div>

              {/* Right Column - Quick Actions */}
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
                          onClick={() => {
                            if (action.title === "위험 신호 분석") setActiveView("risk-analysis");
                            else if (action.title === "병원 추천") setActiveView("hospital-recommendation");
                            else if (action.title === "가족 공유") setActiveView("family");
                          }}
                        >
                          <action.icon className={`w-6 h-6 lg:w-8 lg:h-8 ${action.iconColor} mx-auto mb-2`} />
                          <div className="font-medium text-gray-800 text-xs lg:text-sm">{action.title}</div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

                {/* Health Report */}
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
        <aside className="hidden lg:flex flex-col w-64 bg-white/60 backdrop-blur-sm border-r border-orange-100 min-h-screen">
          <div className="flex-1 flex flex-col">
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                      <div>
                  <h1 className="text-xl font-bold text-gray-800">맡흠</h1>
                  <p className="text-xs text-gray-500">따뜻한 건강 동반자</p>
                      </div>
                    </div>
              <nav className="space-y-2 mb-4">
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
              {/* 설정 바로 아래 오늘의 기분 버튼 */}
              <Dialog open={moodDialogOpen} onOpenChange={setMoodDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center space-x-2 text-orange-700 border-orange-200 hover:bg-orange-50 mb-2"
                    size="sm"
                    onClick={() => setMoodDialogOpen(true)}
                  >
                    <Sun className="w-4 h-4 text-yellow-400" />
                    <Moon className="w-4 h-4 text-blue-400 ml-1" />
                    <span className="ml-2 text-sm font-medium">오늘의 기분</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-xs text-center">
                  <DialogHeader>
                    <DialogTitle className="mb-2">오늘 하루는 어땠나요?</DialogTitle>
                  </DialogHeader>
                  <div className="flex justify-center space-x-6 my-4">
                    <button
                      className={`rounded-full p-3 border-2 ${todayMood === "sun" ? "border-yellow-400 bg-yellow-50" : "border-gray-200 bg-white"}`}
                      onClick={() => {
                        setTodayMood("sun");
                        setMoodDialogOpen(false);
                        toast({ title: "오늘의 기분: 해 ☀️", description: "따뜻한 하루를 보내셨군요!" });
                      }}
                    >
                      <Sun className="w-8 h-8 text-yellow-400" />
                    </button>
                    <button
                      className={`rounded-full p-3 border-2 ${todayMood === "moon" ? "border-blue-400 bg-blue-50" : "border-gray-200 bg-white"}`}
                      onClick={() => {
                        setTodayMood("moon");
                        setMoodDialogOpen(false);
                        toast({ title: "오늘의 기분: 달 🌙", description: "수고 많으셨어요. 내일은 더 나은 하루가 될 거예요!" });
                      }}
                    >
                      <Moon className="w-8 h-8 text-blue-400" />
                    </button>
                  </div>
                  <div className="text-xs text-gray-500">기분을 선택해 주세요</div>
                </DialogContent>
              </Dialog>
            </div>
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

