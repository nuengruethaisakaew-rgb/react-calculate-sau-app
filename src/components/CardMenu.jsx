import React from 'react'
import { useNavigate } from 'react-router'

export default function CardMenu({ image, title, description, path }) {
  const navigate = useNavigate()

  return (
    <div 
      onClick={() => navigate(path)}
      style={{
        background: '#fff',
        borderRadius: '16px',
        padding: '30px 15px',
        width: '320px', // ขยายความกว้างการ์ดขึ้นจาก 300px เป็น 320px
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
        cursor: 'pointer',
        textAlign: 'center',
        transition: 'transform 0.2s, box-shadow 0.2s',
        border: '1px solid #f0f0f0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)'
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)'
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'
      }}
    >
      <div style={{ width: '90px', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
        <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <h3 style={{ fontSize: '17px', fontWeight: 'bold', marginBottom: '10px', color: '#111' }}>{title}</h3>
      {/* ปรับขนาดตัวอักษรคำอธิบายลงนิดหน่อยเพื่อให้ข้อความไม่ตกบรรทัด */}
      <p style={{ fontSize: '12px', color: '#666', lineHeight: '1.4', margin: 0, whiteSpace: 'nowrap' }}>
        {description}
      </p>
    </div>
  )
}