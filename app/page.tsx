'use client';
import React, { useState } from 'react';

export default function Home() {
  const [selectedService, setSelectedService] = useState('ركوب');
  const [pickup, setPickup] = useState('نجران');
  const [dropoff, setDropoff] = useState('شرورة');
  const [bookingStatus, setBookingStatus] = useState('idle'); // idle, searching, confirmed

  const services = [
    { id: 'ركوب', label: 'ركوب 🚕', fare: 25, est: '3 دقائق', driver: 'سعيد القحطاني', car: 'تويوتا كامري' },
    { id: 'طعام', label: 'طعام 🍔', fare: 15, est: '20 دقيقة', driver: 'محمد اليامي', car: 'توصيل طلبات' },
    { id: 'البقالة', label: 'البقالة 🛒', fare: 20, est: '15 دقيقة', driver: 'صالح الكربي', car: 'خدمة سريعة' },
    { id: 'سيارة أجرة', label: 'سيارة أجرة 🚘', fare: 35, est: '5 دقائق', driver: 'حسين آل سالم', car: 'هيونداي سوناتا' },
    { id: 'ساعي', label: 'ساعي 📦', fare: 30, est: '25 دقيقة', driver: 'عوض الصيعري', car: 'شحن وتوصيل' },
  ];

  const currentServiceObj = services.find((s) => s.id === selectedService) || services[0];

  const handleStartBooking = () => {
    setBookingStatus('searching');
    setTimeout(() => {
      setBookingStatus('confirmed');
    }, 2500);
  };

  const handleReset = () => {
    setBookingStatus('idle');
  };

  // رابط الخريطة التفاعلية الحقيقية يتحدث ديناميكياً حسب موقع الانطلاق
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(pickup + ' السعودية')}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F8FAFC', color: '#0F172A', fontFamily: 'system-ui, sans-serif', direction: 'rtl', padding: '16px' }}>
      
      {/* شريط الملاحة العلوي */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', backgroundColor: '#FFFFFF', padding: '12px 16px', borderRadius: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', maxWidth: '500px', margin: '0 auto 16px auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '36px', height: '36px', backgroundColor: '#2563EB', borderRadius: '8px', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '14px' }}>
            وصلة
          </div>
          <div>
            <h1 style={{ fontSize: '14px', fontWeight: 'bold', margin: 0 }}>وصلة WASLA</h1>
            <span style={{ fontSize: '11px', color: '#64748B' }}>الخدمة عند الطلب</span>
          </div>
        </div>
        <span style={{ padding: '6px 12px', borderRadius: '16px', backgroundColor: '#EFF6FF', color: '#2563EB', fontSize: '12px', fontWeight: 'bold' }}>نشط</span>
      </header>

      {/* محتوى التطبيق */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px', margin: '0 auto' }}>
        
        {/* الخريطة التفاعلية الحقيقية */}
        <div style={{ width: '100%', height: '220px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #E2E8F0' }}>
          <iframe
            title="خريطة الموقع"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            src={mapSrc}
          ></iframe>
        </div>

        {bookingStatus === 'idle' && (
          <>
            {/* واجهة اختيار الخدمات والمواقع */}
            <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '20px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <span style={{ backgroundColor: '#EFF6FF', color: '#2563EB', padding: '4px 10px', borderRadius: '10px', fontSize: '11px', fontWeight: 'bold' }}>احجز رحلتك</span>
              <h2 style={{ fontSize: '20px', fontWeight: '800', marginTop: '10px', marginBottom: '16px' }}>إلى أين تريد الذهاب اليوم؟</h2>

              {/* أزرار الخدمات */}
              <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '8px', marginBottom: '16px' }}>
                {services.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedService(s.id)}
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

              {/* حقول الإدخال للمناطق */}
              <div style={{ backgroundColor: '#F8FAFC', padding: '14px', borderRadius: '14px', border: '1px solid #E2E8F0', marginBottom: '16px' }}>
                <div style={{ marginBottom: '10px' }}>
                  <label style={{ fontSize: '11px', color: '#64748B', display: 'block', marginBottom: '4px' }}>📍 موقع الانطلاق (من - يتحدث على الخريطة):</label>
                  <input
                    type="text"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '13px', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '11px', color: '#64748B', display: 'block', marginBottom: '4px' }}>📍 وجهة الوصول (إلى):</label>
                  <input
                    type="text"
                    value={dropoff}
                    onChange={(e) => setDropoff(e.target.value)}
                    style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '13px', outline: 'none' }}
                  />
                </div>
              </div>

              <button
                onClick={handleStartBooking}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  border: 'none',
                  backgroundColor: '#2563EB',
                  color: '#FFF',
                  fontSize: '15px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                اطلب الآن ({currentServiceObj.fare} SAR)
              </button>
            </div>

            {/* تفاصيل التكلفة المقدرة */}
            <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '20px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <div>
                  <span style={{ fontSize: '11px', color: '#64748B' }}>تفاصيل الخدمة</span>
                  <h3 style={{ fontSize: '16px', fontWeight: 'bold', margin: 0 }}>{selectedService}</h3>
                </div>
                <span style={{ backgroundColor: '#DCFCE7', color: '#15803D', padding: '2px 8px', borderRadius: '10px', fontSize: '11px', fontWeight: 'bold' }}>متاح</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', borderBottom: '1px solid #F1F5F9', paddingBottom: '8px', marginTop: '10px' }}>
                <span style={{ color: '#64748B' }}>الوقت المتوقع للوصول</span>
                <span style={{ fontWeight: 'bold' }}>{currentServiceObj.est}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', paddingTop: '8px' }}>
                <span style={{ color: '#64748B' }}>السعر التقديري</span>
                <span style={{ fontWeight: 'bold', color: '#2563EB', fontSize: '16px' }}>{currentServiceObj.fare} SAR</span>
              </div>
            </div>
          </>
        )}

        {bookingStatus === 'searching' && (
          <div style={{ backgroundColor: '#FFFFFF', padding: '40px 20px', borderRadius: '20px', textAlign: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '36px', marginBottom: '16px' }}>🔄</div>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>جاري البحث عن أقرب مزود خدمة...</h3>
            <p style={{ fontSize: '13px', color: '#64748B' }}>الرجاء الانتظار قليلاً بينما نقوم بربطك بكابتن مناسب.</p>
          </div>
        )}

        {bookingStatus === 'confirmed' && (
          <div style={{ backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '20px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', textAlign: 'center' }}>
            <div style={{ width: '50px', height: '50px', backgroundColor: '#DCFCE7', color: '#15803D', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', margin: '0 auto 12px auto' }}>✓</div>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#15803D', marginBottom: '4px' }}>تم تأكيد الرحلة بنجاح!</h3>
            <p style={{ fontSize: '12px', color: '#64748B', marginBottom: '20px' }}>الكابتن في طريقه إليك الآن.</p>

            <div style={{ backgroundColor: '#F8FAFC', padding: '16px', borderRadius: '14px', textAlign: 'right', marginBottom: '20px', fontSize: '13px' }}>
              <p style={{ margin: '0 0 6px 0' }}>👤 <strong>اسم الكابتن:</strong> {currentServiceObj.driver}</p>
              <p style={{ margin: '0 0 6px 0' }}>🚗 <strong>المركبة:</strong> {currentServiceObj.car}</p>
              <p style={{ margin: '0 0 6px 0' }}>📍 <strong>من:</strong> {pickup}</p>
              <p style={{ margin: '0 0 6px 0' }}>📍 <strong>إلى:</strong> {dropoff}</p>
              <p style={{ margin: 0 }}>💰 <strong>المبلغ الإجمالي:</strong> {currentServiceObj.fare} SAR</p>
            </div>

            <button
              onClick={handleReset}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '10px',
                border: 'none',
                backgroundColor: '#0F172A',
                color: '#FFF',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              إلغاء أو طلب رحلة جديدة
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
