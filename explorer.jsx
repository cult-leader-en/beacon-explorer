import React, { useState } from "react";
import {
  Leaf,
  Users,
  TrendingUp,
  Vote,
  DollarSign,
  Settings,
  Globe,
  Activity,
  Clock,
  ArrowUpRight,
} from "lucide-react";

// --------------------
// MOCK DATA (simulate blockchain state)
// --------------------
const pods = [
  { id: 1, name: "Green Valley Commons", location: "Portland, OR", members: 42, deposited: 87500, yieldEarned: 4235.5, apy: 5.8, recentActivity: "Community garden funding approved" },
  { id: 2, name: "Solar Solidarity Network", location: "Barcelona, ES", members: 58, deposited: 126400, yieldEarned: 7156.8, apy: 6.2, recentActivity: "Solar panel installation vote passing" },
  { id: 3, name: "Mutual Aid Circle", location: "Austin, TX", members: 35, deposited: 62300, yieldEarned: 3421.2, apy: 5.5, recentActivity: "Healthcare fund distribution complete" },
];

const proposals = [
  { id: 1, title: "Fund Community Garden Expansion", type: "PodSpending", podId: 1, requestedAmount: 3500, forVotes: 32, againstVotes: 5, totalVotes: 42, endTime: "2 days" },
  { id: 2, title: "Install Solar Panels", type: "PodSpending", podId: 2, requestedAmount: 12000, forVotes: 48, againstVotes: 8, totalVotes: 58, endTime: "5 days" },
  { id: 3, title: "Use Collective Pool for Emergency Relief", type: "CollectiveSpending", podId: 0, requestedAmount: 5000, forVotes: 10, againstVotes: 2, totalVotes: 12, endTime: "3 days" },
];

const yieldStrategies = [
  { name: "Aave Lending", allocation: 70, apy: 5.5, tvl: 1993173 },
  { name: "Curve Stablecoin LP", allocation: 20, apy: 7.2, tvl: 569478 },
  { name: "Yearn Finance", allocation: 10, apy: 6.8, tvl: 284739 },
];

// Simulated totals
const totalYieldGenerated = 156483.2;
const totalTVL = pods.reduce((sum, pod) => sum + pod.deposited, 0);
let collectivePool = (totalYieldGenerated * 0.15).toFixed(2);
let protocolReserve = (totalYieldGenerated * 0.05).toFixed(2);

// --------------------
// COMPONENT
// --------------------
const BeaconDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // --------------------
  // Simulate yield distribution
  // --------------------
  const distributeYield = () => {
    pods.forEach((pod) => {
      pod.yieldEarned += ((pod.deposited / totalTVL) * totalYieldGenerated * 0.8);
    });
    collectivePool = (totalYieldGenerated * 0.15).toFixed(2);
    protocolReserve = (totalYieldGenerated * 0.05).toFixed(2);
    alert("Yield distributed! 80% → Pods, 15% → Collective Pool, 5% → Protocol Reserve");
  };

  // --------------------
  // Tabs
  // --------------------
  const OverviewTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <StatCard label="Total Pods" value={pods.length} icon={<Leaf />} gradient="from-green-400 to-emerald-600" />
        <StatCard label="Total Members" value={pods.reduce((sum, p) => sum + p.members, 0)} icon={<Users />} gradient="from-blue-400 to-cyan-600" />
        <StatCard label="Total TVL" value={`$${totalTVL.toLocaleString()}`} icon={<DollarSign />} gradient="from-yellow-400 to-orange-600" />
        <StatCard label="Yield Generated" value={`$${totalYieldGenerated.toLocaleString()}`} icon={<TrendingUp />} gradient="from-purple-400 to-pink-600" />
        <StatCard label="Collective Pool" value={`$${collectivePool}`} icon={<Activity />} gradient="from-indigo-400 to-blue-600" />
      </div>

      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border-2 border-green-200">
        <h2 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
          <Activity className="w-6 h-6" /> Active Yield Strategies
        </h2>
        <div className="space-y-3">
          {yieldStrategies.map((strategy, idx) => (
            <div key={idx} className="bg-gradient-to-r from-emerald-50 to-cyan-50 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-emerald-900">{strategy.name}</span>
                <span className="text-sm text-emerald-700">{strategy.allocation}% allocated</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-emerald-700">APY: {strategy.apy}%</span>
                <span className="text-emerald-700">TVL: ${strategy.tvl.toLocaleString()}</span>
              </div>
              <div className="mt-2 h-2 bg-emerald-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-emerald-600" style={{ width: `${strategy.allocation}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button onClick={distributeYield} className="mt-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
        Distribute Yield
      </button>
    </div>
  );

  const PodsTab = () => (
    <div className="space-y-4">
      {pods.map((pod) => (
        <div key={pod.id} className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border-2 border-green-200">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-emerald-900">{pod.name}</h3>
              <p className="text-emerald-700 flex items-center gap-1">
                <Globe className="w-4 h-4" /> {pod.location}
              </p>
            </div>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Active</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div>
              <div className="text-sm text-emerald-600">Members</div>
              <div className="text-lg font-bold text-emerald-900">{pod.members}</div>
            </div>
            <div>
              <div className="text-sm text-emerald-600">Deposited</div>
              <div className="text-lg font-bold text-emerald-900">${pod.deposited.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-sm text-emerald-600">Yield Earned</div>
              <div className="text-lg font-bold text-green-600">${pod.yieldEarned.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-sm text-emerald-600">APY</div>
              <div className="text-lg font-bold text-purple-600">{pod.apy}%</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg">
            <p className="text-sm text-emerald-700">
              <Activity className="w-4 h-4 inline mr-1" /> Recent: {pod.recentActivity}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  const GovernanceTab = () => (
    <div className="space-y-6">
      {proposals.map((proposal) => {
        const votePercentage = (proposal.forVotes / proposal.totalVotes) * 100;
        return (
          <div key={proposal.id} className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border-2 border-blue-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-emerald-900">{proposal.title}</h3>
                <p className="text-emerald-700">{proposal.type} {proposal.requestedAmount > 0 && `• $${proposal.requestedAmount.toLocaleString()}`}</p>
              </div>
              <div className="flex items-center gap-1 text-emerald-700">
                <Clock className="w-4 h-4" /> <span className="text-sm">{proposal.endTime} left</span>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-emerald-700">For: {proposal.forVotes} votes ({votePercentage.toFixed(1)}%)</span>
                  <span className="text-emerald-700">Against: {proposal.againstVotes} votes</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-emerald-600" style={{ width: `${votePercentage}%` }} />
                </div>
              </div>
              <div className="flex gap-2">
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all">Vote For</button>
                <button className="bg-gradient-to-r from-red-400 to-red-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all">Vote Against</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-700 to-cyan-600 text-white">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20 px-6 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold flex items-center gap-3">
            <Leaf className="w-10 h-10" /> Beacon Protocol
          </h1>
          <button className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all flex items-center gap-2">
            <Settings className="w-5 h-5" /> Connect Wallet
          </button>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="flex gap-1 px-6">
          {[
            { id: "overview", label: "Overview", icon: Activity },
            { id: "pods", label: "Pods", icon: Users },
            { id: "governance", label: "Governance", icon: Vote },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 font-semibold transition-all flex items-center gap-2 ${activeTab === tab.id ? "bg-white/20 text-white border-b-4 border-green-400" : "text-emerald-100 hover:bg-white/10"}`}
            >
              <tab.icon className="w-5 h-5" /> {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === "overview" && <OverviewTab />}
        {activeTab === "pods" && <PodsTab />}
        {activeTab === "governance" && <GovernanceTab />}
      </main>
    </div>
  );
};

// --------------------
// STAT CARD
// --------------------
const StatCard = ({ icon, label, value, gradient }) => (
  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border-2 border-green-200 hover:scale-105 transition-transform text-black">
    <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-3`}>{icon}</div>
    <div className="text-sm text-emerald-600 mb-1">{label}</div>
    <div className="text-2xl font-bold text-emerald-900">{value}</div>
  </div>
);

export default BeaconDashboard;
