import React, { useState } from "react";
import {
  DollarSign,
  ShoppingCart,
  Users,
  Package,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

/* ------------------------------------------------------------------ */
/*  DONNEES (a remplacer par les vraies donnees / API)                 */
/* ------------------------------------------------------------------ */
const KPIS = [
  {
    label: "Total Revenue",
    value: "$84,236",
    trend: "+18.2%",
    trendUp: true,
    icon: DollarSign,
    accent: "bg-violet-50 text-violet-500",
  },
  {
    label: "Orders",
    value: "2,348",
    trend: "+9.4%",
    trendUp: true,
    icon: ShoppingCart,
    accent: "bg-blue-50 text-blue-500",
  },
  {
    label: "New Customers",
    value: "621",
    trend: "-2.1%",
    trendUp: false,
    icon: Users,
    accent: "bg-amber-50 text-amber-500",
  },
  {
    label: "Products in Stock",
    value: "1,072",
    trend: "+4.6%",
    trendUp: true,
    icon: Package,
    accent: "bg-green-50 text-green-500",
  },
];

const REVENUE_DATA = [
  { month: "Jan", revenue: 32000, orders: 210 },
  { month: "Feb", revenue: 41000, orders: 260 },
  { month: "Mar", revenue: 38000, orders: 240 },
  { month: "Apr", revenue: 52000, orders: 310 },
  { month: "May", revenue: 47000, orders: 290 },
  { month: "Jun", revenue: 61000, orders: 350 },
  { month: "Jul", revenue: 58000, orders: 330 },
  { month: "Aug", revenue: 71000, orders: 400 },
  { month: "Sep", revenue: 66000, orders: 380 },
  { month: "Oct", revenue: 78000, orders: 420 },
  { month: "Nov", revenue: 84236, orders: 460 },
  { month: "Dec", revenue: 0, orders: 0 },
];

const CATEGORY_DATA = [
  { name: "Electronics", value: 42, color: "#8b5cf6" },
  { name: "Shoes", value: 24, color: "#22c55e" },
  { name: "Accessories", value: 19, color: "#f59e0b" },
  { name: "Others", value: 15, color: "#e5e7eb" },
];

const RECENT_ORDERS = [
  {
    id: "#38292",
    customer: "Sara El Amrani",
    avatar: "https://picsum.photos/seed/sara/40",
    product: "Apple iPad",
    amount: "$248.39",
    status: "Publish",
  },
  {
    id: "#38291",
    customer: "Youssef Bennani",
    avatar: "https://picsum.photos/seed/youssef/40",
    product: "Air Jordan",
    amount: "$125.00",
    status: "Inactive",
  },
  {
    id: "#38290",
    customer: "Nadia Ouazzani",
    avatar: "https://picsum.photos/seed/nadia/40",
    product: "Apple Watch Series 7",
    amount: "$799.00",
    status: "Scheduled",
  },
  {
    id: "#38289",
    customer: "Karim Fassi",
    avatar: "https://picsum.photos/seed/karim/40",
    product: "Canon EOS Rebel T7",
    amount: "$399.00",
    status: "Publish",
  },
];

const TOP_PRODUCTS = [
  {
    name: "Apple iPad",
    sales: 468,
    percent: 92,
    image: "https://picsum.photos/seed/ipad/40",
  },
  {
    name: "Amazon Fire TV",
    sales: 587,
    percent: 78,
    image: "https://picsum.photos/seed/firetv/40",
  },
  {
    name: "Air Jordan",
    sales: 942,
    percent: 65,
    image: "https://picsum.photos/seed/airjordan/40",
  },
  {
    name: "Apple Watch Series 7",
    sales: 851,
    percent: 54,
    image: "https://picsum.photos/seed/watch7/40",
  },
];

const STATUS_STYLES = {
  Inactive: "bg-red-100 text-red-500",
  Scheduled: "bg-amber-100 text-amber-600",
  Publish: "bg-green-100 text-green-600",
};

/* ------------------------------------------------------------------ */
/*  PETITS COMPOSANTS                                                  */
/* ------------------------------------------------------------------ */
function KpiCard({ label, value, trend, trendUp, icon: Icon, accent }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start justify-between hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200">
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-2xl font-semibold text-gray-800 mt-1.5">{value}</p>
        <div
          className={`inline-flex items-center gap-1 text-xs font-medium rounded px-1.5 py-0.5 mt-2 ${
            trendUp ? "bg-green-100 text-green-600" : "bg-red-100 text-red-500"
          }`}
        >
          {trendUp ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
          {trend}
        </div>
      </div>
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${accent}`}
      >
        <Icon size={20} />
      </div>
    </div>
  );
}

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-gray-900 text-white text-xs rounded-lg px-3 py-2 shadow-lg">
      <p className="text-gray-300 mb-0.5">{label}</p>
      <p className="font-semibold">${payload[0].value.toLocaleString()}</p>
    </div>
  );
}

function PeriodTabs({ value, onChange }) {
  const options = ["Week", "Month", "Year"];
  return (
    <div className="flex items-center gap-1 bg-gray-50 rounded-lg p-1">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
            value === opt
              ? "bg-white text-violet-600 shadow-sm"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                                */
/* ------------------------------------------------------------------ */
export default function DashboardAdmin() {
  const [period, setPeriod] = useState("Month");
  const totalCategory = CATEGORY_DATA.reduce((sum, c) => sum + c.value, 0);

  return (
    <div className="bg-gray-50 min-h-screen p-6 space-y-6">
      {/* Bandeau de bienvenue */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-600 to-violet-500 px-6 py-7 sm:px-8">
        <div className="absolute -right-10 -top-10 w-56 h-56 rounded-full bg-white/10" />
        <div className="absolute right-16 bottom-[-3rem] w-40 h-40 rounded-full bg-white/10" />
        <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-violet-100 text-xs font-medium bg-white/15 rounded-full px-3 py-1 mb-3">
              <Sparkles size={12} /> Welcome back
            </div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-white">
              Bonjour Seddik 👋
            </h1>
            <p className="text-violet-100 text-sm mt-1.5 max-w-md">
              Voici un aperçu de la performance de ta boutique aujourd'hui.
            </p>
          </div>
          <button className="self-start sm:self-auto bg-white text-violet-600 text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-violet-50 transition-colors shrink-0">
            View Report
          </button>
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {KPIS.map((k) => (
          <KpiCard key={k.label} {...k} />
        ))}
      </div>

      {/* Revenue chart + Category donut */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base font-semibold text-gray-800">
                Revenue Overview
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                Total revenue this {period.toLowerCase()}
              </p>
            </div>
            <PeriodTabs value={period} onChange={setPeriod} />
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={REVENUE_DATA}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: "#9ca3af" }}
                />
                <Tooltip
                  content={<ChartTooltip />}
                  cursor={{ stroke: "#e5e7eb", strokeWidth: 1 }}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#8b5cf6"
                  strokeWidth={2.5}
                  fill="url(#revenueFill)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col">
          <h2 className="text-base font-semibold text-gray-800 mb-1">
            Sales by Category
          </h2>
          <p className="text-xs text-gray-400 mb-4">Share of total sales</p>
          <div className="relative h-40 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={CATEGORY_DATA}
                  dataKey="value"
                  innerRadius={48}
                  outerRadius={68}
                  paddingAngle={3}
                  strokeWidth={0}
                >
                  {CATEGORY_DATA.map((c) => (
                    <Cell key={c.name} fill={c.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute flex flex-col items-center">
              <span className="text-xl font-semibold text-gray-800">
                {totalCategory}%
              </span>
              <span className="text-[11px] text-gray-400">Tracked</span>
            </div>
          </div>
          <div className="space-y-2.5 mt-4">
            {CATEGORY_DATA.map((c) => (
              <div
                key={c.name}
                className="flex items-center justify-between text-sm"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: c.color }}
                  />
                  <span className="text-gray-600">{c.name}</span>
                </div>
                <span className="text-gray-800 font-medium">{c.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent orders + Top products */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-5">
            <h2 className="text-base font-semibold text-gray-800">
              Recent Orders
            </h2>
            <button className="text-xs font-medium text-violet-500 hover:text-violet-600 transition-colors">
              View all
            </button>
          </div>
          <div className="divide-y divide-gray-100">
            {RECENT_ORDERS.map((o) => (
              <div
                key={o.id}
                className="flex items-center justify-between px-6 py-3.5 hover:bg-gray-50/60 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={o.avatar}
                    alt={o.customer}
                    className="w-9 h-9 rounded-full object-cover shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">
                      {o.customer}
                    </p>
                    <p className="text-xs text-gray-400 truncate">
                      {o.product} · {o.id}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span
                    className={`text-xs font-medium rounded-md px-2 py-1 ${STATUS_STYLES[o.status]}`}
                  >
                    {o.status}
                  </span>
                  <span className="text-sm text-gray-700 font-medium w-16 text-right">
                    {o.amount}
                  </span>
                  <button className="p-1.5 rounded hover:bg-gray-100 text-gray-400 transition-colors">
                    <MoreHorizontal size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-gray-800">
              Top Products
            </h2>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <ChevronDown size={16} />
            </button>
          </div>
          <div className="space-y-4">
            {TOP_PRODUCTS.map((p) => (
              <div key={p.name} className="flex items-center gap-3">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-9 h-9 rounded-lg object-cover bg-gray-100 shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm text-gray-700 truncate">{p.name}</p>
                    <span className="text-xs text-gray-400 shrink-0 ml-2">
                      {p.sales}
                    </span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-violet-500 rounded-full transition-all duration-500"
                      style={{ width: `${p.percent}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
