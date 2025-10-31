import React, { useState } from "react";
import StatCard from "./StatCard";

/* Replaced lucide-react with simple inline SVG icon components so the project doesn't require that dependency. */
const IconBase = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={className} aria-hidden>
    {children}
  </span>
);

const LeafIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <IconBase className={className}>
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M5 20c0-7 9-13 14-14-1 5-7 14-14 14z" />
      <path d="M12 3c0 0-2 3-1 6 1 3 4 4 4 4s3-6 2-9S12 3 12 3z" opacity="0.85" />
    </svg>
  </IconBase>
);

const UsersIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <IconBase className={className}>
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M16 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM8 11c1.657 0 3-1.343 3-3S9.657 5 8 5 5 6.343 5 8s1.343 3 3 3zM8 13c-2.667 0-8 1.333-8 4v2h18v-2c0-2.667-5.333-4-8-4zM16 13c-.667 0-2 .333-2 1v2h6v-2c0-.667-1.333-1-2-1z" />
    </svg>
  </IconBase>
);

const TrendingUpIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <IconBase className={className}>
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M3 17h2l4-6 3 3 7-9 2 2-9 11-3-3-4 6H3z" />
    </svg>
  </IconBase>
);

const VoteIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <IconBase className={className}>
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M21 7L9 19l-5-5 1.5-1.5L9 16l10.5-10.5L21 7z" />
    </svg>
  </IconBase>
);

const DollarSignIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <IconBase className={className}>
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 1v2c2.761 0 5 1.79 5 4s-2.239 4-5 4-5 1.79-5 4 2.239 4 5 4v2c-4.418 0-8-2.239-8-6s3.582-6 8-6 8-2.239 8-6-3.582-6-8-6z" />
    </svg>
  </IconBase>
);

const SettingsIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <IconBase className={className}>
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M19.14 12.936a7.98 7.98 0 000-1.872l2.036-1.58a.5.5 0 00.12-.63l-1.926-3.33a.5.5 0 00-.6-.22l-2.395.96a8.06 8.06 0 00-1.62-.94l-.36-2.54a.5.5 0 00-.5-.42h-3.852a.5.5 0 00-.5.42l-.36 2.54a8.06 8.06 0 00-1.62.94l-2.395-.96a.5.5 0 00-.6.22L2.7 8.854a.5.5 0 00.12.63l2.036 1.58a7.98 7.98 0 000 1.872L2.82 15.84a.5.5 0 00-.12.63l1.926 3.33c.13.22.42.32.66.22l2.395-.96c.5.36 1.05.66 1.62.94l.36 2.54c.06.28.3.42.5.42h3.852c.2 0 .44-.14.5-.42l.36-2.54c.57-.28 1.12-.58 1.62-.94l2.395.96c.24.1.52 0 .66-.22l1.926-3.33a.5.5 0 00-.12-.63l-2.04-1.58zM12 15.5A3.5 3.5 0 1112 8.5a3.5 3.5 0 010 7z" />
    </svg>
  </IconBase>
);

const GlobeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <IconBase className={className}>
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm4 12.9c-.1 1.3-.5 2.5-1.1 3.6L8.5 7.7c1.1-.6 2.3-1 3.6-1.1V14.9zM6.8 6.8L15.2 17c-1.1.6-2.3 1-3.6 1.1V6.8c1.3.1 2.5.5 3.6 1.1L6.8 17c.6-1.1 1-2.3 1.1-3.6V6.8z" />
    </svg>
  </IconBase>
);

const ActivityIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <IconBase className={className}>
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M3 12h3l2-6 4 12 3-8 3 4h3" />
    </svg>
  </IconBase>
);

const ClockIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <IconBase className={className}>
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 1a11 11 0 110 22 11 11 0 010-22zm1 6h-2v6l5 3 1-1-4-2V7z" />
    </svg>
  </IconBase>
);

// move initial data out (unchanged) and then inside the component use useState
const initialPods = [
    {
        id: 1,
        name: "Green Valley Commons",
        location: "Portland, OR",
        members: 42,
        deposited: 87500,
        yieldEarned: 4235.5,
        apy: 5.8,
        recentActivity: "Community garden funding approved",
    },
    {
        id: 2,
        name: "Solar Solidarity Network",
        location: "Barcelona, ES",
        members: 58,
        deposited: 126400,
        yieldEarned: 7156.8,
        apy: 6.2,
        recentActivity: "Solar panel installation vote passing",
    },
    {
        id: 3,
        name: "Mutual Aid Circle",
        location: "Austin, TX",
        members: 35,
        deposited: 62300,
        yieldEarned: 3421.2,
        apy: 5.5,
        recentActivity: "Healthcare fund distribution complete",
    },
];

const proposals = [
    {
        id: 1,
        title: "Fund Community Garden Expansion",
        type: "PodSpending",
        podId: 1,
        requestedAmount: 3500,
        forVotes: 32,
        againstVotes: 5,
        totalVotes: 42,
        endTime: "2 days",
    },
    {
        id: 2,
        title: "Install Solar Panels",
        type: "PodSpending",
        podId: 2,
        requestedAmount: 12000,
        forVotes: 48,
        againstVotes: 8,
        totalVotes: 58,
        endTime: "5 days",
    },
    {
        id: 3,
        title: "Use Collective Pool for Emergency Relief",
        type: "CollectiveSpending",
        podId: 0,
        requestedAmount: 5000,
        forVotes: 10,
        againstVotes: 2,
        totalVotes: 12,
        endTime: "3 days",
    },
];

const yieldStrategies = [
    { name: "Aave Lending", allocation: 70, apy: 5.5, tvl: 1993173 },
    { name: "Curve Stablecoin LP", allocation: 20, apy: 7.2, tvl: 569478 },
    { name: "Yearn Finance", allocation: 10, apy: 6.8, tvl: 284739 },
];

const BeaconDashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState("overview");
    const [pods, setPods] = useState(initialPods);

    const totalTVL = pods.reduce((sum, pod) => sum + pod.deposited, 0);
    const totalYieldGenerated = 156483.2;
    const collectivePool = (totalYieldGenerated * 0.15).toFixed(2);
    const protocolReserve = (totalYieldGenerated * 0.05).toFixed(2);

    const distributeYield = () => {
        setPods((prev) =>
            prev.map((pod) => ({
                ...pod,
                yieldEarned: pod.yieldEarned + ((pod.deposited / totalTVL) * totalYieldGenerated * 0.8),
            }))
        );
        alert("Yield distributed! 80% → Pods, 15% → Collective Pool, 5% → Protocol Reserve");
    };

    const OverviewTab = () => (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <StatCard label="Total Pods" value={pods.length} icon={<LeafIcon className="w-6 h-6 text-green-700" />} gradient="from-green-400 to-emerald-600" />
                <StatCard label="Total Members" value={pods.reduce((sum, p) => sum + p.members, 0)} icon={<UsersIcon className="w-6 h-6 text-cyan-700" />} gradient="from-blue-400 to-cyan-600" />
                <StatCard label="Total TVL" value={`$${totalTVL.toLocaleString()}`} icon={<DollarSignIcon className="w-6 h-6 text-yellow-700" />} gradient="from-yellow-400 to-orange-600" />
                <StatCard label="Yield Generated" value={`$${totalYieldGenerated.toLocaleString()}`} icon={<TrendingUpIcon className="w-6 h-6 text-purple-700" />} gradient="from-purple-400 to-pink-600" />
                <StatCard label="Collective Pool" value={`$${collectivePool}`} icon={<ActivityIcon className="w-6 h-6 text-indigo-700" />} gradient="from-indigo-400 to-blue-600" />
            </div>

            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border-2 border-green-200">
                <h2 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                    <ActivityIcon className="w-6 h-6" /> Active Yield Strategies
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
                                <GlobeIcon className="w-4 h-4" /> {pod.location}
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
                            <ActivityIcon className="w-4 h-4 inline mr-1" /> Recent: {pod.recentActivity}
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
                                <p className="text-emerald-700">
                                    {proposal.type} {proposal.requestedAmount > 0 && `• $${proposal.requestedAmount.toLocaleString()}`}
                                </p>
                            </div>
                            <div className="flex items-center gap-1 text-emerald-700">
                                <ClockIcon className="w-4 h-4" /> <span className="text-sm">{proposal.endTime} left</span>
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
            <header className="bg-white/10 backdrop-blur-md border-b border-white/20 px-6 py-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl font-bold flex items-center gap-3">
                        <LeafIcon className="w-10 h-10" /> Beacon Protocol
                    </h1>
                    <button className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all flex items-center gap-2">
                        <SettingsIcon className="w-5 h-5" /> Connect Wallet
                    </button>
                </div>
            </header>

            <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
                <div className="flex gap-1 px-6">
                    {[
                        { id: "overview", label: "Overview", icon: ActivityIcon },
                        { id: "pods", label: "Pods", icon: UsersIcon },
                        { id: "governance", label: "Governance", icon: VoteIcon },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-4 font-semibold transition-all flex items-center gap-2 ${activeTab === tab.id ? "bg-white/20 text-white border-b-4 border-green-400" : "text-emerald-100 hover:bg-white/10"
                                }`}
                        >
                            {/* render icon components dynamically */}
                            {React.createElement(tab.icon, { className: "w-5 h-5" })} {tab.label}
                        </button>
                    ))}
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-8">
                {activeTab === "overview" && <OverviewTab />}
                {activeTab === "pods" && <PodsTab />}
                {activeTab === "governance" && <GovernanceTab />}
            </main>
        </div>
    );
};

export default BeaconDashboard;
