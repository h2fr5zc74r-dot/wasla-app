'use client';
import React, { useState } from 'react';

export default function Home() {
  const [selectedService, setSelectedService] = useState('ركوب');
  const [pickup, setPickup] = useState('حي الزهراء');
  const [dropoff, setDropoff] = useState('طريق الملك فهد');
  const [tripRequested, setTripRequested] = useState(false);

  const services = [
    { id: 'ركوب', label: 'ركوب 🚕', fare: 12, est: '4 دقائق' },
    { id: 'طعام', label: 'طعام 🍔', fare: 15, est: '25 دقيقة' },
    { id: 'البقالة', label: 'البقالة 🛒', fare: 10, est: '15 دقيقة' },
    { id: 'سيارة أجرة', label: 'سيارة أجرة 🚘', fare: 20, est: '5 دقائق' },
    { id: 'ساعي', label: 'ساعي 📦', fare: 18, est: '30 دقيقة' },
    { id: 'الرعاية المنزلية', label: 'الرعاية المنزلية 🧰', fare: 50, est: '45 دقيقة' },
  ];

  const currentServiceObj = services.find((s) => s.id === selectedService) || services[0];

  const handleConfirmOrder = () => {
    setTripRequested(true);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F8FAFC', color: '#0F172A', fontFamily: 'system-ui, sans-serif', direction: 'rtl', padding: '16px' }}>
      
      {/* شريط الملاحة */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', backgroundColor: '#FFFFFF', padding: '12px 16px', borderRadius: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '36px', height: '36px', backgroundColor: '#2563EB', borderRadius: '8px', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '14px' }}>
            وصلة
          </div>
          <div>
            <h1 style={{ fontSize: '14px', fontWeight: 'bold', margin: 0 }}>وصلة WASLA</h1>
            <span style={{ fontSize: '11px', color: '#64748B' }}>الخدمة عند الطلب</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '6px' }}>
          <button style={{ padding: '6px 12px', borderRadius: '16px', border: '1px solid #E2E8F0', backgroundColor: '#FFF', fontSize: '12px' }}>مساعدة</button>
          <button style={{ padding: '6px 12px', borderRadius: '16px', border: 'none', backgroundColor: '#0F172A', color: '#FFF', fontSize: '12px', fontWeight: 'bold' }}>الملف الشخصي</button>
        </div>
      </header>

      {/* القسم الرئيسي */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px', margin: '0 auto' }}>
        
        {/* صندوق الخدمات والمواقع */}
        <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '20px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <span style={{ backgroundColor: '#EFF6FF', color: '#2563EB', padding: '4px 10px', borderRadius: '10px', fontSize: '11px', fontWeight: 'bold' }}>خريطة حية</span>
          <h2 style={{ fontSize: '20px', fontWeight: '800', marginTop: '10px', marginBottom: '16px' }}>احصل على مزود موثوق به في دقائق.</h2>

          {/* الأزرار الأفقية للخدمات */}
          <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '8px', marginBottom: '16px' }}>
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  setSelectedService(s.id);
                  setTripRequested(false);
                }}
                style={{
                  padding: '8px 14px',
                  borderRadius: '16px',
                  border: 'none',
                  backgroundColor: selectedService === s.id ? '#2563EB' : '#F1F5F9',
                  color: selectedService === s.id ? '#FFFFFF' : '#475569',
                  fontWeight: 'bold',
                  whiteSpace: 'nowrap',
                  fontSize: '13px',
                  cursor: 'pointer'
                }}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* حقول الإدخال للمواقع */}
          <div style={{ backgroundColor: '#F8FAFC', padding: '14px', borderRadius: '14px', border: '1px solid #E2E8F0', marginBottom: '16px' }}>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ fontSize: '11px', color: '#64748B', display: 'block', marginBottom: '4px' }}>📍 نقطة الالتقاط (من):</label>
              <input
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '13px', outline: 'none' }}
              />
            </div>
            <div>
              <label style={{ fontSize: '11px', color: '#64748B', display: 'block', marginBottom: '4px' }}>📍 نقطة الإنزال (إلى):</label>
              <input
                type="text"
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
                style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '13px', outline: 'none' }}
              />
            </div>
          </div>

          <button
            onClick={handleConfirmOrder}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '10px',
              border: 'none',
              backgroundColor: tripRequested ? '#10B981' : '#2563EB',
              color: '#FFF',
              fontSize: '15px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            {tripRequested ? 'تم تأكيد طلبك بنجاح ✓' : `تأكيد طلب (${selectedService}) - ${currentServiceObj.fare} SAR`}
          </button>
        </div>

        {/* بطاقة ملخص الرحلة والأسعار */}
        <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '20px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <div>
              <span style={{ fontSize: '11px', color: '#64748B' }}>ملخص الرحلة</span>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', margin: 0 }}>خدمة {selectedService}</h3>
            </div>
            <span style={{ backgroundColor: '#DCFCE7', color: '#15803D', padding: '2px 8px', borderRadius: '10px', fontSize: '11px', fontWeight: 'bold' }}>متاح الآن</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #F1F5F9', paddingBottom: '8px', fontSize: '13px', marginTop: '10px' }}>
            <span style={{ color: '#64748B' }}>الوقت التقديري (ETA)</span>
            <span style={{ fontWeight: 'bold' }}>{currentServiceObj.est}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', paddingTop: '8px', fontSize: '13px' }}>
            <span style={{ color: '#64748B' }}>التكلفة الإجمالية</span>
            <span style={{ fontWeight: 'bold', color: '#2563EB', fontSize: '16px' }}>{currentServiceObj.fare} SAR</span>
          </div>
        </div>

      </div>
    </div>
  );
}
