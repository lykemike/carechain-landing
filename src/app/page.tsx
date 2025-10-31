import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";
import {
  Lock,
  Archive,
  CheckCheck,
  KeyRound,
  Database,
  ShieldCheck,
  FileCheck2,
  Building2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type FeatureItem = {
  id: string;
  title: string;
  description: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
};

const SOLANA_STATS = [
  { value: "<1s", label: "Transaction Finality" },
  { value: "65K+", label: "Transactions / Second" },
  { value: "$0.00025", label: "Avg. Transaction Cost" },
  { value: "100%", label: "Immutability" },
];

const FEATURES: FeatureItem[] = [
  {
    id: "secure-on-chain-verification",
    title: "On-Chain Verification",
    description:
      "Each medical record is permanently verifiable on Solana's blockchain, ensuring authenticity, tamper resistance, and transparent auditability.",
    Icon: Lock,
  },
  {
    id: "encrypted-medical-bundles",
    title: "Encrypted Record Bundles",
    description:
      "Medical data is packaged into encrypted ZIP bundles containing structured metadata and attached files, enabling secure, portable, and interoperable sharing across institutions.",
    Icon: Archive,
  },
  {
    id: "hospital-patient-co-sign",
    title: "Hospital-Patient Co-Sign",
    description:
      "Records are validated through dual signatures — one from the hospital and one from the patient — establishing undeniable proof of authenticity and consent on-chain.",
    Icon: CheckCheck,
  },
  {
    id: "granular-access-grants",
    title: "Granular Access Control",
    description:
      "Patients retain full control over their data, granting and revoking permissions for hospitals or doctors at any time with cryptographically enforced policies.",
    Icon: KeyRound,
  },
  {
    id: "off-chain-indexing",
    title: "Off-Chain Indexing",
    description:
      "Supabase provides efficient off-chain indexing and querying of encrypted record metadata, optimizing retrieval speed while maintaining data privacy.",
    Icon: Database,
  },
  {
    id: "zero-trust-architecture",
    title: "Zero-Trust Infrastructure",
    description:
      "Built on cryptographic principles, CareChain operates without centralized trust — every verification, signature, and access request is provable and independently verifiable.",
    Icon: ShieldCheck,
  },
];

const CARECHAIN_STEPS = [
  {
    id: 1,
    title: "Hospital Onboards",
    description:
      "Medical facilities register on the CareChain network with verified credentials.",
    Icon: Building2,
  },
  {
    id: 2,
    title: "Doctor Issues Records",
    description:
      "Authorized physicians create and co-sign encrypted medical records.",
    Icon: FileCheck2,
  },
  {
    id: 3,
    title: "Patient Owns Key",
    description:
      "Patients receive cryptographic keys for complete record ownership.",
    Icon: KeyRound,
  },
  {
    id: 4,
    title: "Cross-Hospital Verification",
    description:
      "Any authorized facility can verify and access records with patient consent.",
    Icon: ShieldCheck,
  },
];

export default function Home() {
  return (
    <main className="scroll-smooth">
      {/* Hero Section */}
      <header
        className="min-h-screen flex justify-center items-center flex-col gap-y-5 text-center"
        id="Vision"
      >
        <div className="uppercase font-bold text-6xl">
          Revolutionizing <br />
          Global Healthcare
          <br />
          Infrastructure
        </div>
        <div className="text-lg text-muted-foreground">
          A unified, blockchain-based medical record network connecting <br />
          hospitals worldwide.
        </div>
        <div className="flex gap-x-5 max-w-md min-w-md">
          <Button variant={"outline"} className="flex-1">
            <Link href="https://carechain-portal-six.vercel.app">
              Request Access
            </Link>
          </Button>

          <Button variant={"outline"} className="flex-1">
            Learn More
          </Button>
        </div>
      </header>

      {/* Vision Section */}
      <section
        className="min-h-screen flex max-w-3xl min-w-3xl mx-auto space-x-40 justify-center items-center"
        id="Features"
      >
        <div>
          <div className="text-4xl font-bold">
            <TextAnimate animation="blurIn" as="h1">
              THE
            </TextAnimate>
            <TextAnimate animation="blurIn" as="h1">
              PROBLEM
            </TextAnimate>
          </div>
          <div className="mt-5 text-muted-foreground">
            <TextAnimate animation="blurIn" as="h1">
              Today, hospitals worldwide run isolated systems. Patients must
              physically return to their original hospital just to retrieve and
              share medical records with other facilities.
            </TextAnimate>
          </div>
        </div>
        <div>
          <div className="text-4xl font-bold ">
            <TextAnimate animation="blurIn" as="h1">
              THE
            </TextAnimate>
            <TextAnimate animation="blurIn" as="h1">
              SOLUTION
            </TextAnimate>
          </div>
          <div className="mt-5 text-muted-foreground">
            <TextAnimate animation="blurIn" as="h1">
              CareChain creates a unified ecosystem where medical records move
              with patients, not locations. Cryptographic verification ensures
              data integrity while patients maintain complete ownership through
              secure key-based access.
            </TextAnimate>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        className="min-h-screen max-w-[1400px] mx-auto flex items-center flex-col justify-center"
        id="Platform"
      >
        <div className="space-y-10 text-center">
          <h1 className="text-4xl font-bold">How it Works.</h1>
          <p className="text-muted-foreground">
            A streamlined process ensuring security, ownership, and
            interoperability
          </p>

          <div className="grid grid-cols-4 gap-6 text-start ">
            {CARECHAIN_STEPS.map((step) => (
              <div
                key={step.id}
                className=" p-5
                 transition-all 
                
                 outline outline-border/30 hover:outline-border/60"
              >
                <div className="mb-4  hover:bg-card/40 border w-fit p-2">
                  <step.Icon className="w-10 h-10 " />
                </div>
                {/* replace with <Image /> or icon */}
                <h3 className="text-lg font-bold">Step {step.id}</h3>
                <h2 className="text-xl font-semibold mt-2">{step.title}</h2>
                <p className="text-sm text-muted-foreground mt-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section
        className="max-w-[1400px] mx-auto min-h-screen items-center my-10 space-y-10"
        id="Technology"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold">Core Features</h1>
          <p className="text-muted-foreground">What to expect?</p>
        </div>
        <div className="grid grid-cols-3 ">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="h-[80vh] flex justify-center flex-col items-center gap-y-10 p-5 
                 relative transition-all 
                 hover:bg-card/40 
                 outline outline-border/30 hover:outline-border/60"
            >
              <div className="text-muted-foreground">
                <feature.Icon size={200} />
              </div>
              <div className="text-center">
                <h1 className="font-bold text-4xl">{feature.title}</h1>
                <p className="text-muted-foreground mt-5 max-w-[480px] mx-auto leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Solana Section */}
      <section
        className="min-h-screen flex max-w-6xl mx-auto justify-between items-center px-10 py-20"
        id=""
      >
        {/* LEFT: Content */}
        <div className="space-y-6 max-w-md">
          <h1 className="text-5xl font-bold flex items-center gap-3">
            Built on
            <Image
              src="/solanaLogo.png"
              alt="Solana Logo"
              width={200}
              height={80}
              className="inline-block"
            />
          </h1>

          <p className="text-muted-foreground ">
            CareChain leverages Solana&apos;s high-performance blockchain to
            achieve sub-second transaction finality, verifiable record
            integrity, and cryptographic guarantees at scale ensuring healthcare
            data remains fast, secure, and immutable.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-6">
            {SOLANA_STATS.map((stat) => (
              <div key={stat.label}>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-[#9945FF] to-[#14F195] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(153,69,255,0.4)]">
                  {stat.value}
                </h2>

                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Code Block */}
        <div className="relative group">
          {/* Outer Solana Glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#9945FF]/50 to-[#14F195]/50 blur-3xl opacity-80 group-hover:opacity-100 transition-opacity" />

          <pre className="relative font-mono text-base bg-[#0A0A0A]/95 rounded-2xl p-8 min-h-[28rem] border border-[#2a2a2a] backdrop-blur-md text-gray-100 leading-relaxed tracking-wide shadow-[0_0_25px_rgba(153,69,255,0.2)]">
            <code>
              <span className="text-[#14F195] font-semibold">fn</span>{" "}
              verify_record(
              <br />
              &nbsp;&nbsp;record_hash:{" "}
              <span className="text-[#9945FF] font-medium">&amp;str</span>,
              <br />
              &nbsp;&nbsp;signature:{" "}
              <span className="text-[#9945FF] font-medium">&amp;Signature</span>
              <br />) -&gt;{" "}
              <span className="text-[#14F195] font-semibold">Result</span>
              &lt;<span className="text-[#9945FF] font-medium">
                bool
              </span>&gt; {"{"}
              <br />
              &nbsp;&nbsp;
              <span className="text-[#14F195] font-semibold">let</span> account
              = fetch_onchain_data(
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;record_hash
              <br />
              &nbsp;&nbsp;)?;
              <br />
              &nbsp;&nbsp;
              <span className="text-[#14F195] font-semibold">
                verify_signature
              </span>
              (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;account.data,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;signature
              <br />
              &nbsp;&nbsp;)
              <br />
              {"}"}
            </code>
          </pre>
        </div>
      </section>
    </main>
  );
}
