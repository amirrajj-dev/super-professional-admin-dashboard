import { FiUsers } from "react-icons/fi";
import { IoIosStats } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { BsLightningCharge } from "react-icons/bs";
import { LuDollarSign } from "react-icons/lu";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaBox } from "react-icons/fa";
import { FaUsers, FaUserPlus, FaUserCheck, FaUserClock } from "react-icons/fa";
import {
  FaClipboardList,
  FaClock,
  FaCheckCircle,
  FaDollarSign,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaChartLine, FaPercentage, FaChartBar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export const overviewStats = [
  {
    id: 1,
    title: "مجموع فروش",
    icon: BsLightningCharge,
    amount: "12,000,000",
    color: "text-primary",
  },
  {
    id: 2,
    title: "تعداد محصولات",
    icon: FiShoppingBag,
    amount: "1,234",
    color: "text-secondary",
  },
  {
    id: 3,
    title: "کاربران جدید",
    icon: FiUsers,
    amount: "537",
    color: "text-error",
  },
  {
    id: 4,
    title: "نرخ تبدیل",
    icon: IoIosStats,
    amount: "20%",
    color: "text-success",
  },
];


export const ProductStats = [
  {
    id: 1,
    title: "تعداد محصولات",
    icon: FaBox,
    amount: "1234",
    color: "text-primary", 
  },
  {
    id: 2,
    title: "پرفروش ترین",
    icon: FiShoppingBag,
    amount: "89",
    color: "text-accent", 
  },
  {
    id: 3,
    title: "میزان ضرر",
    icon: FaArrowTrendDown,
    amount: "63,237 $",
    color: "text-error",
  },
  {
    id: 4,
    title: "کل درآمد",
    icon: LuDollarSign,
    amount: "535,000 $",
    color: "text-success", 
  },
];


export const categoryChartData = [
  { name: "دوره ها", value: 4500 },
  { name: "لباس ها", value: 3200 },
  { name: "لپ تاپ", value: 2800 },
  { name: "خانه و ویلا", value: 2100 },
  { name: "بقیه", value: 1900 },
];

export const saleChartData = [
  { name: "فرور", uv: 4000, sale: 2400 },
  { name: "ارد", uv: 3000, sale: 2600 },
  { name: "خرد", uv: 2000, sale: 3700 },
  { name: "تیر", uv: 2000, sale: 3100 },
  { name: "مرد", uv: 2000, sale: 5000 },
  { name: "شهر", uv: 2000, sale: 5600 },
  { name: "تیر", uv: 3490, sale: 4700 },
  { name: "مهر", uv: 3490, sale: 8200 },
  { name: "آبان", uv: 3490, sale: 6600 },
  { name: "آذر", uv: 3490, sale: 9000 },
  { name: "دی", uv: 2780, sale: 10008 },
  { name: "بهم", uv: 1890, sale: 11000 },
  { name: "اسف", uv: 2390, sale: 12800 },
];

export const products = [
  {
    name: "هدفون بلوتوث بی‌سیم t13 anc2",
    img: "https://media.currys.biz/i/currysprod/M10254905_black?$l-large$&fmt=auto",
    category: "الکترونیک",
    price: 79.99,
    stock: 120,
    sales: 340,
  },
  {
    name: "Asus تاف گیمینگ A15",
    img: "https://cdn.thewirecutter.com/wp-content/media/2023/11/laptops-2048px-8826.jpg?auto=webp&quality=75&crop=1.91:1&width=1200",
    category: "لپ تاپ",
    price: 1299.99,
    stock: 30,
    sales: 90,
  },
  {
    name: "کفش نایکی ایر فورس",
    img: "https://s3.amazonaws.com/www.irunfar.com/wp-content/uploads/2024/07/25054228/Best-Trail-Running-Shoes-Brooks-Cascadia-18.jpg",
    category: "کفش",
    price: 89.99,
    stock: 75,
    sales: 210,
  },
  {
    name: "اپل واچ سری 10",
    img: "https://m.media-amazon.com/images/I/71WoHCC996L._AC_UF894,1000_QL80_.jpg",
    category: "ساعت هوشمند",
    price: 199.99,
    stock: 50,
    sales: 130,
  },
];

export const userStats = [
  {
    id: 1,
    title: "کل کاربران",
    icon: FaUsers,
    iconColor: "text-primary",
    amount: "100,000",
  },
  {
    id: 2,
    title: "کاربران جدید",
    icon: FaUserPlus,
    iconColor: "text-success",
    amount: "500",
  },
  {
    id: 3,
    title: "کاربران فعال",
    icon: FaUserCheck,
    iconColor: "text-warning",
    amount: "75,500",
  },
  {
    id: 4,
    title: "کاربران از دست رفته",
    icon: FaUserClock,
    iconColor: "text-error",
    amount: "3,000",
  },
];

export const users = [
  {
    firstLetter: "A",
    name: "Ali Rezaei",
    email: "ali.rezaei@example.com",
    role: "Administrator",
    status: "Active",
  },
  {
    firstLetter: "B",
    name: "Bahareh Ghorbani",
    email: "bahareh.ghorbani@example.com",
    role: "Editor",
    status: "Inactive",
  },
  {
    firstLetter: "S",
    name: "Sara Khorrami",
    email: "sara.khorrami@example.com",
    role: "User",
    status: "Active",
  },
  {
    firstLetter: "M",
    name: "Mohammad Nouri",
    email: "mohammad.nouri@example.com",
    role: "Moderator",
    status: "Active",
  },
  {
    firstLetter: "T",
    name: "Tara Asadi",
    email: "tara.asadi@example.com",
    role: "User",
    status: "Inactive",
  },
];

export const userGrowthChartData = [
  { name: "فرور", growth: 1400 },
  { name: "ارد", growth: 1800 },
  { name: "خرد", growth: 2600 },
  { name: "تیر", growth: 3200 },
  { name: "مرد", growth: 3600 },
  { name: "شهر", growth: 4000 },
];

export const userDemoChartData = [
  { name: "18-24", value: 4500 },
  { name: "24-30", value: 3200 },
  { name: "30-36", value: 2800 },
  { name: "36-42", value: 2100 },
  { name: "42-48", value: 1900 },
];

export const userActivityChart = [
  {
    name: "شنبه",
    "4-8": 4000,
    "16-20": 2400,
    "8-12": 2400,
    "12-16": 2000,
    "0-4": 2000,
  },
  {
    name: "یکشنبه",
    "4-8": 3000,
    "16-20": 1398,
    "8-12": 2210,
    "12-16": 2500,
    "0-4": 2600,
  },
  {
    name: "دوشنبه",
    "4-8": 2000,
    "16-20": 9800,
    "8-12": 2290,
    "12-16": 2700,
    "0-4": 2900,
  },
  {
    name: "سه شنبه",
    "4-8": 2780,
    "16-20": 3908,
    "8-12": 2000,
    "12-16": 2600,
    "0-4": 3000,
  },
  {
    name: "چهارشنبه",
    "4-8": 1890,
    "16-20": 4800,
    "8-12": 2181,
    "12-16": 3500,
    "0-4": 3800,
  },
  {
    name: "پنجشنبه",
    "4-8": 2390,
    "16-20": 3800,
    "8-12": 2500,
    "12-16": 3700,
    "0-4": 5200,
  },
  {
    name: "جمعه",
    "4-8": 3490,
    "16-20": 4300,
    "8-12": 2100,
    "12-16": 3720,
    "0-4": 6000,
  },
];

export const salesStats = [
  {
    id: 1,
    title: "درآمد کل",
    icon: FaDollarSign,
    iconColor: "text-success",
    amount: "75,000,000",
  },
  {
    id: 2,
    title: "میانگین ارزش سفارش",
    icon: FaChartLine,
    amount: "200,000",
    iconColor: "text-primary",
  },
  {
    id: 3,
    title: "نرخ تبدیل",
    icon: FaPercentage,
    amount: "40%",
    iconColor: "text-warning",
  },
  {
    id: 4,
    title: "رشد فروش",
    icon: FaChartBar,
    iconColor: "text-secondary",
    amount: "7,000,000,00",
  },
];

export const salesDataThisMonth = [
  { name: "هفته اول", sales: 400 },
  { name: "هفته دوم", sales: 300 },
  { name: "هفته سوم", sales: 500 },
  { name: "هفته چهارم", sales: 600 },
];

export const salesDataNextMonth = [
  { name: "هفته اول", sales: 500 },
  { name: "هفته دوم", sales: 400 },
  { name: "هفته سوم", sales: 600 },
  { name: "هفته چهارم", sales: 700 },
];

export const salesDataPrevMonth = [
  { name: "هفته اول", sales: 300 },
  { name: "هفته دوم", sales: 200 },
  { name: "هفته سوم", sales: 400 },
  { name: "هفته چهارم", sales: 500 },
];

export const salesTrendData = [
  { day: "شنبه", amount: 1200 },
  { day: "یکشنبه", amount: 2100 },
  { day: "دوشنبه", amount: 800 },
  { day: "سه شنبه", amount: 1600 },
  { day: "چهارشنبه", amount: 900 },
  { day: "پنجشنبه", amount: 1700 },
  { day: "جمعه", amount: 1300 },
];

export const ordersStats = [
  {
    id: 1,
    title: "کل سفارشات",
    icon: FaClipboardList,
    color: "text-primary",
    amount: "20,450",
  },
  {
    id: 2,
    title: "سفارشات در انتظار",
    icon: FaClock,
    color: "text-warning",
    amount: "2,500",
  },
  {
    id: 3,
    title: "سفارشات تکمیل شده",
    icon: FaCheckCircle,
    color: "text-success",
    amount: "18,300",
  },
  {
    id: 4,
    title: "کل درآمد",
    icon: FaDollarSign,
    color: "text-error",
    amount: "25,000,000",
  },
];

export const orderDistributionData = [
  { name: "در انتظار", value: 4500 },
  { name: "در حال پردازش", value: 3200 },
  { name: "تحویل داده شده", value: 2800 },
  { name: "رد شده", value: 2100 },
];

export const dailyOrderData = [
  { date: "2024-12-01", orders: 120 },
  { date: "2024-12-02", orders: 150 },
  { date: "2024-12-03", orders: 100 },
  { date: "2024-12-04", orders: 200 },
  { date: "2024-12-05", orders: 80 },
  { date: "2024-12-06", orders: 170 },
  { date: "2024-12-07", orders: 130 },
];

export const orders = [
  {
    orderId: "ORD001",
    customer: "Ali Rezaei",
    total: "$120.00",
    status: "Pending",
    dateOfPurchase: "2024-12-01",
  },
  {
    orderId: "ORD002",
    customer: "Sara Khorrami",
    total: "$200.00",
    status: "Delivered",
    dateOfPurchase: "2024-12-02",
  },
  {
    orderId: "ORD003",
    customer: "Mohammad Nouri",
    total: "$150.00",
    status: "Skipped",
    dateOfPurchase: "2024-12-03",
  },
  {
    orderId: "ORD004",
    customer: "Bahareh Ghorbani",
    total: "$180.00",
    status: "Canceled",
    dateOfPurchase: "2024-12-04",
  },
  {
    orderId: "ORD005",
    customer: "Tara Asadi",
    total: "$220.00",
    status: "Delivered",
    dateOfPurchase: "2024-12-05",
  },
  {
    orderId: "ORD006",
    customer: "Reza Hamidi",
    total: "$75.00",
    status: "Pending",
    dateOfPurchase: "2024-12-06",
  },
  {
    orderId: "ORD007",
    customer: "Nadia Akbari",
    total: "$300.00",
    status: "Delivered",
    dateOfPurchase: "2024-12-07",
  },
];

export const analyticsData = [
  {
    id: 1,
    title: "درآمد",
    amount: "50,000,000",
    icon: FaDollarSign,
    isGrowing: true,
    growthAmount: "5%",
    color: "primary",
  },
  {
    id: 2,
    title: "کاربران",
    amount: "200,000",
    icon: FaUser,
    isGrowing: false,
    growthAmount: "2%",
    color: "primary",
  },
  {
    id: 3,
    title: "سفارشات",
    amount: "11,200",
    icon: FaClipboardList,
    isGrowing: true,
    growthAmount: "8%",
    color: "primary",
  },
  {
    id: 4,
    title: "بازدید صفحات",
    amount: "300,000",
    icon: FaChartLine,
    isGrowing: true,
    growthAmount: "10%",
    color: "primary",
  },
];

export const revenueTargetDataThisMonth = [
  { month: "فروردین", revenue: 5000, target: 7000 },
  { month: "اردیبهشت", revenue: 6000, target: 8000 },
  { month: "خرداد", revenue: 7000, target: 8500 },
  { month: "تیر", revenue: 7500, target: 9000 },
  { month: "مرداد", revenue: 8000, target: 9500 },
  { month: "شهریور", revenue: 8500, target: 10000 },
  { month: "مهر", revenue: 9000, target: 11000 },
  { month: "آبان", revenue: 9500, target: 11500 },
  { month: "آذر", revenue: 10000, target: 12000 },
  { month: "دی", revenue: 10500, target: 12500 },
  { month: "بهمن", revenue: 11000, target: 13000 },
  { month: "اسفند", revenue: 11500, target: 13500 },
];

export const revenueTargetDataLastMonth = [
  { month: "فروردین", revenue: 4800, target: 6800 },
  { month: "اردیبهشت", revenue: 5800, target: 7800 },
  { month: "خرداد", revenue: 6800, target: 8300 },
  { month: "تیر", revenue: 7300, target: 8800 },
  { month: "مرداد", revenue: 7800, target: 9300 },
  { month: "شهریور", revenue: 8300, target: 9800 },
  { month: "مهر", revenue: 8800, target: 10800 },
  { month: "آبان", revenue: 9300, target: 11300 },
  { month: "آذر", revenue: 9800, target: 11800 },
  { month: "دی", revenue: 10300, target: 12300 },
  { month: "بهمن", revenue: 10800, target: 12800 },
  { month: "اسفند", revenue: 11300, target: 13300 },
];

export const revenueTargetDataNextMonth = [
  { month: "فروردین", revenue: 5200, target: 7200 },
  { month: "اردیبهشت", revenue: 6200, target: 8200 },
  { month: "خرداد", revenue: 7200, target: 8700 },
  { month: "تیر", revenue: 7700, target: 9200 },
  { month: "مرداد", revenue: 8200, target: 9700 },
  { month: "شهریور", revenue: 8700, target: 10200 },
  { month: "مهر", revenue: 9200, target: 11200 },
  { month: "آبان", revenue: 9700, target: 11700 },
  { month: "آذر", revenue: 10200, target: 12200 },
  { month: "دی", revenue: 10700, target: 12700 },
  { month: "بهمن", revenue: 11200, target: 13200 },
  { month: "اسفند", revenue: 11700, target: 13700 },
];

export const productPerformanceChartData = [
  {
    name: "محصول 1",
    سود: 4000,
    فروش: 2400,
    درآمد: 2400,
  },
  {
    name: "محصول 2",
    سود: 3000,
    فروش: 1398,
    درآمد: 2210,
  },
  {
    name: "محصول 3",
    سود: 2000,
    فروش: 9800,
    درآمد: 2290,
  },
  {
    name: "محصول 4",
    سود: 2780,
    فروش: 3908,
    درآمد: 2000,
  },
  {
    name: "محصول 5",
    سود: 1890,
    فروش: 4800,
    درآمد: 2181,
  },
  {
    name: "محصول 6",
    سود: 2390,
    فروش: 3800,
    درآمد: 2500,
  },
  {
    name: "محصول 7",
    سود: 3490,
    فروش: 4300,
    درآمد: 2100,
  },
];

export const channelPerformanceData = [
  {
    name: "جستجوی پرداخت شده",
    value: 1500,
  },
  {
    name: "مستقیم",
    value: 2400,
  },
  {
    name: "ایمیل",
    value: 1200,
  },
  {
    name: "رسانه‌های اجتماعی",
    value: 1800,
  },
  {
    name: "جستجوی ارگانیک",
    value: 2200,
  },
  {
    name: "ارجاع",
    value: 900,
  },
];

export const userRetentionData = [
  { week: "هفته 1", amount: 100 },
  { week: "هفته 2", amount: 75 },
  { week: "هفته 3", amount: 70 },
  { week: "هفته 4", amount: 63 },
  { week: "هفته 5", amount: 54 },
  { week: "هفته 6", amount: 39 },
  { week: "هفته 7", amount: 26 },
];

export const connectedAccountsData = [
  { id: 1, icon: FcGoogle, status: "connected" },
  { id: 2, icon: FaSquareXTwitter, status: "connecte" },
  { id: 3, icon: FaFacebook, status: "connected" },
];
