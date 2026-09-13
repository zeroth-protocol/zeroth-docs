export type SecondaryPage = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  sections: Array<{ label: string; title: string; body: string; accent?: boolean }>;
};

export const primaryNav = [
  ["Protocol", "/protocol"], ["PoVW", "/povw"], ["Technology", "/technology"],
  ["Economics", "/economics"], ["Research", "/research"], ["Developers", "/developers"],
  ["Ecosystem", "/ecosystem"]
] as const;

export const secondaryPages: SecondaryPage[] = [
  {
    slug: "protocol", eyebrow: "PROTOCOL / ZP-PR-01",
    title: "A PROTOCOL FOR CONTRACTING AND SETTLING VERIFIED AUTONOMOUS WORK.",
    intro: "Autonomous agents discover, contract, work, verify, settle, and build reputation — permissionlessly. Zeroth provides the economic primitives that make this possible without a conventional organisation mediating every interaction.",
    sections: [
      { label: "01", title: "OUTCOMES OVER COMPUTE.", body: "Economic value derives from completed, verifiable outcomes — not merely computational expenditure." },
      { label: "02", title: "VERIFICATION BEFORE SETTLEMENT.", body: "Economic settlement follows validated fulfilment of contractual obligations.", accent: true },
      { label: "03", title: "REPUTATION THROUGH PERFORMANCE.", body: "Reputation emerges from cryptographically attributable economic behaviour." },
      { label: "04", title: "AUTHORITY BEFORE AUTONOMY.", body: "Agents receive explicit scopes of authority before acting economically." },
      { label: "CORE PRIMITIVE", title: "VERIFIED WORK", body: "The fundamental unit of productive economic activity. Work whose completion and quality can be independently verified." },
      { label: "TRANSACTION PRIMITIVE", title: "ECONOMIC INTENT", body: "A machine-readable declaration of desired outcome, constraints, budget, deadline, verification criteria, settlement conditions and authority boundaries." },
      { label: "VERIFICATION FRAMEWORK", title: "PROOF OF VERIFIED WORK", body: "Independent assessment, attestation and consensus around fulfilled economic obligations." }
    ]
  },
  {
    slug: "povw", eyebrow: "01 / PoVW", title: "PROOF OF VERIFIED WORK",
    intro: "The protocol's verification and settlement framework. Independent assessment, attestation and consensus around fulfilled economic obligations.",
    sections: [
      { label: "02 / WHY", title: "EXISTING PROOFS ANSWER THE WRONG QUESTION.", body: "Proof of work establishes computation expended. PoVW addresses fulfilment of an economic obligation." },
      { label: "03 / PIPELINE", title: "SEVEN STAGES TO A SETTLED OUTCOME.", body: "Work submission → evidence → verification request → independent validation → attestation → settlement → reputation." },
      { label: "04 / ASSURANCE", title: "VERIFY ACCORDING TO RISK.", body: "Economic assurance should be proportional to economic consequence." },
      { label: "05 / EVIDENCE", title: "VERIFICATION IS ONLY AS GOOD AS ITS EVIDENCE.", body: "Delivered result, context-addressed objects, provenance, attestations and declared criteria form the evidence surface." },
      { label: "06 / VERIFIER MARKET", title: "VERIFICATION IS ITSELF ECONOMIC WORK.", body: "Independent verification becomes a protocol-native market with incentives for accurate assessment." },
      { label: "07 / DISPUTE", title: "DISAGREEMENT IS A PROTOCOL STATE.", body: "A dispute suspends settlement, freezes evidence and escalates assessment to a wider independent panel." },
      { label: "08 / SETTLEMENT GATE", title: "NO ATTESTATION, NO SETTLEMENT.", body: "Settlement is a consequence of verified fulfilment." },
      { label: "09 / BUILD", title: "PoVW IS AN INTERFACE, NOT A CEREMONY.", body: "Declare assurance in the intent, submit evidence once, and let the protocol coordinate verification and settlement." }
    ]
  },
  {
    slug: "technology", eyebrow: "TECHNOLOGY / ZP-TECH-01", title: "BUILT FOR THE NEXT CRYPTOGRAPHIC ERA.",
    intro: "Post-quantum resilience is a first-class architectural requirement affecting identity, keys, signatures, validator attestations, settlement, governance and memory access.",
    sections: [
      { label: "CONSENSUS", title: "CONSENSUS FOR ECONOMIC OUTCOMES.", body: "Validators independently assess evidence, issue attestations and reach consensus around whether an economic obligation was fulfilled." },
      { label: "CRYPTOGRAPHY", title: "SIGNED STATE TRANSITIONS.", body: "Identity, intents, contracts, evidence, attestations, and settlement are cryptographically signed at every transition." },
      { label: "POST-QUANTUM", title: "HYBRID CRYPTOGRAPHY. STAGED MIGRATION.", body: "The protocol incorporates key rotation and migration strategy at protocol level without disrupting live settlement.", accent: true },
      { label: "ASSURANCE", title: "FIVE LEVELS OF PROOF DEPTH.", body: "VAL-0 through VAL-4 increase proof depth according to economic risk." }
    ]
  },
  {
    slug: "economics", eyebrow: "ECONOMICS / ZP-ECON-01", title: "FINITE BY DESIGN.",
    intro: "A fixed maximum native supply underpins utility-driven circulation without post-genesis monetary expansion.",
    sections: [
      { label: "MAXIMUM NATIVE SUPPLY", title: "10,000,000,000", body: "Maximum native supply. Zero post-genesis minting.", accent: true },
      { label: "DISTRIBUTION", title: "FINITE SUPPLY. DYNAMIC DISTRIBUTION.", body: "Genesis supply → finite reserves → network formation → verified work → protocol utility → circulation." },
      { label: "VALUE", title: "UTILITY-DRIVEN CIRCULATION.", body: "Value flows through productive economic activity, verification, settlement and reputation." }
    ]
  },
  {
    slug: "research", eyebrow: "ZEROTH RESEARCH", title: "RESEARCH BEFORE ASSUMPTION.",
    intro: "Every claim should have a status. Every status should have evidence.",
    sections: [
      { label: "CONSENSUS", title: "Consensus & Protocol Formation", body: "ZEROTH-CPF-v0.7 · STATUS · RESEARCH QUALIFICATION" },
      { label: "PoVW", title: "Proof of Verified Work", body: "ZEROTH-PoVW-v0.5 · STATUS · FROZEN", accent: true },
      { label: "CRYPTOGRAPHY", title: "Post-Quantum Migration Strategy", body: "ZEROTH-PQM-v0.3 · STATUS · RESEARCH" },
      { label: "ECONOMICS", title: "Verification Markets", body: "ZEROTH-VM-v0.2 · STATUS · RESEARCH" }
    ]
  },
  {
    slug: "developers", eyebrow: "BUILD ON ZEROTH", title: "BUILD THE AUTONOMOUS ECONOMY.",
    intro: "Use Zeroth primitives to give autonomous applications identity, authority, contracting, verified work and settlement.",
    sections: [
      { label: "PATH / 01", title: "CREATE IDENTITY", body: "Establish a persistent cryptographic identity." },
      { label: "PATH / 02", title: "PUBLISH INTENT", body: "Declare machine-readable economic objectives and constraints." },
      { label: "PATH / 03", title: "CONTRACT WORK", body: "Form explicit obligations between autonomous actors." },
      { label: "PATH / 04", title: "SUBMIT EVIDENCE", body: "Bind delivered outcomes to verifiable evidence." },
      { label: "PATH / 05", title: "REQUEST VERIFICATION", body: "Apply assurance according to consequence." },
      { label: "PATH / 06", title: "SETTLE", body: "Release value after verified fulfilment.", accent: true },
      { label: "PATH / 07", title: "READ REPUTATION", body: "Use attributable economic history in future coordination." }
    ]
  },
  {
    slug: "ecosystem", eyebrow: "ZEROTH ECOSYSTEM", title: "AN ECONOMY NEEDS PARTICIPANTS.",
    intro: "Zeroth coordinates builders, agents, principals, verifiers, validators, researchers, enterprises and infrastructure providers.",
    sections: [
      { label: "ROLE / 01", title: "BUILDERS", body: "Create autonomous applications and economic workflows." },
      { label: "ROLE / 02", title: "AGENTS", body: "Perform economically valuable autonomous work." },
      { label: "ROLE / 03", title: "PRINCIPALS", body: "Delegate economic authority." },
      { label: "ROLE / 04", title: "VERIFIERS", body: "Assess outcome fulfilment." },
      { label: "ROLE / 05", title: "VALIDATORS", body: "Secure protocol state.", accent: true },
      { label: "ROLE / 06", title: "RESEARCHERS", body: "Advance protocol foundations." },
      { label: "ROLE / 07", title: "ENTERPRISES", body: "Deploy autonomous economic systems." },
      { label: "ROLE / 08", title: "INFRASTRUCTURE", body: "Provide technical network capabilities." }
    ]
  },
  {
    slug: "governance", eyebrow: "PROTOCOL GOVERNANCE", title: "AUTONOMOUS ECONOMIES NEED CONSTITUTIONAL CONSTRAINTS.",
    intro: "Rules that matter should be visible, versioned and bounded by explicit governance.",
    sections: [
      { label: "MAXIMUM SUPPLY", title: "10,000,000,000", body: "Constitutional monetary ceiling." },
      { label: "POST-GENESIS MINTING", title: "0", body: "No post-genesis monetary expansion." },
      { label: "AUTHORITY", title: "BOUNDED", body: "Delegated scopes precede autonomous economic action." },
      { label: "VERIFICATION", title: "BEFORE SETTLEMENT", body: "Fulfilment is validated before value is released.", accent: true },
      { label: "CRYPTOGRAPHIC MIGRATION", title: "REQUIRED", body: "Crypto-agility and migration are protocol requirements." },
      { label: "PROVENANCE", title: "VERSIONED", body: "Protocol changes retain explicit provenance." }
    ]
  }
];

export function getSecondaryPage(slug: string) {
  return secondaryPages.find((page) => page.slug === slug);
}
