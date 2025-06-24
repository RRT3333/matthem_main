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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

export default function ResponsiveHealthcare() {
  const [selectedPerson, setSelectedPerson] = useState("mother")
  const [sidebarOpen, setSidebarOpen] = useState(false)

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

  const quickActions = [
    {
      icon: Pill,
      title: "나의 약봉투",
      desc: "복용 중인 약 관리",
      color: "bg-gradient-to-br from-pink-100 to-rose-100",
      iconColor: "text-pink-600",
      count: "3개 복용 중",
    },
    {
      icon: FileText,
      title: "기록 추가",
      desc: "진단서 업로드",
      color: "bg-gradient-to-br from-blue-100 to-indigo-100",
      iconColor: "text-blue-600",
      count: "OCR 자동 인식",
    },
    {
      icon: Stethoscope,
      title: "병원 추천",
      desc: "맞춤 의료 서비스",
      color: "bg-gradient-to-br from-green-100 to-emerald-100",
      iconColor: "text-green-600",
      count: "5곳 추천",
    },
    {
      icon: Share2,
      title: "가족 공유",
      desc: "형제자매와 연동",
      color: "bg-gradient-to-br from-purple-100 to-violet-100",
      iconColor: "text-purple-600",
      count: "2명 연결됨",
    },
    {
      icon: Shield,
      title: "보험 관리",
      desc: "실손보험금 조회",
      color: "bg-gradient-to-br from-yellow-100 to-amber-100",
      iconColor: "text-yellow-600",
      count: "85,000원 대기",
    },
    {
      icon: BarChart3,
      title: "건강 분석",
      desc: "AI 건강 리포트",
      color: "bg-gradient-to-br from-teal-100 to-cyan-100",
      iconColor: "text-teal-600",
      count: "주간 리포트",
    },
  ]

  const sidebarItems = [
    { icon: Home, label: "대시보드", active: true },
    { icon: Pill, label: "약 지갑", active: false },
    { icon: FileText, label: "건강 기록", active: false },
    { icon: Calendar, label: "일정 관리", active: false },
    { icon: BarChart3, label: "건강 분석", active: false },
    { icon: Shield, label: "보험 관리", active: false },
    { icon: Users, label: "가족 공유", active: false },
    { icon: Settings, label: "설정", active: false },
  ]

  const currentMember = familyMembers.find((m) => m.id === selectedPerson) || familyMembers[0]

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
                  variant={item.active ? "default" : "ghost"}
                  className={`w-full justify-start ${
                    item.active
                      ? "bg-orange-100 text-orange-700 hover:bg-orange-200"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.label}
                </Button>
              ))}
            </nav>

            <div className="mt-8 p-4 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl border border-green-100">
              <div className="text-center space-y-2">
                <div className="text-2xl">🤗</div>
                <div className="font-medium text-gray-800 text-sm">간병인 케어</div>
                <p className="text-xs text-gray-600">오늘 하루는 어떠셨나요?</p>
                <div className="flex justify-center space-x-2">
                  <button className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <Sun className="w-4 h-4 text-yellow-600" />
                  </button>
                  <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <Moon className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
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
                      variant={item.active ? "default" : "ghost"}
                      className={`w-full justify-start ${
                        item.active
                          ? "bg-orange-100 text-orange-700 hover:bg-orange-200"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
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
            <h2 className="text-2xl font-bold text-gray-800">안녕하세요, 김영희님</h2>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-orange-100">
              <p className="text-gray-600 text-sm italic">"오늘도 사랑으로 돌보시는 마음, 우리가 함께 나눠요 💝"</p>
            </div>
          </div>

          {/* Family Member Selection */}
          <Card className="bg-white/60 backdrop-blur-sm border-orange-100 mb-6">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Users className="w-5 h-5 mr-2 text-orange-500" />
                돌봄 대상
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {familyMembers.map((member) => (
                  <button
                    key={member.id}
                    onClick={() => setSelectedPerson(member.id)}
                    className={`p-4 lg:p-6 rounded-xl border-2 transition-all ${
                      selectedPerson === member.id ? "border-orange-300 bg-orange-50" : "border-gray-200 bg-white/50"
                    }`}
                  >
                    <div className="flex items-center space-x-4 lg:flex-col lg:space-x-0 lg:space-y-3 lg:text-center">
                      <div className="text-3xl lg:text-4xl">{member.avatar}</div>
                      <div className="flex-1 lg:flex-none">
                        <div className="font-medium text-gray-800 text-lg">{member.name}</div>
                        <div className="text-sm text-gray-600 hidden lg:block">{member.fullName}</div>
                        <div className="flex items-center space-x-2 mt-2 lg:justify-center">
                          <Badge
                            className={`text-xs ${
                              member.status === "안정" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {member.status}
                          </Badge>
                          <span className="text-xs text-gray-500 hidden lg:inline">{member.lastCheck}</span>
                        </div>
                      </div>
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
                      <BookOpen className="w-5 h-5 mr-2 text-orange-500" />
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
                    <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-xl text-center">
                      <div className="text-2xl mb-2">🩸</div>
                      <div className="text-sm text-gray-600">혈압</div>
                      <div className="text-lg font-bold text-red-700">{currentMember.bloodPressure}</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl text-center">
                      <div className="text-2xl mb-2">🍯</div>
                      <div className="text-sm text-gray-600">혈당</div>
                      <div className="text-lg font-bold text-blue-700">{currentMember.bloodSugar}mg/dL</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl text-center">
                      <div className="text-2xl mb-2">⚖️</div>
                      <div className="text-sm text-gray-600">체중</div>
                      <div className="text-lg font-bold text-green-700">{currentMember.weight}</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl text-center">
                      <div className="text-2xl mb-2">💊</div>
                      <div className="text-sm text-gray-600">복용 약물</div>
                      <div className="text-lg font-bold text-purple-700">{currentMember.medications}개</div>
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
                        className={`p-4 rounded-xl ${med.color} border border-gray-200 flex items-center justify-between`}
                      >
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              med.taken ? "bg-green-500 text-white" : "bg-gray-300 text-gray-600"
                            }`}
                          >
                            {med.taken ? <CheckCircle className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
                          </div>
                          <div>
                            <div className="font-medium text-gray-800">{med.name}</div>
                            <div className="text-sm text-gray-600">
                              {med.time} • {med.dosage}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {!med.taken && (
                            <Badge className="bg-orange-200 text-orange-800 hidden lg:inline-flex">30분 전 알림</Badge>
                          )}
                          <Button variant="ghost" size="sm">
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

            {/* Right Column - Quick Actions & Alerts */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <Star className="w-5 h-5 mr-2 text-orange-500" />
                    빠른 실행
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                    {quickActions.map((action, index) => (
                      <button
                        key={index}
                        className={`${action.color} p-4 rounded-xl border border-gray-200 hover:scale-105 transition-transform text-left`}
                      >
                        <div className="flex items-center space-x-3 lg:flex-col lg:space-x-0 lg:space-y-2 lg:text-center">
                          <action.icon className={`w-6 h-6 lg:w-8 lg:h-8 ${action.iconColor}`} />
                          <div className="flex-1 lg:flex-none">
                            <div className="font-medium text-gray-800 text-sm lg:text-base">{action.title}</div>
                            <div className="text-xs text-gray-600 lg:block">{action.desc}</div>
                            <div className="text-xs text-gray-500 mt-1 hidden lg:block">{action.count}</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Alerts & Notifications */}
              <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2 text-orange-500" />
                    알림 & 주의사항
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5" />
                      <div>
                        <div className="font-medium text-yellow-800 text-sm">혈압 주의</div>
                        <div className="text-xs text-yellow-700">최근 3일간 평균보다 높음</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-start space-x-2">
                      <Calendar className="w-4 h-4 text-blue-600 mt-0.5" />
                      <div>
                        <div className="font-medium text-blue-800 text-sm">검진 예약</div>
                        <div className="text-xs text-blue-700">국가건강검진 예약 필요</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                      <div>
                        <div className="font-medium text-green-800 text-sm">보험금 지급</div>
                        <div className="text-xs text-green-700">85,000원 입금 완료</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Weekly Report */}
              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100">
                <CardContent className="p-4">
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">주간 건강 리포트</div>
                      <div className="text-sm text-gray-600">가족과 공유 준비됨</div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                      리포트 보기
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>

      {/* Floating Action Button */}
      <Button
        size="icon"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 hover:from-orange-500 hover:to-pink-500 shadow-lg lg:w-16 lg:h-16"
      >
        <Plus className="w-6 h-6 lg:w-7 lg:h-7" />
      </Button>
    </div>
  )
}
