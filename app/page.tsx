'use client';
import React, { useState } from 'react';

export default function Home() {
  const [selectedService, setSelectedService] = useState('ركوب');
  const [pickup, setPickup] = useState('حي الزهراء');
  const [dropoff, setDropoff] = useState('طريق الملك فهد');
  const [isConfirmed, setIsConfirmed] = useState(false);
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
    setIsConfirmed(true);
    setTripRequested(true);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F8FAFC', color: '#0F172A', fontFamily: 'system-ui, -apple-system, sans-serif', direction: 'rtl', padding: '16px' }}>
      
      {/* شريط الملاحة العلوي */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', backgroundColor: '#FFFFFF', padding: '12px 20px', borderRadius: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '40px', height: '40px', backgroundColor: '#2563EB', borderRadius: '10px', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '18px' }}>
            وصلة
          </div>
          <div>
            <h1 style={{ fontSize: '16px', fontWeight: 'bold', margin: 0 }}>وصلة WASLA</h1>
            <span style={{ fontSize: '12px', color: '#64748B' }}>الخدمة عند الطلب</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid #E2E8F0', backgroundColor: '#FFF', cursor: 'pointer', fontSize: '14px' }}>مساعدة</button>
          <button style={{ padding: '8px 16px', borderRadius: '20px', border: 'none', backgroundColor: '#0F172A', color: '#FFF', cursor: 'pointer', fontSize: '14px', fontWeight: 'bold' }}>الملف الشخصي</button>
        </div>
      </header>

      {/* القسم الرئيسي للتطبيق */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* العمود الأيمن: الخيارات وتحديد المسار */}
        <div style={{ backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '24px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <span style={{ backgroundColor: '#EFF6FF', color: '#2563EB', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' }}>خريطة حية</span>
          <h2 style={{ fontSize: '24px', fontWeight: '800', marginTop: '12px', marginBottom: '20px', lineHeight: '1.3' }}>احصل على مزود موثوق به في دقائق.</h2>

          {/* قائمة أزرار الخدمات */}
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '12px', marginBottom: '20px' }}>
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  setSelectedService(s.id);
                  setTripRequested(false);
                }}
                style={{
                  padding: '10px 18px',
                  borderRadius: '20px',
                  border: 'none',
                  backgroundColor: selectedService === s.id ? '#2563EB' : '#F1F5F9',
                  color: selectedService === s.id ? '#FFFFFF' : '#475569',
                  fontWeight: 'bold',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* حقول إدخال نقطة الالتقاط والإنزال */}
          <div style={{ backgroundColor: '#F8FAFC', padding: '16px', borderRadius: '16px', border: '1px solid #E2E8F0', marginBottom: '20px' }}>
            <div style={{ marginBottom: '12px' }}>
              <label style={{ fontSize: '12px', color: '#64748B', display: 'block', marginBottom: '4px' }}>📍 نقطة الالتقاط (من):</label>
              <input
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '14px', outline: 'none' }}
              />
            </div>
            <div>
              <label style={{ fontSize: '12px', color: '#64748B', display: 'block', marginBottom: '4px' }}>📍 نقطة الإنزال (إلى):</label>
              <input
                type="text"
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
                style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '14px', outline: 'none' }}
              />
            </div>
          </div>

          <button
            onClick={handleConfirmOrder}
            style={{
              width: '100%',
              padding: '14px',
              borderRadius: '12px',
              border: 'none',
              backgroundColor: tripRequested ? '#10B981' : '#2563EB',
              color: '#FFF',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {tripRequested ? 'تم تأكيد طلبك بنجاح ✓' : `تأكيد طلب (${selectedService})`}
          </button>

          {/* بطاقات الإحصائيات السريعة */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginTop: '24px' }}>
            <div style={{ backgroundColor: '#0F172A', color: '#FFF', padding: '12px', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '16px', fontWeight: 'bold' }}>1.4K</div>
              <div style={{ fontSize: '10px', color: '#94A3B8' }}>رحلات اليوم</div>
            </div>
            <div style={{ backgroundColor: '#0F172A', color: '#FFF', padding: '12px', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{currentServiceObj.est}</div>
              <div style={{ fontSize: '10px', color: '#94A3B8' }}>متوسط ETA</div>
            </div>
            <div style={{ backgroundColor: '#0F172A', color: '#FFF', padding: '12px', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '16px', fontWeight: 'bold' }}>98%</div>
              <div style={{ fontSize: '10px', color: '#94A3B8' }}>نسبة الرضا</div>
            </div>
          </div>
        </div>

        {/* العمود الأيسر: ملخص الرحلة والأسعار والسائق المتاح */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          
