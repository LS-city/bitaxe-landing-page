import React from 'react';
import { Zap, VolumeX, Wifi, ShieldCheck } from 'lucide-react';

export const AFFILIATE_LINK = "https://www.bitaxe.com/affiliate";

export const FEATURES = [
  {
    title: "Silent Operation",
    description: "No screaming fans. Bitaxe uses a high-efficiency heatsink and quiet fan, making it perfect for your desktop or living room.",
    icon: <VolumeX className="w-8 h-8 text-[#FF6B00]" />,
  },
  {
    title: "Ultra-Low Power",
    description: "Consuming only ~15 Watts, it costs pennies to run. Say goodbye to massive electricity bills associated with industrial ASICs.",
    icon: <Zap className="w-8 h-8 text-[#FF6B00]" />,
  },
  {
    title: "WiFi Connected",
    description: "No messy Ethernet cables required. The ESP32-S3 powered board connects directly to your home WiFi network.",
    icon: <Wifi className="w-8 h-8 text-[#FF6B00]" />,
  },
  {
    title: "Open Source",
    description: "Hardware and software are fully open-source. Verify, modify, and build it yourself if you want. True decentralization.",
    icon: <ShieldCheck className="w-8 h-8 text-[#FF6B00]" />,
  },
];

export const FAQS = [
  {
    question: "How much Bitcoin will I earn?",
    answer: "Bitaxe is a solo miner (lottery miner). You earn nothing unless you find a block, in which case you win the full block reward (currently 3.125 BTC + fees). It is a long-shot lottery ticket that runs 24/7."
  },
  {
    question: "Is it easy to set up?",
    answer: "Yes! Plug it in, connect to its WiFi hotspot to enter your home WiFi details and Bitcoin address, and you're mining in less than 5 minutes."
  },
  {
    question: "Does it need a computer to run?",
    answer: "No. It is a standalone device. Once configured, it runs entirely on its own using a standard USB-C power supply."
  },
  {
    question: "Why should I buy this if the odds are low?",
    answer: "It's about supporting the network, learning about mining technology, and having a non-zero chance of a life-changing payout without the industrial noise and heat."
  }
];
