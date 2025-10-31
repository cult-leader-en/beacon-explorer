import React from "react";

interface StatCardProps {
  icon?: React.ReactNode;
  label: string;
  value: React.ReactNode;
  gradient?: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, label, value, gradient }) => (
  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border-2 border-green-200 hover:scale-105 transition-transform text-black">
    <div className={`w-12 h-12 bg-gradient-to-br ${gradient ?? "from-gray-200 to-gray-300"} rounded-xl flex items-center justify-center mb-3`}>{icon}</div>
    <div className="text-sm text-emerald-600 mb-1">{label}</div>
    <div className="text-2xl font-bold text-emerald-900">{value}</div>
  </div>
);

export default StatCard;
