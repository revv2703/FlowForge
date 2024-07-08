import Category from '@/components/icons/category'
import Logs from '@/components/icons/clipboard'
import Templates from '@/components/icons/cloud_download'
import Home from '@/components/icons/home'
import Payment from '@/components/icons/payment'
import Settings from '@/components/icons/settings'
import Workflows from '@/components/icons/workflows'

export const clients = [...new Array(10)].map((client, index) => ({
  href: `/${index + 1}.png`,
}))

// update links and placeholder products
export const products = [
  {
    title: "Moonbeam",
    link: "gomoonbeam",
    thumbnail: "/p1.png",
  },
  {
    title: "Cursor",
    link: "cursor",
    thumbnail: "/p2.png",
  },
  {
    title: "Rogue",
    link: "userogue",
    thumbnail: "/p3.png",
  },

  {
    title: "Editorially",
    link: "editorially",
    thumbnail: "/p4.png",
  },
  {
    title: "Editrix AI",
    link: "editrix",
    thumbnail: "/p5.png",
  },
  {
    title: "Pixel Perfect",
    link: "app.pixelperfect",
    thumbnail: "/p6.png",
  },

  {
    title: "Algochurn",
    link: "algochurn",
    thumbnail: "/p1.png",
  },
  {
    title: "Aceternity UI",
    link: "aceternity",
    thumbnail: "/p2.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "tailwindmasterkit",
    thumbnail: "/p3.png",
  },
  {
    title: "SmartBridge",
    link: "smartbridgetech",
    thumbnail: "/p4.png",
  },
  {
    title: "Renderwork Studio",
    link: "renderwork",
    thumbnail: "/p5.png",
  },

  {
    title: "Creme Digital",
    link: "cremedigital",
    thumbnail: "/p6.png",
  },
  {
    title: "Golden Bells Academy",
    link: "goldenbellsacademy",
    thumbnail: "/p1.png",
  },
  {
    title: "Invoker Labs",
    link: "invoker",
    thumbnail: "/p2.png",
  },
  {
    title: "E Free Invoice",
    link: "efreeinvoice",
    thumbnail: "/p3.png",
  },
]

export const plans = [
  {
    title: "Hobby",
    price: "$0",
    features: ["3 free automations", "100 tasks per month", "2 step actions"],
    description: `Get a glimpse of what our software is capable of. Just a heads up ${"you'll"} never leave us after this!`,
  },
  {
    title: "Not Hobby",
    price: "$19",
    features: ["3 free automations", "100 tasks per month", "2 step actions"],
    description: `Get a glimpse of what our software is capable of. Just a heads up ${"you'll"} never leave us after this!`,
  },
  {
    title: "Definitely Not Hobby",
    price: "$99",
    features: ["3 free automations", "100 tasks per month", "2 step actions"],
    description: `Get a glimpse of what our software is capable of. Just a heads up ${"you'll"} never leave us after this!`,
  },
]


export const menuOptions = [
  { id: 1, name: 'Dashboard', Component: Home, href: '/dashboard' },
  { id: 2, name: 'Workflows', Component: Workflows, href: '/workflows' },
  { id: 3, name: 'Settings', Component: Settings, href: '/settings' },
  { id: 4, name: 'Connections', Component: Category, href: '/connections' },
  { id: 5, name: 'Billing', Component: Payment, href: '/billing' },
  { id: 6, name: 'Templates', Component: Templates, href: '/templates' },
  { id: 7, name: 'Logs', Component: Logs, href: '/logs' },
]
