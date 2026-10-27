import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import bmiImg from '../assets/bmi.png'

export default function Bmi() {
  const navigate = useNavigate()
  
  // สร้าง State สำหรับเก็บค่าน้ำหนัก, ส่วนสูง และผลลัพธ์
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmiResult, setBmiResult] = useState('0.00')

  // ฟังก์ชันคำนวณ BMI: น้ำหนัก (กก.) / (ส่วนสูงเป็นเมตรยกกำลังสอง)
  const handleCalculate = () => {
    const w = parseFloat(weight)
    const h = parseFloat(height) / 100 // แปลงจากเซนติเมตรเป็นเมตร

    if (w > 0 && h > 0) {
      const bmi = w / (h * h)
      setBmiResult(bmi.toFixed(2)) // แสดงผลทศนิยม 2 ตำแหน่ง
    } else {
      alert('กรุณากรอกน้ำหนักและส่วนสูงให้ถูกต้อง')
    }
  }

  // ฟังก์ชันรีเซ็ตข้อมูล
  const handleReset = () => {
    setWeight('')
    setHeight('')
    setBmiResult('0.00')
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa', padding: '40px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ background: '#fff', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', width: '450px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '4px' }}>BMI Calculator</h2>
        <p style={{ color: '#666', fontSize: '13px', marginBottom: '20px' }}>คำนวณ BMI</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <img src={bmiImg} alt="BMI" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
        </div>

        <div style={{ textAlign: 'left', marginBottom: '15px' }}>
          <label style={{ fontSize: '12px', color: '#333', display: 'block', marginBottom: '5px' }}>ป้อนน้ำหนัก (กิโลกรัม)</label>
          <input 
            type="number" 
            placeholder="เช่น 65" 
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px', boxSizing: 'border-box' }} 
          />
        </div>

        <div style={{ textAlign: 'left', marginBottom: '20px' }}>
          <label style={{ fontSize: '12px', color: '#333', display: 'block', marginBottom: '5px' }}>ป้อนส่วนสูง (เซนติเมตร)</label>
          <input 
            type="number" 
            placeholder="เช่น 170" 
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px', boxSizing: 'border-box' }} 
          />
        </div>

        {/* ผูกฟังก์ชันคำนวณเข้ากับปุ่ม */}
        <button 
          onClick={handleCalculate}
          style={{ width: '100%', background: '#2563eb', color: '#fff', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '10px' }}
        >
          คำนวณ BMI
        </button>

        {/* ผูกฟังก์ชันรีเซ็ตเข้ากับปุ่ม */}
        <button 
          onClick={handleReset}
          style={{ width: '100%', background: '#f3f4f6', color: '#333', border: 'none', padding: '10px', borderRadius: '6px', cursor: 'pointer', marginBottom: '20px' }}
        >
          รีเซ็ต
        </button>

        <div style={{ fontSize: '13px', color: '#333', marginBottom: '20px' }}>
          ค่า BMI ที่คำนวณได้: <span style={{ color: '#2563eb', fontWeight: 'bold' }}>{bmiResult}</span>
        </div>

        <button 
          onClick={() => navigate('/')}
          style={{ width: '100%', background: '#e5e7eb', color: '#333', border: 'none', padding: '10px', borderRadius: '20px', cursor: 'pointer', fontSize: '13px' }}
        >
          กลับหน้าหลัก
        </button>
      </div>
    </div>
  )
}