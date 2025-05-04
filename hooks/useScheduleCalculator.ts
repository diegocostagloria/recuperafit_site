'use client';

import { useState, useEffect } from 'react';

export default function ScheduleCalculator() {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [expressDelivery, setExpressDelivery] = useState(false);
  const [technicalGuidance, setTechnicalGuidance] = useState(false);
  const [total, setTotal] = useState(0);

  const planPrices = {
    daily: 150,
    weekend: 350,
    weekly: 650,
    monthly: 1800
  };

  useEffect(() => {
    let calculatedTotal = 0;
    
    // Add plan price
    if (selectedPlan) {
      calculatedTotal += planPrices[selectedPlan];
    }
    
    // Add extras
    if (expressDelivery) {
      calculatedTotal += 50;
    }
    
    if (technicalGuidance) {
      calculatedTotal += 100;
    }
    
    setTotal(calculatedTotal);
  }, [selectedPlan, expressDelivery, technicalGuidance]);

  return {
    selectedPlan,
    setSelectedPlan,
    expressDelivery,
    setExpressDelivery,
    technicalGuidance,
    setTechnicalGuidance,
    total,
    planPrices
  };
}
