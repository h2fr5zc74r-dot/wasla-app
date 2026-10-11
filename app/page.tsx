'use client';
import React, { useState } from 'react';

export default function Home() {
  const [selectedService, setSelectedService] = useState('ركوب');
  const [pickup, setPickup] = useState('حي الزهراء');
  const [dropoff, setDropoff] = useState('طريق الملك فهد');
  const [isConfirmed, setIsConfirmed] = useState(false);

  const services = [
    { id: 'ركوب', label: 'ركوب 🚕' },
    { id: 'طعام', label: 'طعام 🍔' },
    { id: 'البقالة', label: 'البقالة 🛒' },
    { id: 'سيارة أجرة', label: 'سيارة أجرة 🚘' },
    { id: 'ساعي', label: 'ساعي 📦' },
    { id: 'الرعاية المنزلية', label: 'الرعاية المنزلية 🧰' },
  ];

  const handleConfirm = () => {
    setIsConfirmed(true);
    alert(`تم تأكيد طلب (${selectedService}) من ${pickup} إلى ${dropoff}!`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', direction: 'rtl', maxWidth: '500px', margin: '0 auto', minHeight: '100vh', backgroundColor: '#fff' }}>
      <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px' }}>وصلة - الخدمة عند الطلب</h2>
      
      {/* أزرار الخدمات التفاعلية */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => {
              setSelectedService(service.id);
              setIsConfirmed(false);
            }}
            style={{
              padding: '10px 16px',
              borderRadius: '20px',
              border: 'none',
              backgroundColor: selectedService === service.id ? '#0052FF' : '#F3F4F6',
              color: selectedService === service.id ? '#FFFFFF' : '#1F2937',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            {service.label}
          </button>
        ))}
      </div>

      {/* تفاصيل الموقع والتأكيد */}
      <div style={{ background: '#F9FAFB', padding: '16px', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
        <p style={{ marginBottom: '8px' }}>الخدمة المحددة: <strong>{selectedService}</strong></p>
        <p style={{ marginBottom: '8px' }}>الالتقاط: 📍 {pickup}</p>
        <p style={{ marginBottom: '16px' }}>الإنزال: 📍 {dropoff}</p>

        <button
          onClick={handleConfirm}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: isConfirmed ? '#10B981' : '#0052FF',
            color: '#FFF',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          {isConfirmed ? 'تم التأكيد ✓' : 'تأكيد الطلب'}
        </button>
      </div>
    </div>
  );
}
