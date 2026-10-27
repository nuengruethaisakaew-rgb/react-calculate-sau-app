import React from 'react'
import CardMenu from '../components/CardMenu'
import calculateImg from '../assets/calculate.png'
import bmiImg from '../assets/bmi.png'
import bmrImg from '../assets/bmr.png'
import carImg from '../assets/car.png'

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa', padding: '30px 20px', fontFamily: 'sans-serif' }}>
      
      {/* ส่วนหัวข้อและโลโก้หลักด้านบน */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginBottom: '25px' }}>
        <img 
          src={calculateImg} 
          alt="Calculate Logo" 
          style={{ width: '65px', height: '65px', marginBottom: '10px', objectFit: 'contain' }} 
        />
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e3a8a', margin: '0 0 3px 0' }}>
          เครื่องมือคำนวณออนไลน์
        </h1>
        {/* ปรับสีตรงนี้เป็นสีน้ำเงินอ่อน (Hex: #60a5fa หรือ #3b82f6) */}
        <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#60a5fa', margin: '0 0 8px 0' }}>
          Calculate Tools Online
        </h3>
        <p style={{ color: '#6b7280', fontSize: '13px', margin: 0 }}>
          เลือกการคำนวณที่คุณต้องการจากเมนูด้านล่าง
        </p>
      </div>

      {/* ส่วนการ์ดเมนูทั้ง 3 อัน */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap', maxWidth: '1000px', margin: '0 auto 25px auto' }}>
        <CardMenu 
          image={bmiImg}
          title="BMI (ดัชนีมวลกาย)"
          description="คำนวณว่าน้ำหนักของคุณเหมาะสมกับส่วนสูงหรือไม่"
          path="/bmi"
        />
        <CardMenu 
          image={bmrImg}
          title="BMR (อัตราการเผาผลาญ)"
          description="คำนวณพลังงานขั้นต่ำที่ร่างกายต้องการในแต่ละวัน"
          path="/bmr"
        />
        <CardMenu 
          image={carImg}
          title="การผ่อนชำระรถยนต์"
          description="คำนวณยอดผ่อนต่อเดือนและดอกเบี้ยรถยนต์"
          path="/car"
        />
      </div>

      {/* ส่วนข้อความลิขสิทธิ์อยู่ด้านล่างการ์ด */}
      <div style={{ textAlign: 'center', paddingBottom: '20px' }}>
        <span style={{ fontSize: '12px', color: '#9ca3af' }}>
          © 2024 Calculate Tools Online. All rights reserved. Created by NuengruethaiS SAU.
        </span>
      </div>

    </div>
  )
}